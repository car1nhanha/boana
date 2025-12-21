import { NavbarComponent } from "../../organisms/navbar";
import styles from "./landing.module.scss";

interface LandingTemplateProps {
  children: React.ReactNode;
}

export const LandingTemplate = ({ children }: LandingTemplateProps) => {
  return (
    <div className={styles.container}>
      <NavbarComponent />
      <div className={styles.content}>{children}</div>
      <footer>Footer</footer>
    </div>
  );
};
