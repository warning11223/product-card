import type {FC} from "react";
import styles from "../../styles/ProductCard.module.css";
import type {ProductCardProps} from "../../../data/products.ts";

const ProductCard: FC<ProductCardProps> = ({ title, origin, price, currency, imageUrl }) => {
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
    }).format(price / 100);

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <p className={styles.title}>{title}</p>
            <p className={styles.origin}>Производство: {origin}</p>
            <p className={styles.price}>{formattedPrice}</p>
        </div>
    );
};

export default ProductCard;
