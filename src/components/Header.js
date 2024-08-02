import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <img
        src={`${process.env.PUBLIC_URL}/logo192.png`}
        alt="logo"
        className={styles.logo}
      />
      <ul className={styles.menu}>
        <li>
          <Link to="/">Go To Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
