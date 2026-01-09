import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { StepProps } from '../../../types';
import styles from '../styles/StepProvider.module.css';

export default function StepProvider({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.providerLogin}>
                <p>
                    {t.oidcStepUI.providerLoginDesc}
                </p>

                <div className={styles['mock-provider-login-form']}>
                    <p style={{ marginBottom: 8 }}>{t.oidcStepUI.mockLoginForm}</p>
                    <input
                        className={styles['mock-email-input']}
                        placeholder='email@example.com'
                    />
                    <input
                        className={styles['mock-password-input']}
                        type='password'
                        placeholder='password'
                    />
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        {t.oidc.steps[4].label}
                    </button>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button
                        className='secondary-button'
                        onClick={onPrev}
                    >
                        {t.stepUI.back}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>
                        {t.oidcStepUI.userEntersCreds}
                    </li>
                    <li>{t.oidcStepUI.serverValidates}</li>
                    <li>
                        {t.oidcStepUI.serverGeneratesCode}
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
