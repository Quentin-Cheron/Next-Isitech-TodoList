// Styles

import styles from "../styles/CardHeader.module.css";

export default function CardHeaderPage({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
