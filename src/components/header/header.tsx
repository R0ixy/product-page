import { FC, useState } from 'react';
import clsx from 'clsx';

import { Cart } from '@components/cart/cart';
import { useAppSelector } from '@hooks/hooks';

import CartIcon from '@assets/images/icon-cart.svg';
import avatar from '@assets/images/image-avatar.png';
import menuIcon from '@assets/images/icon-menu.svg';
import closeIcon from '@assets/images/icon-close.svg';

import styles from './styles.module.scss';


const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const counter = useAppSelector((state) => state.cartReducer.items.length);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const cartClickHandler = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={styles.headerWrapper}>
      <div>
        <img className={styles.menuIcon} src={menuIcon} alt="menu" onClick={toggleMenu}/>
        <span className={styles.logo}>sneakers</span>
        {isMenuOpen && <div className={styles.background} onClick={toggleMenu}/>}
        <div className={clsx(styles.menu, isMenuOpen && styles.showMenu)}>
          <img className={styles.closeIcon} src={closeIcon} alt="close" onClick={toggleMenu}/>
          <span className={styles.menuTitle}>Collections</span>
          <span className={styles.menuItem}>Men</span>
          <span className={styles.menuItem}>Women</span>
          <span className={styles.menuItem}>About</span>
          <span className={styles.menuItem}>Contact</span>
        </div>
      </div>
      <div className={styles.rightIcons}>
        <img className={styles.cart} src={CartIcon} alt="cart" onClick={cartClickHandler}/>
        {!!counter && <span className={styles.counter}>{counter}</span>}
        <img className={styles.avatar} src={avatar} alt="avatar"/>
      </div>
      {isCartOpen && <Cart closeCart={cartClickHandler}/>}
    </div>
  );
};

export { Header }
