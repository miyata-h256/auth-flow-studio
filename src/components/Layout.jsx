import styles from './styles/Layout.module.css';

/**
 * レイアウトコンポーネント
 * @param {Object} props
 * @param {React.ReactNode} props.children - レイアウト内のコンテンツ
 */
export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
