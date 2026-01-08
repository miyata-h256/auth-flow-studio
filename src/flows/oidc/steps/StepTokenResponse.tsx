import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { issueTokens } from '../../../utils/oidcMock';
import { decodeJwt } from '../../../utils/jwtDecode';
import { StepProps } from '../../../types';
import styles from '../styles/StepTokenResponse.module.css';

const tokens = issueTokens();
const decodedIdToken = decodeJwt(tokens.idToken);

export default function StepTokenResponse({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.tokenResponse}>
                <p>
                    {t.oidcStepUI.tokenResponseDesc}
                </p>

                <div style={{ marginTop: 16 }}>
                    <h4>{t.oidcStepUI.tokenDetails}</h4>
                    <div className={styles['mock-box']}>
                        <code className={styles['code-block']}>
                            {JSON.stringify(
                                {
                                    access_token: tokens.accessToken,
                                    id_token: `${tokens.idToken.slice(0, 40)}...`,
                                    refresh_token: tokens.refreshToken,
                                },
                                null,
                                2
                            )}
                        </code>
                    </div>
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
                    {t.oidcStepUI.clientValidatesIdToken}
                </p>
                <p>{t.oidcStepUI.clientExtractsUser}</p>
                <pre className={styles['code-block']}>
                    {JSON.stringify(decodedIdToken, null, 2)}
                </pre>
            </ExplanationPanel>
        </Layout>
    );
}
