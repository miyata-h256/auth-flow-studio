import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import { buildRedirectUrl } from '../../../utils/oidcMock';
import { StepProps } from '../../../types';

const redirectUrl = buildRedirectUrl();

export default function StepRedirect({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    return (
        <Layout>
            <ActionPanel title={t.oidcStepUI.redirectWithCode}>
                <p>{t.oidcStepUI.redirectWithCodeDesc}</p>

                <div className='mock-box'>
                    <p style={{ marginBottom: 4 }}>{t.oidcStepUI.mockBrowserUrl}</p>
                    <code className='code-block'>{redirectUrl}</code>
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
                    <li>
                        {t.oidcStepUI.queryContainsCodeState}
                    </li>
                    <li>
                        {t.oidcStepUI.clientValidatesState}
                    </li>
                    <li>{t.oidcStepUI.csrfMismatchAbort}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
