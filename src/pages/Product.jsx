import { useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import styles from './Product.module.css';
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';

export default function Product() {
  const { getProduct, product, loading } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  return (
    <section className={styles.productCont}>
      {!loading ? (
        <>
          <img src={product.image} alt="product image" />
          <div className={styles.info}>
            <h2>{product.title}</h2>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.price}>{`$${product.price}`}</p>
            <button className={styles.btn}>Add To Cart</button>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
