import { FC, useState } from 'react';
import SeacrhIcon from '@shared/icons/search.svg';
import MenuIcon from '@shared/icons/menu.svg';
import styles from '../navbar.module.scss';

type LinkType = {
  text: string;
  href: string;
};

export const Link: FC<LinkType> = (link) => {
  return (
    <a className={styles.link} href={link.href}>
      {link.text}
    </a>
  );
};

export const Search = () => {
  return (
    <div className={styles.search}>
      <SeacrhIcon className={styles.icon} />
      <input type="text" placeholder="Search Art Work / Creator" />
    </div>
  );
};

type BurgerMenuProps = {
  links: { text: string; href: string }[];
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen);
  };

  return (
    <div className={styles.burger}>
      <button onClick={toggleMenu} className={styles.toggle}>
        <MenuIcon className={styles.icon} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {links.map((link) => (
            <Link text={link.text} href={link.href} />
          ))}
        </div>
      )}
    </div>
  );
};
