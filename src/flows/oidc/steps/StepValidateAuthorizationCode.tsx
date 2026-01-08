import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { StepProps } from '../../../types';

export default function StepValidateAuthorizationCode({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.validateCode}>
                <p>
                    {t.oidcStepUI.validateCodeDesc}
                </p>
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
                    <li>
                        {t.oidcStepUI.serverValidatesCode}
                    </li>
                    <li>{t.oidcStepUI.serverValidatesCodeDetails}</li>
                    <li>{t.oidcStepUI.serverIssuesTokens}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
