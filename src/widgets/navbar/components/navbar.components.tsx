import { FC } from 'react';
import SeacrhIcon from '@shared/icons/search.svg';
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
      <SeacrhIcon />
      <input type="text" placeholder="Search Art Work / Creator" />
    </div>
  );
};
