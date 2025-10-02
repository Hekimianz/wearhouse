import styles from './CartItem.module.css';
import useProducts from '../hooks/useProducts';

export default function CartItem({ id, title, image, price, qty }) {
  const { increaseQty, decreaseQty, remove } = useProducts();

  return (
    <div className={styles.item}>
      <img src={image} alt="product img" />
      <h2 className={styles.name}>{title}</h2>
      <div className={styles.qtyCont}>
        <button onClick={() => decreaseQty(id)}>-1</button>
        <button onClick={() => increaseQty(id)}>+1</button>
      </div>
      <p className={styles.priceData}>
        {`($${price} x ${qty})`}
        <span className={styles.total}>{` $${(price * qty).toFixed(2)}`}</span>
      </p>
      <span className={styles.delete} onClick={() => remove(id)}>
        &times;
      </span>
    </div>
  );
}
