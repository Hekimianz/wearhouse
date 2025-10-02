import { useNavigate } from 'react-router';
import useProducts from '../hooks/useProducts';
import styles from './NavBar.module.css';
export default function NavBar() {
  const { numOfCartItems } = useProducts();
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
        {numOfCartItems ? (
          <span className={styles.cartCount}>{numOfCartItems}</span>
        ) : null}
        <span className="material-symbols-outlined">shopping_basket</span>
      </button>
    </nav>
  );
}
