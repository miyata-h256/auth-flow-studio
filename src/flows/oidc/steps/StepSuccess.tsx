import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { StepProps } from '../../../types';
import styles from '../styles/StepSuccess.module.css';

export default function StepSuccess({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.loginComplete}>
                <p>
                    {t.oidcStepUI.loginCompleteDesc}
                </p>

                <div className={styles['mock-box']}>
                    <p>{t.oidcStepUI.mockLoginStatus}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                isAuthenticated: true,
                                user: {
                                    id: 'user-123',
                                    name: 'Demo User',
                                    email: 'user@example.com',
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
                        {t.oidcStepUI.goHome}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>
                        {t.oidcStepUI.clientCreatesSession}
                    </li>
                    <li>
                        {t.oidcStepUI.accessTokenUsedForApi}
                    </li>
                    <li>{t.oidcStepUI.oidcFlowComplete}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
