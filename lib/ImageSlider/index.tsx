import styles from "./styles.module.css";

export interface ImageSliderProps {
  greeting: string
}

export function ImageSlider({greeting}:ImageSliderProps) {
  return (
    <div>
      <h1 className={styles.h1}>{greeting}</h1>
    </div>
  );
}
