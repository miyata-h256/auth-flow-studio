import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step10VerifySignature({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 10: ${t.passkeyStepUI.verifySignature}`}>
                <p>{t.passkeyStepUIDetail.backendVerifiesWithPublicKey}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.verificationContent}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                check: 'Signature Verification',
                                public_key: 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQ...',
                                signature: 'MEQCIFQZj4dQ7H...',
                                verified: true,
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
                    <li>{t.passkeyStepUIDetail.backendVerifiesWithPublicKey}</li>
                    <li>{t.passkeyStepUIDetail.publicKeyPrivateKeyRelated}</li>
                    <li>{t.passkeyStepUIDetail.verifiedMeansOwnership}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
