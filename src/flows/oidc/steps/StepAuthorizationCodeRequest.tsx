import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { buildAuthRequest } from '../../../utils/oidcMock';
import { StepProps } from '../../../types';
import styles from '../styles/StepAuthorizationCodeRequest.module.css';

const authReq = buildAuthRequest();

export default function StepAuthorizationCodeRequest({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.authCodeRequest}>
                <p>
                    {t.oidcStepUI.authCodeRequestDesc}
                </p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['get']}`}>
                            GET
                        </span>
                        <span className={styles['endpoint-url']}>
                            /authorize
                        </span>
                    </div>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                response_type: 'code',
                                client_id: authReq.client_id,
                                redirect_uri: authReq.redirect_uri,
                                scope: authReq.scope,
                                state: authReq.state,
                                nonce: authReq.nonce,
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

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.oidcStepUI.browserRedirect}</li>
                    <li>
                        {t.oidcStepUI.requestContains}
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
