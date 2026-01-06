import type { ReactNode } from 'react';
import styles from './styles/Panel.module.css';

interface ActionPanelProps {
    title?: string;
    children: ReactNode;
}

/**
 * アクション表示用パネルコンポーネント
 */
export default function ActionPanel({ title, children }: ActionPanelProps) {
    return (
        <section className={`${styles.panel} ${styles['panel-action']}`}>
            {title && <h2 className={styles['panel-title']}>{title}</h2>}
            {children}
        </section>
    );
}
