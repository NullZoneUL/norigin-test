interface ImageItem {
  image: string;
  size?: {
    width: number;
    height: number;
  };
  alt?: string;
}

export default ImageItem;
