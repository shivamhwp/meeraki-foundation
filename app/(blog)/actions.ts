"use server";

import { draftMode } from "next/headers";

export async function disableDraftMode() {
  "use server";
  await Promise.allSettled([draftMode().disable()]);
}
