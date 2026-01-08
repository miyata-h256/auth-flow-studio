import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 5: API → Token Store
 * create magic_token (hash 保存)
 */
export default function Step5CreateToken({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    const mockUserId = 'usr_' + btoa(email || '').slice(0, 8);
    const mockNonce = 'nonce_a1b2c3d4';

    return (
        <Layout>
            <ActionPanel title={`② ${t.magicStepUI.createToken}`}>
                <p>{t.magicStepUI.createTokenDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.tokenCreateRequest}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                userId: mockUserId,
                                tokenHash: 'sha256(RAW_TOKEN)',
                                expiresAt: '2025-12-25T12:15:00.000Z',
                                nonce: mockNonce.slice(0, 8),
                                used: false,
                            },
                            null,
                            2
                        )}
                    </pre>
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
                    <li>{t.magicStepUI.apiGeneratesToken}</li>
                    <li>{t.magicStepUI.tokenStored}</li>
                    <li>{t.magicStepUI.expirationSet}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
