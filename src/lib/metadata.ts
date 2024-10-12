import type { Metadata } from "next";

export function CreateMetadata(): Metadata {
  const title = "Case-Cobra | custom high-quality phone cases";
  const description = "Create custom high-quality phone cases in seconds";

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
