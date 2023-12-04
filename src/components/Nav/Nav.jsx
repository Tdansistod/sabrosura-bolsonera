import img from "../../views/Home/images/Logo 2.png";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <img src={img} alt="logo" className={styles.logo} />
    </header>
  );
}
