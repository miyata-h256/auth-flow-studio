// src/pages/SettingsPage.tsx
// 設定ページコンポーネント

import { useState, useEffect, useCallback } from 'react';
import { useI18n, AVAILABLE_LANGUAGES, type Language } from '../i18n';
import styles from './styles/SettingsPage.module.css';

/**
 * テーマ設定の型
 */
type Theme = 'dark' | 'light' | 'system';

/**
 * アニメーション設定のローカルストレージキー
 */
const ANIMATION_STORAGE_KEY = 'auth-flow-studio-animation';
const THEME_STORAGE_KEY = 'auth-flow-studio-theme';

/**
 * テーマをDOMに適用する関数
 */
function applyTheme(theme: Theme) {
    if (theme === 'system') {
        // システム設定を検出
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

/**
 * アニメーション設定をDOMに適用する関数
 */
function applyAnimation(enabled: boolean) {
    document.documentElement.setAttribute('data-animation', String(enabled));
}

/**
 * 設定ページコンポーネント
 */
export default function SettingsPage(): React.ReactElement {
    const { language, setLanguage, t } = useI18n();
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'dark' || stored === 'light' || stored === 'system') {
                return stored;
            }
        } catch {
            // localStorage が使えない環境
        }
        return 'dark';
    });
    const [animationEnabled, setAnimationEnabled] = useState<boolean>(() => {
        try {
            const stored = localStorage.getItem(ANIMATION_STORAGE_KEY);
            return stored !== 'false';
        } catch {
            return true;
        }
    });
    const [notification, setNotification] = useState<string | null>(null);

    // 言語変更ハンドラ
    const handleLanguageChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const newLanguage = e.target.value as Language;
            setLanguage(newLanguage);
            showNotification(t.settings.saveSuccess);
        },
        [setLanguage, t.settings.saveSuccess]
    );

    // テーマ変更ハンドラ
    const handleThemeChange = useCallback(
        (newTheme: Theme) => {
            setTheme(newTheme);
            try {
                localStorage.setItem(THEME_STORAGE_KEY, newTheme);
            } catch {
                // localStorage が使えない環境
            }
            // テーマをDOMに適用
            applyTheme(newTheme);
            showNotification(t.settings.saveSuccess);
        },
        [t.settings.saveSuccess]
    );

    // アニメーション設定変更ハンドラ
    const handleAnimationChange = useCallback(
        (enabled: boolean) => {
            setAnimationEnabled(enabled);
            try {
                localStorage.setItem(ANIMATION_STORAGE_KEY, String(enabled));
            } catch {
                // localStorage が使えない環境
            }
            // アニメーション設定をDOMに適用
            applyAnimation(enabled);
            showNotification(t.settings.saveSuccess);
        },
        [t.settings.saveSuccess]
    );

    // 通知表示
    const showNotification = (message: string) => {
        setNotification(message);
    };

    // 通知を自動で非表示
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // 初期テーマとアニメーションを適用
    useEffect(() => {
        applyTheme(theme);
        applyAnimation(animationEnabled);
    }, []);

    // システムテーマ変更を監視
    useEffect(() => {
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = () => applyTheme('system');
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }
    }, [theme]);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{t.settings.title}</h1>
                    <p className={styles.subtitle}>{t.settings.subtitle}</p>
                </header>

                <div className={styles.sections}>
                    {/* 言語設定セクション */}
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                {t.settings.languageSection}
                            </h2>
                            <p className={styles.sectionDescription}>
                                {t.settings.languageDescription}
                            </p>
                        </div>
                        <div className={styles.field}>
                            <label
                                htmlFor='language-select'
                                className={styles.label}
                            >
                                {t.common.language}
                            </label>
                            <select
                                id='language-select'
                                className={styles.select}
                                value={language}
                                onChange={handleLanguageChange}
                            >
                                {AVAILABLE_LANGUAGES.map((lang) => (
                                    <option
                                        key={lang.code}
                                        value={lang.code}
                                    >
                                        {lang.nativeName} ({lang.name})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>

                    {/* 外観設定セクション */}
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                {t.settings.appearanceSection}
                            </h2>
                            <p className={styles.sectionDescription}>
                                {t.settings.appearanceDescription}
                            </p>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>{t.common.theme}</label>
                            <div className={styles.toggleGroup}>
                                <button
                                    type='button'
                                    className={`${styles.toggleButton} ${theme === 'dark' ? styles.active : ''}`}
                                    onClick={() => handleThemeChange('dark')}
                                >
                                    {t.common.darkMode}
                                </button>
                                <button
                                    type='button'
                                    className={`${styles.toggleButton} ${theme === 'light' ? styles.active : ''}`}
                                    onClick={() => handleThemeChange('light')}
                                    disabled
                                >
                                    {t.common.lightMode}
                                </button>
                                <button
                                    type='button'
                                    className={`${styles.toggleButton} ${theme === 'system' ? styles.active : ''}`}
                                    onClick={() => handleThemeChange('system')}
                                    disabled
                                >
                                    {t.common.systemDefault}
                                </button>
                            </div>
                            <div className={styles.infoBox}>
                                <p className={styles.infoText}>
                                    {language === 'ja'
                                        ? '※ ライトモードとシステム設定は今後実装予定です'
                                        : '※ Light mode and system default will be implemented in the future'}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* アニメーション設定セクション */}
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                {t.settings.animationSection}
                            </h2>
                            <p className={styles.sectionDescription}>
                                {t.settings.animationDescription}
                            </p>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.toggleGroup}>
                                <button
                                    type='button'
                                    className={`${styles.toggleButton} ${animationEnabled ? styles.active : ''}`}
                                    onClick={() => handleAnimationChange(true)}
                                >
                                    {t.settings.animationEnabled}
                                </button>
                                <button
                                    type='button'
                                    className={`${styles.toggleButton} ${!animationEnabled ? styles.active : ''}`}
                                    onClick={() => handleAnimationChange(false)}
                                >
                                    {t.settings.animationDisabled}
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 通知 */}
            {notification && <div className={styles.notification}>{notification}</div>}
        </div>
    );
}
