import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 17: ログイン完了
 * セッション/JWT発行 → ログイン状態
 */
export default function Step17LoginComplete({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.loginComplete}>
                <p>{t.magicStepUI.loginCompleteDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.loginStateSample}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                isAuthenticated: true,
                                method: 'magic-link',
                                user: {
                                    email: email || 'user@example.com',
                                    id: 'usr_' + btoa(email || 'user@example.com').slice(0, 8),
                                },
                                session: {
                                    token: 'eyJhbGciOiJIUzI1NiIs...',
                                    expiresAt: '2025-12-26T12:00:00.000Z',
                                },
                            },
                            null,
                            2
                        )}
                    </pre>
                    <div style={{ marginTop: 12 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ {t.magicStepUI.loginComplete}
                        </span>
                    </div>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button
                        className='secondary-button'
                        onClick={onPrev}
                    >
                        {t.stepUI.back}
                    </button>{' '}
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        {t.magicStepUI.goHome}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.magicLinkComplete}</li>
                    <li>{t.magicStepUI.noPasswordEmail}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
