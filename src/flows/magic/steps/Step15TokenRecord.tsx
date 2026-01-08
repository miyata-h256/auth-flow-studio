import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 15: Token Store → API
 * token record を返す
 */
export default function Step15TokenRecord({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    const mockUserId = 'usr_' + btoa(email || 'user@example.com').slice(0, 8);

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.tokenRecord}>
                <p>{t.magicStepUI.tokenRecordDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.tokenStoreResponse}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                tokenHash: 'a1b2c3d4e5f6...',
                                userId: mockUserId,
                                expiresAt: '2025-12-25T12:10:00.000Z',
                                used: false,
                                nonce: 'nonce_abc123',
                            },
                            null,
                            2
                        )}
                    </pre>
                    <div style={{ marginTop: 8 }}>
                        <span className={`${styles['status-badge']} ${styles['pending']}`}>
                            {t.magicStepUI.unusedValid}
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
                        {t.stepUI.next}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.tokenStoreReturns}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
