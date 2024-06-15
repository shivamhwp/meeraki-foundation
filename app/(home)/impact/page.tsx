import { folders } from "@/app/utils/data";
import Link from "next/link";

export default function Impact() {
  return (
    <div className="flex w-full h-full justify-between gap-16 pt-8 max-md:flex-col  pb-12">
      <ul className="w-full flex flex-col gap-7">
        {folders.map((folder) => (
          <li key={folder.id} className="w-full h-auto flex">
            <Link
              href={`/photos/${folder.name}`}
              className="w-full flex justify-between gap-4  p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="gap-4 flex flex-col">
                <h2 className="text-2xl font-bold">{folder.heading}</h2>
                <h3>{folder.description}</h3>
              </div>
              <div className="text-lg font-medium ">→</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
