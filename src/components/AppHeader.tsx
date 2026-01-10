// src/components/AppHeader.tsx
// アプリケーションヘッダーコンポーネント

import { NavLink, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useI18n } from '../i18n';
import styles from './styles/AppHeader.module.css';

/**
 * アプリケーションヘッダーコンポーネント
 * 
 * グローバルナビゲーションと設定へのアクセスを提供
 */
export default function AppHeader(): React.ReactElement {
    const navigate = useNavigate();
    const { language, t } = useI18n();

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <NavLink
                    to='/home'
                    className={styles.logo}
                >
                    <span className={styles.logoIcon}>🔐</span>
                    <span>{t.common.appName}</span>
                </NavLink>

                <nav className={styles.nav}>
                    <NavLink
                        to='/home'
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                    >
                        <span className={styles.navIcon}>🏠</span>
                        <span className={styles.navText}>{t.common.home}</span>
                    </NavLink>
                    <NavLink
                        to='/compare'
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                    >
                        <span className={styles.navIcon}>⚖️</span>
                        <span className={styles.navText}>{t.home.compare}</span>
                    </NavLink>
                </nav>
            </div>

            <div className={styles.right}>
                <a
                    href='https://github.com/miyata-h256/auth-flow-studio'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.githubLink}
                    aria-label='GitHub Repository'
                >
                    <FaGithub className={styles.githubIcon} />
                </a>
                <span className={styles.languageIndicator}>
                    {language.toUpperCase()}
                </span>
                <button
                    type='button'
                    className={styles.settingsButton}
                    onClick={() => navigate('/settings')}
                    aria-label={t.common.settings}
                >
                    <span className={styles.settingsIcon}>⚙️</span>
                    <span>{t.common.settings}</span>
                </button>
            </div>
        </header>
    );
}
