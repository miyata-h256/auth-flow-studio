import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step3ChallengeOptions({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 3: ${t.passkeyStepUI.challengeOptions}`}>
                <p>{t.passkeyStepUIDetail.backendReturnsOptions}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.receivedOptions}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                                timeout: 60000,
                                rpId: 'example.com',
                                userVerification: 'preferred',
                                allowCredentials: [
                                    {
                                        type: 'public-key',
                                        id: 'credentialId123...',
                                        transports: ['internal', 'platform'],
                                    },
                                ],
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
                    <li>{t.passkeyStepUIDetail.challengeSentToFrontend}</li>
                    <li>{t.passkeyStepUIDetail.challengeUsedForSignature}</li>
                    <li>{t.passkeyStepUIDetail.allowCredentialsLimit}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
