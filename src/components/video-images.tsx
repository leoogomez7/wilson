import { useEffect, useState } from "react";

type VideoImagesProps = {
  className?: string;
  imageClassName?: string;
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

const images = [...casaImages, ...proyectoImages];

export function VideoImages({ className = "mb-1 overflow-hidden border border-border w-full", imageClassName = "w-full h-auto object-cover" }: VideoImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 1700);

    return () => window.clearInterval(interval);
  }, []);

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
