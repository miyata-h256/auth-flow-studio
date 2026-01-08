import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

// 固定のサンプル日時を使用（レンダリングごとに変わらないように）
const SAMPLE_LOGIN_TIME = '2025-12-26T12:00:00.000Z';

export default function Step14LoginComplete({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 14: ${t.passkeyStepUI.loginComplete}`}>
                <p>{t.passkeyStepUIDetail.passkeyFlowComplete}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.loginCompleteState}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'authenticated',
                                method: 'passkey',
                                user: {
                                    id: 'user-123',
                                    email: 'user@example.com',
                                    displayName: 'Passkey User',
                                },
                                loginTime: SAMPLE_LOGIN_TIME,
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
                        {t.passkeyStepUI.goHome}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li><strong>{t.passkeyStepUIDetail.noPasswordSent}</strong></li>
                    <li>{t.passkeyStepUIDetail.privateKeyInDevice}</li>
                    <li>{t.passkeyStepUIDetail.publicKeyCrypto}</li>
                    <li>{t.passkeyStepUIDetail.multipleSecurityChecks}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
