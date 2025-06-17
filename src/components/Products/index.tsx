import ProductCard from "../ProductCard";
import {products} from "../../../data/products.ts";

const Products = () => {
    return products.map(product => <ProductCard key={product.id} {...product} />)
};

export default Products;