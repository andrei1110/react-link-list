import { Area } from "react-easy-crop";

export async function getCroppedImg(
  imageSrc: string,
  crop: { x: number; y: number },
  zoom: number,
  croppedAreaPixels?: Area
): Promise<Blob> {
  if (!croppedAreaPixels) {
    throw new Error("Invalid croppedAreaPixels");
  }
  const img = document.createElement("img");
  img.src = imageSrc;

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  ctx.drawImage(
    img,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  return await new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob as Blob), "image/jpeg")
  );
}
