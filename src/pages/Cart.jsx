import styles from './Cart.module.css';
import CartItem from '../components/CartItem';
import useProducts from '../hooks/useProducts';
export default function Cart() {
  const { cart, checkout } = useProducts();
  const total = cart.reduce((acc, curr) => {
    return curr.qty * curr.price + acc;
  }, 0);
  if (!cart.length)
    return (
      <p className={styles.empty}>You haven't added any items to your cart!</p>
    );
  return (
    <section className={styles.cart}>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          qty={item.qty}
          image={item.img}
          price={item.price}
        />
      ))}
      <p className={styles.total}>
        Total: <span className={styles.price}>${total.toFixed(2)}</span>
      </p>
      <button onClick={checkout} className={styles.btn}>
        Checkout
      </button>
    </section>
  );
}
