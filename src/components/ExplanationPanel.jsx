import styles from './styles/Panel.module.css';
export default function ExplanationPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles['panel-explanation']}`}>
      {title && <h3 className={styles['panel-title']}>{title}</h3>}
      <div className={styles['panel-body']}>{children}</div>
    </section>
  );
}
