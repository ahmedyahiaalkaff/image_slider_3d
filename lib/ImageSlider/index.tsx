import { useEffect, useRef } from "react";
import { ImageSliderImagesList } from "../ImageSliderImagesList";
import type { image } from "../ImageSliderImagesList";
import styles from "./styles.module.css";


type ImageSliderProps = {
  images: image[];
  perspective?: string;
  xRotation?: string;
  zTranslation?: string;
  className?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationIterationCount?: "infinite" | number;
  animationDirection?: string;
  animationDelay?: string;
  animationFillMode?: string;
};

export function ImageSlider({
  images,
  perspective,
  xRotation,
  zTranslation,
  className,
  animationDuration,
  animationTimingFunction,
  animationIterationCount,
  animationDirection,
  animationDelay,
  animationFillMode,
}: ImageSliderProps) {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slider && slider.current) {
      slider.current.style.animationName = "none";
      setTimeout(() => {
        if (slider && slider.current) {
          slider.current.style.animationName = "";
        }
      }, 10);
    }
  }, [animationIterationCount]);

  return (
    <div
      className={`${styles.imageSlider} ${
        className ? className : "imageSlider"
      }`}
    >
      <div
        className={styles.slider}
        style={
          {
            "--perspective": perspective,
            "--xRotation": xRotation,
            "--animation-duration": animationDuration,
            "--animation-timing-function": animationTimingFunction,
            "--animation-iteration-count": animationIterationCount,
            "--animation-direction": animationDirection,
            "--animation-delay": animationDelay,
            "--animation-fill-mode": animationFillMode,
          } as React.CSSProperties
        }
        ref={slider}
      >
        <ImageSliderImagesList images={images} zTranslation={zTranslation}/>
      </div>
    </div>
  );
}
