import { useEffect, useState } from "react";
import image1 from "@/assets/Para-video1.jpeg";
import image2 from "@/assets/Para-video2.jpeg";
import image3 from "@/assets/Para-video3.jpeg";
import image4 from "@/assets/Para-video4.jpeg";

const images = [image1, image2, image3, image4];

export function VideoImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mb-12 overflow-hidden rounded-[1.25rem] border border-border">
      <img
        src={images[activeIndex]}
        alt={`Video frame ${activeIndex + 1}`}
        className="w-full h-[420px] object-cover"
      />
    </div>
  );
}
