import { useEffect, useState } from "react";

type VideoImagesProps = {
  className?: string;
  imageClassName?: string;
  autoPlay?: boolean;
  intervalMs?: number;
  images?: string[];
};

const casaImages = Object.values(
  import.meta.glob("../assets/Casas/**/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
);

const proyectoImages = Object.values(
  import.meta.glob("../assets/Proyectos/**/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
);

const defaultImages = [...casaImages, ...proyectoImages];

export function VideoImages({
  className = "mb-1 overflow-hidden border border-border w-full",
  imageClassName = "w-full h-auto object-cover",
  autoPlay = true,
  intervalMs = 1700,
  images = defaultImages,
}: VideoImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [autoPlay, images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <img
        src={images[activeIndex]}
        alt={`Video frame ${activeIndex + 1}`}
        className={imageClassName}
      />
    </div>
  );
}
