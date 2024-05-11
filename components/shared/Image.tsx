import Image from "next/image";
import { useState } from "react";

const CImage = ({ src, alt, width, height, className, sizes, style }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`rounded-none duration-[900ms] ease-in-out absolute h-full w-full overflow-hidden ${className} ${
        isLoading ? "wave-effect bg-gray-700" : "bg-transparent"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        style={style}
        className={`object-cover duration-700 ease-in-out object-top overflow-hidden ${className} ${
          isLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
        }`}
        placeholder="empty"
        onLoad={() => setIsLoading(false)}
        priority
        fill
      />
    </div>
  );
};

export default CImage;
