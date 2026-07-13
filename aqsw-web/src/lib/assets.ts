/** Encode public asset paths that may contain spaces or special characters. */
export function asset(path: string): string {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export const images = {
  hero: asset("/assets/hero/hero-industrial.jpg"),
  ad: asset("/assets/hero/ad-image.png"),
  about: asset("/assets/whyaqsw/cnc.jpg"),
  trolleys: asset("/assets/products/Moveable/cover.jpg"),
  tables: asset("/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.53.16 AM.jpeg"),
  lockers: asset("/assets/products/Lockers/cover.jpg"),
  lockersMs: asset("/assets/products/Lockers/locker MS.jpeg"),
  racks: asset("/assets/products/Mobile Racks/cover.png"),
  almirah: asset("/assets/products/Almirah/cover.jpg"),
  safes: asset("/assets/products/Almirah/thieves loker.jpeg"),
  drawers: asset("/assets/products/Lockers/2.jpeg"),
  kitchen: asset("/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.52.19 AM (1).jpeg"),
  stools: asset("/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.52.18 AM.jpeg"),
  vessels: asset("/assets/products/Mobile Racks/WhatsApp Image 2026-07-08 at 1.52.20 AM (1).jpeg"),
  sinks: asset("/assets/products/SS Sinks/cover.jpg"),
  sinksAlt: asset("/assets/products/SS Sinks/sink.jpeg"),
  lab: asset("/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.52.20 AM.jpeg"),
  structural: asset("/assets/products/Mobile Racks/1000069230.jpg"),
  industries: {
    pharmaceutical: asset("/assets/industries/pharma.jpg"),
    food: asset("/assets/industries/food.jpg"),
    commercial: asset("/assets/industries/commercial.jpg"),
    industrial: asset("/assets/industries/Industrial.jpg"),
    chemical: asset("/assets/industries/chemical.jpg"),
  },
  expertise: {
    almirah: asset("/assets/products/Almirah/cover.jpg"),
    labFurniture: asset(
      "/assets/products/Lab Furniture/cover.jpg"
    ),
    lockers: asset("/assets/products/Lockers/cover.jpg"),
    mobileRacks: asset("/assets/products/Mobile Racks/cover.png"),
    moveable: asset(
      "/assets/products/Moveable/cover.jpg"
    ),
    ssSinks: asset("/assets/products/SS Sinks/cover.jpg"),
  },
} as const;
