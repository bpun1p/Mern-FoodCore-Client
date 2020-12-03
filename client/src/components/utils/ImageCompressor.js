import imageCompression from 'browser-image-compression';

export default function ImageCompressor(file) {
  const options = {
    maxSizeMB: 0.05,
    maxWidthOrHeight: 700,
    useWebWorker: true,
  };
  console.log(imageCompression(file, options));
  return imageCompression(file, options);
}
