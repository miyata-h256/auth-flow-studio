import styles from './styles/Panel.module.css';
export default function ExplanationPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles.panelExplanation}`}>
      {title && <h3 className={styles.panelTitle}>{title}</h3>}
      <div className={styles.panelBody}>{children}</div>
    </section>
  );
}
