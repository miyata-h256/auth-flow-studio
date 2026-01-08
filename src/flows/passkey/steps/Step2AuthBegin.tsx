import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step2AuthBegin({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 2: ${t.passkeyStepUI.authBegin}`}>
                <p>
                    {t.passkeyStepUI.authBeginDesc}
                </p>

                <div className={styles['mock-box']}>
                    <h4>{t.stepUI.requestContent}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                method: 'POST',
                                endpoint: '/webauthn/authenticate/begin',
                                headers: { 'Content-Type': 'application/json' },
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
                    <li>{t.passkeyStepUI.backendStartsSession}</li>
                    <li>{t.passkeyStepUI.challengeGenerated}</li>
                    <li>{t.passkeyStepUI.noUserIdYet}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
