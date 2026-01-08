import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { issueTokens } from '../../../utils/oidcMock';
import { decodeJwt } from '../../../utils/jwtDecode';
import { StepProps } from '../../../types';
import styles from '../styles/StepTokenRequest.module.css';

const tokens = issueTokens();
const decodedIdToken = decodeJwt(tokens.idToken);

export default function StepTokenRequest({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.tokenRequest}>
                <p>
                    {t.oidcStepUI.tokenRequestDesc}
                </p>

                <div className={styles['mock-box']}>
                    <p>POST /token</p>
                    <code className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                grant_type: 'authorization_code',
                                code: 'AUTH_CODE_123',
                                redirect_uri: 'https://app.example.com/callback',
                                client_id: 'demo-client',
                            },
                            null,
                            2
                        )}
                    </code>
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
                <p>
                    {t.oidcStepUI.backChannelRequest}
                </p>
                <p>{t.oidcStepUI.clientAuth}</p>
                <pre className='code-block'>
                    {JSON.stringify(decodedIdToken, null, 2)}
                </pre>
            </ExplanationPanel>
        </Layout>
    );
}
