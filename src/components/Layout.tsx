import type { ReactNode } from 'react';
import styles from './styles/Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

/**
 * レイアウトコンポーネント
 */
export default function Layout({ children }: LayoutProps) {
    return <div className={styles.layout}>{children}</div>;
}
