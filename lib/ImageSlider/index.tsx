import styles from "./styles.module.css";

type image = {
  src: string;
};

type ImageSliderProps = {
  images: image[];
  perspective?: string;
  xRotation?: string;
  zTranslation?: string;
  className?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationIterationCount?: string;
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
  return (
    <div className={`${styles.imageSlider} ${className ? className : "imageSlider"}`}>
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
      >
        {images.map((image, index) => {
          return (
            <div
              className={styles.item}
              style={{
                transform: `
                rotateY(${(index / images.length) * 360}deg)
                translateZ(${zTranslation ? zTranslation : "300px"})
              `,
              }}
              key={image.src}
            >
              <img src={image.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
