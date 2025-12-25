import styles from './styles/Panel.module.css';

/**
 * 説明表示用パネルコンポーネント
 * @param {Object} props
 * @param {string} [props.title] - パネルのタイトル
 * @param {React.ReactNode} props.children - パネルの内容
 */
export default function ExplanationPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles['panel-explanation']}`}>
      {title && <h3 className={styles['panel-title']}>{title}</h3>}
      <div className={styles['panel-body']}>{children}</div>
    </section>
  );
}
