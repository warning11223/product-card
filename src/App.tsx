import './App.css'
import ProductCard from "./components/ProductCard";
import {products} from "../data/products.ts";

function App() {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    origin={product.origin}
                    price={product.price}
                    currency={product.currency}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    )
}

export default App;
