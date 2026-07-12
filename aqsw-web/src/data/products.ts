import { readdir } from "node:fs/promises";
import path from "node:path";

import { asset } from "@/lib/assets";

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const coverNames = new Set(["cover.jpg", "cover.jpeg", "cover.png", "cover.webp"]);
const productsRoot = path.join(process.cwd(), "public", "assets", "products");

export type ProductItem = {
  id: string;
  title: string;
  folder: string;
  coverImage: string;
  images: string[];
};

async function loadProducts(): Promise<ProductItem[]> {
  const folders = await readdir(productsRoot, { withFileTypes: true });

  const productEntries = await Promise.all(
    folders
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const folderName = entry.name;
        const folderPath = path.join(productsRoot, folderName);
        const files = await readdir(folderPath, { withFileTypes: true });

        const imageFiles = files
          .filter((file) => file.isFile())
          .map((file) => file.name)
          .filter((fileName) => {
            const extension = path.extname(fileName).toLowerCase();
            return supportedExtensions.has(extension);
          })
          .sort((a, b) => a.localeCompare(b));

        if (imageFiles.length === 0) {
          return null;
        }

        const coverFile = imageFiles.find((fileName) => {
          const normalizedName = fileName.toLowerCase();
          return coverNames.has(normalizedName);
        });

        const coverImageFile = coverFile ?? imageFiles[0];
        const coverImage = asset(`/assets/products/${folderName}/${coverImageFile}`);
        const images = imageFiles.map((fileName) =>
          asset(`/assets/products/${folderName}/${fileName}`)
        );

        const id = folderName
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return {
          id: id || folderName,
          title: folderName,
          folder: folderName,
          coverImage,
          images,
        } satisfies ProductItem;
      })
  );

  return productEntries
    .filter((entry): entry is ProductItem => entry !== null)
    .sort((a, b) => a.folder.localeCompare(b.folder));
}

export const products = await loadProducts();
