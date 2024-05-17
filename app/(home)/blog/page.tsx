import { Suspense } from "react";
import MoreStories from "@/app/(blog)/more-stories";

export default function Page() {
  return (
    <div className="container mx-auto pt-8">
      <aside>
        <Suspense>
          <MoreStories skip="0" limit={10} />
        </Suspense>
      </aside>
      {/* )} */}
    </div>
  );
}
