import Link from 'next/link';
import styles from '../styles/navbar.module.css'
const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
      <div className={`${styles.container} container`}>
          <div className={styles.logo}> This is Logo </div>
          <ul>
            <li>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            <li>
              <Link className={styles.link} href="/cart">Cart</Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
