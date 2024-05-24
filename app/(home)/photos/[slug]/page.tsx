import { ImageGrid } from "@/app/components/image-grid";
import cloudinary from "cloudinary";
import { cache } from "react";

export type SearchResult = {
  public_id: string;
  url: string;
  resource_type: string;
};

export async function generateStaticParams({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const results = (await cloudinary.v2.search
    .expression(`resource_type:${"image "} AND folder:${slug}`)
    .execute()) as { resources: SearchResult[] };

  const images = results.resources?.map((resource: any) => ({
    public_id: resource.public_id,
    url: resource.secure_url,
    resource_type: resource.resource_type,
  }));
  return images as SearchResult[];
}

export default async function PhotosPage({
  params,
}: {
  params: { slug: string };
}) {
  // const cachcedResults = cache(() => generateStaticParams({ params }));

  const images = await generateStaticParams({ params });

  return (
    <div className="xl:pt-2">
      <h1 className="text-4xl font-bold pb-6">{params.slug}</h1>

      {images ? (
        <ImageGrid images={images} />
      ) : (
        <div className="text-4xl font-bold w-full h-full flex">
          Loading lovely smiles
        </div>
      )}
    </div>
  );
}
