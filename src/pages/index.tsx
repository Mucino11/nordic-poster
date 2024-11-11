// src/pages/index.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Nordic</h1>
        <p>Discover unique posters inspired by Norse mythology.</p>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className={styles.productImage}
              />
              <h2>{product.title}</h2>
              <p>{product.price} NOK</p>
              <button
                onClick={() => addToCart(product)}
                className={styles.addToCartButton}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

// Fetch product data at build time.......
export async function getStaticProps() {
  const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
  const res = await fetch(`${host}/data/products.json`);
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
}
