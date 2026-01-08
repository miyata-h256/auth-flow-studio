import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step7Assertion({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 7: ${t.passkeyStepUI.assertion}`}>
                <p>{t.passkeyStepUIDetail.authenticatorReturnsAssertion}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.returnedAssertion}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                id: 'credentialId123...',
                                rawId: 'Y3JlZGVudGlhbElkMTIz...',
                                response: {
                                    clientDataJSON: 'eyJ0eXBlIjoiIndlYmF1dGhuLmdldCI...',
                                    authenticatorData: 'SZYN5OtPonmzjgQyP...',
                                    signature: 'MEQCIFQZj4dQ7H...',
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

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li>{t.passkeyStepUIDetail.signatureWithPrivateKey}</li>
                    <li>{t.passkeyStepUIDetail.authenticatorDataDesc}</li>
                    <li>{t.passkeyStepUIDetail.clientDataJsonDesc}</li>
                    <li>{t.passkeyStepUIDetail.assertionUsedForVerification}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
