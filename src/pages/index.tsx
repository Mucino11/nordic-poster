import Link from "next/link";
import styles from "../styles/Home.module.css";

const products = [
  {
    id: 1,
    title: "Yggdrasil - The Tree of Life",
    image: "/images/odin-1.jpg",
    price: 299,
  },
  {
    id: 2,
    title: "Thor and Mjölnir",
    image: "/images/odin-1.jpg",
    price: 349,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>AI-Generated Posters Shop</h1>
      <p>Discover unique posters inspired by Norse mythology.</p>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className={styles.card}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price} NOK</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
