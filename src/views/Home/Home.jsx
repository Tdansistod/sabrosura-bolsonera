import styles from "./home.module.css";
import whatsapp from "./images/whatsapp.png";
import decor from "./images/decoracion.png";
import decorCorner from "./images/adorno esquina.png";
import flower from "./images/flores.png";
import QR from "./images/QR.png";
import bolson from "./images/El Bolsón.jpg";
import SwiperCustom from "./Swiper";

export default function Home() {
  return (
    <main className={styles.main}>
      <a
        href="https://wa.me/+5492944486539?text=Hola,%20necesito%20un%20presupuesto"
        className={styles.whatsappAnchor}
      >
        <img
          src={whatsapp}
          className={styles.whatsapp}
          alt="Sabrosura Bolsonera, WhatsApp"
        />
      </a>
      <div className={`${styles.mainContainer} ${styles.container}`}>
        <h1 className={styles.mainTitle}>
          Servicio de Lunch
          <br />y Catering
        </h1>
      </div>
      <div className={`${styles.firstContainer} ${styles.container}`}>
        <img
          src={decorCorner}
          className={styles.decorCorner}
          alt="Sabrosura Bolsonera, decoración"
        />
        <p className={styles.paraph}>
          Contamos con un <strong>Variado</strong> y <strong>Exquisito</strong>{" "}
          Menú con un Novedoso "Servicio de Lunch y Catering" para paladares
          exigentes, desde hace más de 20 Años Acompañando Todo Tipo de Eventos.
        </p>
        <img
          src={decorCorner}
          className={styles.decorCorner2}
          alt="Sabrosura Bolsonera, decoración"
        />
        <h3 className={styles.mention}>
          Desayunos | Almuerzos | Meriendas | Cenas
        </h3>
        <img
          src={decor}
          className={styles.decor}
          alt="Sabrosura Bolsonera, decoración"
        />
        <h3 className={styles.mention2}>
          <i>También Atención a Empresas</i>
        </h3>
        <img
          src={decor}
          className={styles.decor2}
          alt="Sabrosura Bolsonera, decoración"
        />
        <h3 className={styles.foodTitle}>Dulces y Postres</h3>
        <SwiperCustom food="Dulces y Postres" />
        <h3 className={styles.foodTitle}>Carnes y Perniles</h3>
        <SwiperCustom food="Carnes y Perniles" />
        <h3 className={styles.foodTitle}>Agridulces y Snacks</h3>
        <SwiperCustom food="Agridulces y Snacks" />
        <h3 className={styles.mention}>
          Calidad | Trayectoria | Responsabilidad
        </h3>
        <div className={styles.bolsonDiv}>
          <h4 src={bolson} className={styles.bolsonText}>
            Ubicados en El Bolsón
          </h4>
          <img src={bolson} className={styles.bolsonImg} />
        </div>
      </div>
      <footer className={styles.footer}>
        <img
          src={QR}
          alt="Sabrosura Bolsonera, Contacto"
          className={styles.qr}
        />
        <div className={styles.column}>
          <h2 className={styles.footerTitle}>Presupuestos Personalizados:</h2>
          <h2 className={styles.footerText}>
            Andrea Bre:{" "}
            <a href="https://wa.me/+5492944486539?text=Hola,%20necesito%20un%20presupuesto">
              +54 9 294 448-6539
            </a>
          </h2>
        </div>
        <img
          src={flower}
          alt="Sabrosura Bolsonera, flores"
          className={styles.flowerFooter}
        />
      </footer>
    </main>
  );
}
