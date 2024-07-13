"use server";

import { revalidatePath } from "next/cache";

export async function revalidatePaths(paths: string[]) {
    paths.forEach(path => revalidatePath(path));
}
