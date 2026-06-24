import { useEffect, useState } from "react";
import image1 from "@/assets/ParaVideo/Para-video1.jpeg";
import image2 from "@/assets/ParaVideo/Para-video2.jpeg";
import image3 from "@/assets/ParaVideo/Para-video3.jpeg";
import image4 from "@/assets/ParaVideo/Para-video4.jpeg";

const images = [image1, image2, image3, image4];

export function VideoImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 1700);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mb-12 overflow-hidden border border-border">
      <img
        src={images[activeIndex]}
        alt={`Video frame ${activeIndex + 1}`}
        className="w-full h-105 object-cover"
      />
    </div>
  );
}
