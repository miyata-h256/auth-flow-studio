import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step4CredentialsGet({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 4: ${t.passkeyStepUI.credentialsGet}`}>
                <p>{t.passkeyStepUIDetail.frontendCallsWebAuthn}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.apiCall}</h4>
                    <pre className={styles['code-block']}>
                        {`navigator.credentials.get({
  publicKey: {
    challenge: challengeFromServer,
    rpId: "example.com",
    timeout: 60000,
    userVerification: "preferred"
  }
})`}
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
                    <li>{t.passkeyStepUIDetail.requestToAuthenticator}</li>
                    <li>{t.passkeyStepUIDetail.authenticatorRequestsBiometric}</li>
                    <li>{t.passkeyStepUIDetail.apiIsAsync}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
