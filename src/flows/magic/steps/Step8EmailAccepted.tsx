import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 8: Email Service → API
 * accepted レスポンス
 */
export default function Step8EmailAccepted({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.emailAccepted}>
                <p>{t.magicStepUI.emailAcceptedDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.emailServiceResponse}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'accepted',
                                messageId: 'msg_a1b2c3d4e5',
                                timestamp: '2025-12-25T12:00:30.000Z',
                            },
                            null,
                            2
                        )}
                    </pre>
                    <div style={{ marginTop: 8 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ Accepted
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
                    <li>{t.magicStepUI.emailServiceAccepts}</li>
                    <li>{t.magicStepUI.asyncDelivery}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
