import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: "8MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("Upload complete:", file.url);

    return {
      url: file.url,
    };
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;