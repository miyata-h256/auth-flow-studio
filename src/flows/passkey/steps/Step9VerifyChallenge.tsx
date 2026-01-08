import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step9VerifyChallenge({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 9: ${t.passkeyStepUI.verifyChallenge}`}>
                <p>{t.passkeyStepUIDetail.backendVerifiesChallenge}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.verificationContent}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                check: 'Challenge Verification',
                                sent_challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                                received_challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                                result: 'PASS ✓',
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
                    <li>{t.passkeyStepUIDetail.preventsReplayAttack}</li>
                    <li>{t.passkeyStepUIDetail.challengeMismatchFails}</li>
                    <li>{t.passkeyStepUIDetail.challengeOneTimeOnly}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
