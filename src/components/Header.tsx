import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      {/* Home aligned to the left */}
      <div className={styles.left}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </div>

      {/* Other links aligned to the right */}
      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/checkout" className={styles.link}>
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
