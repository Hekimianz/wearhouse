import styles from './ProductsList.module.css';
import Card from '../components/Card';
import useProducts from '../hooks/useProducts';
export default function ProductsList() {
  const { products } = useProducts();

  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <Card
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.image}
        />
      ))}
    </section>
  );
}
