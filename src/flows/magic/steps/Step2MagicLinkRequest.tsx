import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 2: Frontend → API
 * POST /auth/magic-link/request { email, clientInfo }
 */
export default function Step2MagicLinkRequest({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.magicLinkRequest}>
                <p>{t.magicStepUI.magicLinkRequestDesc}</p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['post']}`}>
                            POST
                        </span>
                        <span className={styles['endpoint-url']}>
                            /auth/magic-link/request
                        </span>
                    </div>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                email: email,
                                clientInfo: {
                                    userAgent: 'Mozilla/5.0...',
                                    ip: '192.168.1.1',
                                },
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
                    <li>{t.magicStepUI.frontendCallsApi}</li>
                    <li>{t.magicStepUI.clientInfoSecurity}</li>
                    <li>{t.magicStepUI.apiProcesses}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
