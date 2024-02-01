import React, { useEffect, useState } from "react";
import ImageItem from "./interface";
import "./_style.scss";

const ExtendedImage = ({
  image,
  className = "",
  preload = false,
}: {
  image: ImageItem;
  className?: string;
  preload?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);

  /**
   * Image preload check
   */
  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = image.image;
  }, [image]);

  return (
    <div className={`extended-image ${className}`}>
      {!loaded && preload && (
        <div className="extended-image-preload">
          <div className="preload-animation">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <img
        src={image.image}
        width={image.size?.width}
        height={image.size?.height}
        alt={image.alt || ""}
      />
    </div>
  );
};

export default ExtendedImage;
