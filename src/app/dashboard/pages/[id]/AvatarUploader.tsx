"use client";

import { useState } from "react";
import ImageCropper from "@/components/image-cropper/ImageCropper";
import { Avatar } from "@/components/ui/Avatar";

export default function AvatarUploader({
  avatarUrl,
  onUpload,
}: {
  avatarUrl?: string;
  onUpload: (file: File) => Promise<void>;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [cropImage, setCropImage] = useState<string | null>(null);

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setCropImage(url);
  };

  const handleCrop = async (blob: Blob) => {
    const file = new File([blob], "avatar.jpeg", { type: "image/jpeg" });

    setPreview(URL.createObjectURL(blob));

    setCropImage(null);

    await onUpload(file);
  };

  const finalImage = preview || avatarUrl;

  return (
    <div className="space-y-4 ">
      <div className="flex justify-center">
        <div className="w-28 h-28">
          <Avatar
            src={finalImage}
            size="sm"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <label className="cursor-pointer bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
          Selecionar imagem
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleSelectFile}
          />
        </label>
      </div>

      {cropImage && (
        <ImageCropper
          image={cropImage}
          onCancel={() => setCropImage(null)}
          onComplete={handleCrop}
        />
      )}
    </div>
  );
}
