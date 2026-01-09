import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { StepProps } from '../../../types';

export default function StepClient({ onNext }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.clientApp}>
                <p>{t.oidcStepUI.clientAppDesc}</p>
                <button
                    className='primary-button'
                    onClick={onNext}
                >
                    {t.stepUI.loginWithOidc}
                </button>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.oidcStepUI.clientBuildsAuthRequest}</li>
                    <li>
                        <code>state</code> {t.oidcStepUI.stateForCsrf}
                    </li>
                    <li>
                        <code>nonce</code> {t.oidcStepUI.nonceForIdToken}
                    </li>
                    <li>
                        {t.oidcStepUI.invisibleSafety}
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
