import styles from './Card.module.css';
import { useNavigate } from 'react-router';
const FAKE_DATA = {
  img: 'https://picsum.photos/150',
  name: 'Product Name',
  price: '9.99',
};

export default function Card() {
  const navigate = useNavigate();
  const handleClick = function () {
    navigate('/product/1');
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={FAKE_DATA.img} alt="" />
      <p className={styles.name}>{FAKE_DATA.name}</p>
      <p className={styles.price}>{`$${FAKE_DATA.price}`}</p>
      <button className={styles.btn}>Add To Cart</button>
    </div>
  );
}
