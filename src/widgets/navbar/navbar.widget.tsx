import Logo from '@shared/icons/wave.svg';
import { Button } from '@shared/button';
import { ButtonSchema } from '@shared/constants/constants';
import {
  BurgerMenu,
  Link,
  Search,
} from '@widgets/navbar/components/navbar.components';
import styles from '@widgets/navbar/navbar.module.scss';
import { useEffect, useState } from 'react';

const links = [
  {
    text: 'discover',
    href: '/',
  },
  {
    text: 'creators',
    href: '/',
  },
  {
    text: 'sell',
    href: '/',
  },
  {
    text: 'stats',
    href: '/',
  },
];

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 375);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={`${styles.elements} ${styles.elements_left}`}>
        <Logo className={styles.logo} />
        {isMobile ? (
          <div className={styles.title}>DiveSea</div>
        ) : (
          links.map((link) => {
            return <Link key={link.text} text={link.text} href={link.href} />;
          })
        )}
      </div>
      <div className={`${styles.elements} ${styles.elements_right}`}>
        {isMobile ? (
          <BurgerMenu links={links} />
        ) : (
          <>
            <Search />
            <Button text={'connect wallet'} schema={ButtonSchema.dark} />
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
