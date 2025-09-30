import styles from './Product.module.css';
const FAKE_DATA = {
  img: 'https://picsum.photos/387/352',
  name: 'Product Name',
  price: '9.99',
  desc: 'This is a description for this item. Please buy it in order for us to get rich. This is a description for this item. Please buy it in order for us to get rich. This is a description for this item. Please buy it in order for us to get rich.',
};
export default function Product() {
  return (
    <section className={styles.productCont}>
      <img src={FAKE_DATA.img} alt="product image" />
      <div className={styles.info}>
        <h2>{FAKE_DATA.name}</h2>
        <p className={styles.desc}>{FAKE_DATA.desc}</p>
        <p className={styles.price}>{`$${FAKE_DATA.price}`}</p>
        <button className={styles.btn}>Add To Cart</button>
      </div>
    </section>
  );
}
