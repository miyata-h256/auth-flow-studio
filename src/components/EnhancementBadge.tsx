// src/components/EnhancementBadge.tsx
// セキュリティ強化機能のバッジコンポーネント

import type { SecurityEnhancement } from '../types/variants';
import styles from './styles/EnhancementBadge.module.css';

interface EnhancementBadgeProps {
    enhancement: SecurityEnhancement;
    /** コンパクト表示 */
    compact?: boolean;
    /** クリック時のコールバック */
    onClick?: () => void;
}

/**
 * セキュリティ強化機能を表示するバッジ
 */
export default function EnhancementBadge({
    enhancement,
    compact = false,
    onClick,
}: EnhancementBadgeProps) {
    // 複雑さに応じた色
    const getComplexityColor = (level: number) => {
        if (level <= 2) return 'green';
        if (level <= 3) return 'yellow';
        return 'orange';
    };

    if (compact) {
        return (
            <span
                className={styles.badgeCompact}
                title={enhancement.description}
                onClick={onClick}
            >
                🛡️ {enhancement.name}
            </span>
        );
    }

    return (
        <div className={styles.badge} onClick={onClick}>
            <div className={styles.header}>
                <span className={styles.icon}>🛡️</span>
                <span className={styles.name}>{enhancement.name}</span>
                <span
                    className={styles.complexity}
                    data-level={getComplexityColor(enhancement.complexity)}
                >
                    複雑さ: {'★'.repeat(enhancement.complexity)}
                </span>
            </div>
            <p className={styles.shortDesc}>{enhancement.shortDescription}</p>
        </div>
    );
}
