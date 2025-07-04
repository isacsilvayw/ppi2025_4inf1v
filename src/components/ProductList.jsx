import { useEffect, UseState } from "react";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";

export function ProductList() {
    var category = "smartphones";
    var limit = 10;
    var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}`;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    return (
        <div className={styles.container}>
            <h1>Tja Megasrone</h1>
            {products.map((product) => (
                <div key ={product.id} className={styles.productCard}>
                    <img 
                    src={product.thumbnail}
                    alt={product.title}
                    className={styles.productImage}
                    />
                    <h2 className={styles.productTitle}>{`${product.brand} ${product.title}`}</h2>
                    <p className={styles.productDescription}> Price ${product.price}</p>
                    <p className={styles.productPrice}>${product.description}</p>
                    </div>

           ))}
           {loading && (
            <div>
          <CircularProgress
          thickness ={5}
          style={{ margin: "2rem auto", display: "block" }}
          sx={{ color: "#1976d2" }}
                />
        <p>Loading products...</p>
        </div>
           )}
           {error && <p> Error loading Producus: {error.mensage} ❌</p>}
        </div>
    )
}