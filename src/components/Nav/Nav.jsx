import img from "../../views/Home/images/Logo 2.png";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={img} alt="logo" className={styles.logo} />
      </nav>
    </header>
  );
}
