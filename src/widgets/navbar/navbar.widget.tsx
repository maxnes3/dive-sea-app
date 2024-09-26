import Logo from '@shared/icons/wave.svg';
import { Button } from '@shared/button';
import { ButtonSchema } from '@shared/constants/constants';
import { Link, Search } from './components/navbar.components';
import styles from './navbar.module.scss';

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
  return (
    <div className={styles.navbar}>
      <Logo />
      {links.map((link) => {
        return <Link key={link.text} text={link.text} href={link.href} />;
      })}
      <Search />
      <Button text={'connect wallet'} schema={ButtonSchema.dark} />
    </div>
  );
}

export default NavBar;
