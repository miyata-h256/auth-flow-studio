import type { ReactNode } from 'react';
import styles from './styles/Panel.module.css';

interface ExplanationPanelProps {
    title?: string;
    children: ReactNode;
}

/**
 * 説明表示用パネルコンポーネント
 */
export default function ExplanationPanel({ title, children }: ExplanationPanelProps) {
    return (
        <section className={`${styles.panel} ${styles['panel-explanation']}`}>
            {title && <h3 className={styles['panel-title']}>{title}</h3>}
            <div className={styles['panel-body']}>{children}</div>
        </section>
    );
}
