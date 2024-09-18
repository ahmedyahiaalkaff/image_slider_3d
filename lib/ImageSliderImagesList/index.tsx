import React, { useCallback, useEffect } from "react";
import styles from "./styles.module.css";

export type image = {
  src: string;
};

type ImageSliderImagesListProps = {
  images: image[];
  zTranslation?: string;
};

export const ImageSliderImagesList = React.memo(
  ({ images, zTranslation }: ImageSliderImagesListProps) => {
    return (
      <>
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
      </>
    );
  }
);
