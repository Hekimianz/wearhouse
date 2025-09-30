import { useNavigate } from 'react-router';
import styles from './NavBar.module.css';
export default function NavBar() {
  const navigate = useNavigate();
  const handleCartClick = function () {
    navigate('/cart');
  };
  const handleLogoClick = function () {
    navigate('/');
  };
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="logo"
        onClick={handleLogoClick}
      />
      <button className={styles.btn} onClick={handleCartClick}>
        <span className={styles.cartCount}>2</span>
        <span className="material-symbols-outlined">shopping_basket</span>
      </button>
    </nav>
  );
}
