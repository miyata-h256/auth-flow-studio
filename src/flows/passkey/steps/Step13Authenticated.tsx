import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step13Authenticated({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 13: ${t.passkeyStepUI.authenticated}`}>
                <p>{t.passkeyStepUIDetail.frontendSavesToStorage}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.frontendState}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                isAuthenticated: true,
                                sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...',
                                storedAt: 'localStorage',
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

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li>{t.passkeyStepUI.frontendSavesSession}</li>
                    <li>{t.passkeyStepUIDetail.subsequentRequests}</li>
                    <li>{t.passkeyStepUIDetail.pageReloadRestoresAuth}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
