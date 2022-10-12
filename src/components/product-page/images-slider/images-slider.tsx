import { FC, useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

import product1 from '@assets/images/image-product-1.jpg';
import product2 from '@assets/images/image-product-2.jpg';
import product3 from '@assets/images/image-product-3.jpg';
import product4 from '@assets/images/image-product-4.jpg';

import productPreview1 from '@assets/images/image-product-1-thumbnail.jpg';
import productPreview2 from '@assets/images/image-product-2-thumbnail.jpg';
import productPreview3 from '@assets/images/image-product-3-thumbnail.jpg';
import productPreview4 from '@assets/images/image-product-4-thumbnail.jpg';

import iconPrevious from '@assets/images/icon-previous.svg';
import iconNext from '@assets/images/icon-next.svg';

const products = {
  [productPreview1]: product1,
  [productPreview2]: product2,
  [productPreview3]: product3,
  [productPreview4]: product4,
};

const previews = Object.keys(products);
const productsArray = Object.values(products);

const ImagesSlider: FC = () => {
  const [activeImage, setActiveImage] = useState(product1);

  const imageClickHandler = (preview) => {
    setActiveImage(products[preview]);
  };

  const previousClickHandler = () => {
    setActiveImage((prev) => productsArray[productsArray.indexOf(prev) - 1] || productsArray.at(-1));
  };

  const nextClickHandler = () => {
    setActiveImage((prev) => productsArray[productsArray.indexOf(prev) + 1] || productsArray[0]);
  };

  return (
    <div className={styles.sliderWrapper}>
      <img
        className={styles.imageArrowLeft}
        src={iconPrevious}
        alt="previous"
        onClick={previousClickHandler}
      />
      <img
        className={styles.imageArrowRight}
        src={iconNext}
        alt="next"
        onClick={nextClickHandler}
      />
      <img className={styles.activeImage} src={activeImage} alt="active product"/>

      {previews.map((product, index) =>
        (<div
          className={clsx(
            styles.imagePreview,
            (activeImage === products[product]) && styles.activePreview
          )}
          key={index}
        >
          <img
            src={product}
            alt="product"
            onClick={() => {
              imageClickHandler(product)
            }}
          />
        </div>)
      )}
    </div>
  );
};

export { ImagesSlider };
