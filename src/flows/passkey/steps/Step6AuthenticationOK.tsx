import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step6AuthenticationOK({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 6: ${t.passkeyStepUI.authOk}`}>
                <p>{t.passkeyStepUIDetail.userBiometricSuccess}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.authStatus}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'success',
                                message: 'Biometric authentication completed',
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
                    <li>{t.passkeyStepUIDetail.deviceConfirmedAuth}</li>
                    <li>{t.passkeyStepUIDetail.readyToSign}</li>
                    <li>{t.passkeyStepUIDetail.privateKeyNeverLeaves}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
