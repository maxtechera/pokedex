import * as React from "react";
import styled, { css } from "styled-components";

// MOstrar loading
// Cargar la imagen
// Cuando termine de cargar mostrar la imagen
const LazyLoadedImage = ({ src }) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onLoad = () => {
      setLoading(false);
    };
  }, [src]);

  return <Image src={src} loading={loading} />;
};

const Image = styled.img`
  ${props =>
    props.loading
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}

  transition: .3s;
`;

export default LazyLoadedImage;
