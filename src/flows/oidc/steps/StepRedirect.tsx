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
                    <p style={{ marginBottom: 4 }}>ブラウザの URL（擬似）</p>
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
                        クエリには <code>code</code> と <code>state</code>{' '}
                        が含まれています。
                    </li>
                    <li>
                        {t.oidcStepUI.clientValidatesState}
                    </li>
                    <li>一致しなければ CSRF 攻撃の疑いがあり、処理を中断します。</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
