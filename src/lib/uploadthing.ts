import { generateReactHelpers, UploadButton } from "@uploadthing/react";
import type { UploadRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing } = generateReactHelpers<UploadRouter>();
export { UploadButton };