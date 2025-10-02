import styles from './Card.module.css';
import { useNavigate } from 'react-router';
import useProducts from '../hooks/useProducts';
import Spinner from '../components/Spinner';

export default function Card({ id, title, price, img }) {
  const { loading, addToCart } = useProducts();
  const navigate = useNavigate();
  const handleClick = function () {
    navigate(`/product/${id}`);
  };
  const handleAddToCart = function (product) {
    addToCart(product);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      {!loading ? (
        <>
          <img src={img} alt="product image" />
          <p className={styles.name}>{title}</p>
          <p className={styles.price}>{`$${price}`}</p>
          <button
            onClick={async (e) => {
              e.stopPropagation();
              handleAddToCart({ id, title, price, img, qty: 1 });
            }}
            className={styles.btn}
          >
            Add To Cart
          </button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
