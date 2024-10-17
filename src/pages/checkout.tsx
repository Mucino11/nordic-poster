import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/checkout.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Checkout = () => {
  const { cart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  const tax = cartTotal * 0.25;
  const grandTotal = cartTotal + tax;

  return (
    <>
      <Header />
      <div className={styles.checkoutContainer}>
        <h1 className={styles.checkoutTitle}>Checkout</h1>

        {cart.length > 0 ? (
          <div className={styles.checkoutContent}>
            {/* Cart Items */}
            <div className={styles.cartItems}>
              <h2>Items in your cart</h2>
              <table className={styles.cartTable}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index}>
                      <td className={styles.productInfo}>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={50}
                          height={50}
                          className={styles.productImage}
                        />
                        <span>{product.title}</span>
                      </td>
                      <td>{product.price} NOK</td>
                      <td>1</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className={styles.summary}>
              <h2>Order Summary</h2>
              <p>Subtotal: {cartTotal} NOK</p>
              <p>Tax (25%): {tax.toFixed(2)} NOK</p>
              <h3>Total: {grandTotal.toFixed(2)} NOK</h3>
            </div>
          </div>
        ) : (
          <p className={styles.emptyMessage}>Your cart is empty.</p>
        )}

        {/* Customer Information Form */}
        <form className={styles.customerForm}>
          <h2>Customer Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customerInfo.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={customerInfo.address}
            onChange={handleInputChange}
            required
          />
        </form>
        <Link href="/confirmation" className={styles.checkoutButton}>
          Place Order
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
