import { FC } from 'react';

import styles from './styles.module.scss';
import iconCart from '@assets/images/icon-cart.svg';
import avatar from '@assets/images/image-avatar.png';

const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <span className={styles.logo}>sneakers</span>
        <div className={styles.menu}>
          <span className={styles.menuTitle}>Collections</span>
          <span className={styles.menuItem}>Men</span>
          <span className={styles.menuItem}>Women</span>
          <span className={styles.menuItem}>About</span>
          <span className={styles.menuItem}>Contact</span>
        </div>
      </div>
      <div className={styles.rightIcons}>
        <img className={styles.cart} src={iconCart} alt="cart"/>
        <img className={styles.avatar} src={avatar} alt="avatar"/>
      </div>

    </div>
  );
};

export { Header }
