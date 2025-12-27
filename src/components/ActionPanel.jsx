import styles from './styles/Panel.module.css';

/**
 * アクション表示用パネルコンポーネント
 * @param {Object} props
 * @param {string} [props.title] - パネルのタイトル
 * @param {React.ReactNode} props.children - パネルの内容
 */
export default function ActionPanel({ title, children }) {
  return (
    <section className={`${styles.panel} ${styles['panel-action']}`}>
      {title && <h2 className={styles['panel-title']}>{title}</h2>}
      {children}
    </section>
  );
}
