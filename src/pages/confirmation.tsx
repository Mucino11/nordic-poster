// src/pages/confirmation.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Confirmation.module.css";
import Link from "next/link";

const Confirmation = () => {
  return (
    <>
      <Header />
      <div className={styles.confirmationContainer}>
        <h1 className={styles.confirmationTitle}>Thank You for Your Order!</h1>
        <p className={styles.confirmationMessage}>
          Your fictitious order has been placed successfully.
        </p>
        <p className={styles.confirmationInstructions}>
          You will receive an email confirmation shortly.
        </p>

        <Link href="/" className={styles.shopMoreButton}>
          Continue Shopping
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
