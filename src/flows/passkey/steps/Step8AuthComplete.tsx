import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step8AuthComplete({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 8: ${t.passkeyStepUI.authComplete}`}>
                <p>{t.passkeyStepUIDetail.frontendSendsAssertion}</p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['post']}`}>
                            POST
                        </span>
                        <span className={styles['endpoint-url']}>
                            /webauthn/authenticate/complete
                        </span>
                    </div>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                body: {
                                    id: 'credentialId123...',
                                    rawId: 'Y3JlZGVudGlhbElkMTIz...',
                                    response: {
                                        clientDataJSON: '...',
                                        authenticatorData: '...',
                                        signature: '...',
                                    },
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
                    <li>{t.passkeyStepUI.frontendPostsAssertion}</li>
                    <li>{t.passkeyStepUIDetail.backendVerifiesAndAuth}</li>
                    <li>{t.passkeyStepUIDetail.clientProcessingComplete}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
