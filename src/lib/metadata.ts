import type { Metadata } from "next";

export function CreateMetadata(): Metadata {
  const title = "Case-Cobra";
  const description =
    "Crea custodie personalizzate di alta qualità per il tuo telefono in pochi secondi";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "/thumbnail.png" }],
    },
    icons: "/favicon.ico",
    metadataBase: new URL(process.env.BASE_URL as string),
  };
}
