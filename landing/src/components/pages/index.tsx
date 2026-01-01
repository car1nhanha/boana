import ilustration from "../../assets/illustration.png";
import { LandingTemplate } from "../templates/landing";
import styles from "./styles.module.scss";

export const LandingPage = () => {
  return (
    <LandingTemplate>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>
            Virtual healthcare
            <br />
            for you
          </h1>

          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>

          <div>
            <button>Consult today</button>
          </div>
        </div>
        <div className={styles.headerRight}>
          <img src={ilustration} alt="header image" />
        </div>
      </header>
    </LandingTemplate>
  );
};
