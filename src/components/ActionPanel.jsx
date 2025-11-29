import styles from './styles/Panel.module.css';
export default function ActionPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles.panelAction}`}>
      {title && <h2 className={styles.panelTitle}>{title}</h2>}
      {children}
    </section>
  );
}
