import { Container } from "@/components/layout/container";

interface PagePlaceholderProps {
  title: string;
  description: string;
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="bg-background pt-32 pb-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-secondary">
            Coming Soon
          </span>
          <h1 className="font-heading text-4xl font-bold uppercase text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-dark-gray">{description}</p>
        </div>
      </Container>
    </section>
  );
}
