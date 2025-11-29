import styles from './styles/Panel.module.css';
export default function ActionPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles['panel-action']}`}>
      {title && <h2 className={styles['panel-title']}>{title}</h2>}
      {children}
    </section>
  );
}
