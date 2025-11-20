"use client";

import Cropper, { Area } from "react-easy-crop";
import { useState } from "react";
import { getCroppedImg } from "./cropImage";

export default function ImageCropper({
  image,
  onCancel,
  onComplete,
}: {
  image: string;
  onCancel: () => void;
  onComplete: (blob: Blob) => void;
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleCrop = async () => {
    const croppedBlob = await getCroppedImg(
      image,
      crop,
      zoom,
      croppedAreaPixels
    );
    onComplete(croppedBlob);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#111] border border-[#333] rounded-xl p-4 w-full max-w-lg space-y-4">
        <h2 className="text-lg font-semibold text-center">Recortar imagem</h2>

        <div className="relative w-full h-80 bg-black rounded-lg overflow-hidden">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="rect"
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, croppedPixels) =>
              setCroppedAreaPixels(croppedPixels)
            }
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition"
          >
            Cancelar
          </button>

          <button
            onClick={handleCrop}
            className="px-4 py-2 bg-brand rounded-lg hover:bg-brandHover transition"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
