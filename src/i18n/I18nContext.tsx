// src/i18n/I18nContext.tsx
// 多言語対応のContext

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from 'react';
import type { Language, TranslationKeys } from './types';
import { ja, en } from './locales';

/**
 * 言語ごとの翻訳マップ
 */
const translations: Record<Language, TranslationKeys> = {
    ja,
    en,
};

/**
 * ローカルストレージのキー
 */
const LANGUAGE_STORAGE_KEY = 'auth-flow-studio-language';

/**
 * デフォルト言語
 */
const DEFAULT_LANGUAGE: Language = 'ja';

/**
 * ブラウザの言語設定を取得
 */
function getBrowserLanguage(): Language {
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'ja' || browserLang === 'en') {
        return browserLang;
    }
    return DEFAULT_LANGUAGE;
}

/**
 * 保存された言語設定を取得
 */
function getStoredLanguage(): Language | null {
    try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored === 'ja' || stored === 'en') {
            return stored;
        }
    } catch {
        // localStorage が使えない環境
    }
    return null;
}

/**
 * 言語設定を保存
 */
function saveLanguage(language: Language): void {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
        // localStorage が使えない環境
    }
}

/**
 * 初期言語を決定
 */
function getInitialLanguage(): Language {
    return getStoredLanguage() ?? getBrowserLanguage();
}

/**
 * I18n Context の型
 */
interface I18nContextType {
    /** 現在の言語 */
    language: Language;
    /** 翻訳データ */
    t: TranslationKeys;
    /** 言語を変更 */
    setLanguage: (language: Language) => void;
    /** 全翻訳データへのアクセス（特殊なケース用） */
    translations: Record<Language, TranslationKeys>;
}

/**
 * I18n Context
 */
const I18nContext = createContext<I18nContextType | null>(null);

/**
 * I18n Provider Props
 */
interface I18nProviderProps {
    children: ReactNode;
}

/**
 * I18n Provider コンポーネント
 */
export function I18nProvider({ children }: I18nProviderProps): React.ReactElement {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    // 言語変更時にローカルストレージに保存
    const setLanguage = useCallback((newLanguage: Language) => {
        setLanguageState(newLanguage);
        saveLanguage(newLanguage);
        // HTML lang 属性も更新
        document.documentElement.lang = newLanguage;
    }, []);

    // 初期化時に HTML lang 属性を設定
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value: I18nContextType = {
        language,
        t: translations[language],
        setLanguage,
        translations,
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * I18n Context を使用するカスタムフック
 * @returns I18nContextType
 * @throws Error I18nProvider の外で使用された場合
 */
export function useI18n(): I18nContextType {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

/**
 * 翻訳データのみを取得するカスタムフック
 * @returns TranslationKeys
 */
export function useTranslation(): TranslationKeys {
    const { t } = useI18n();
    return t;
}
