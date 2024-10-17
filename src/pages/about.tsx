import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>About Nordic Posters</h1>
        <p className={styles.valueStatement}>
          At Nordic Posters, we believe in celebrating the rich heritage of
          Norse mythology through unique and artistic representations. Our
          posters are not just decorations; they are stories that echo the
          bravery, wisdom, and beauty of ancient tales.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Odin</h2>
            <p>
              Odin, the Allfather, is known for his wisdom and knowledge. He
              sacrificed one of his eyes for insight into the future and is
              often depicted with ravens that symbolize his connection to the
              unknown. Our posters of Odin capture his powerful presence and the
              mystique surrounding his character.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Thor</h2>
            <p>
              Thor, the god of thunder, is celebrated for his strength and
              protector of mankind. With his mighty hammer, Mjölnir, he defends
              the gods and humanity from giants. Our Thor posters embody the
              fierce spirit of this beloved deity, inspiring courage and
              resilience.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Freya</h2>
            <p>
              Freya, the goddess of love and war, embodies beauty and power. She
              is known for her enchanting charm and strength in battle. Our
              Freya posters reflect her dual nature, merging grace with
              fierceness, perfect for anyone who admires this iconic goddess.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
