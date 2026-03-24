import { useState } from "react";
import axios from "axios";

interface UploadOptions {
  folder: string;
  onSuccess?: (url: string) => void;
}

export function useCloudinaryUpload({ folder, onSuccess }: UploadOptions) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState<string | null>(null);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setProgress(0);

    try {
      // 1. Get signed upload params
      const sigRes = await axios.post("/api/upload/signature", {
        folder,
      });

      const { signature, timestamp, cloudName, apiKey } = sigRes.data;

      // 2. Build form data
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp.toString());
      formData.append("signature", signature);
      formData.append("folder", folder);

      // 3. Upload to Cloudinary
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          onUploadProgress: (event) => {
            if (!event.total) return;
            const percent = (event.loaded / event.total) * 100;
            setProgress(percent);
          },
        }
      );

      const secureUrl = uploadRes.data.secure_url;

      setUrl(secureUrl);
      setProgress(100);
      onSuccess?.(secureUrl);

      return secureUrl;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadFile,
    isUploading,
    progress,
    url,
  };
}