import { SearchResult } from "../(home)/photos/[slug]/page";
import CloudinaryImage from "./cloudinary-image";

const MAX_COLUMNS = 4;

export function ImageGrid({ images }: { images: SearchResult[] }) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }
  return (
    <div className="grid grid-cols-4 gap-4 xl:pb-10">
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
        getColumns(5),
        getColumns(6),
      ].map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map((result) => {
            return (
              <CloudinaryImage
                key={idx}
                height="1024"
                width="1024"
                sizes="100vw"
                alt="lovely people"
                src={result.public_id}
                className="rounded-lg"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
