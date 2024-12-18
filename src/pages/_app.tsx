// src/pages/_app.tsx
import { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
