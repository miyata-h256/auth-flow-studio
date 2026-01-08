import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';

export default function Step1LoginClick({ onNext }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 1: ${t.passkeyStepUI.loginClick}`}>
                <p>{t.passkeyStepUI.loginClickDesc}</p>

                <div className='mock-box'>
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        {t.stepUI.loginWithPasskey}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li>{t.passkeyStepUI.frontendReceivesAction}</li>
                    <li>{t.passkeyStepUI.preparesBackendRequest}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
