import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';

/**
 * Step 10: Frontend → User
 * "メールを確認してね" を表示
 */
export default function Step10CheckEmail({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.checkEmail}>
                <p>{t.magicStepUI.checkEmailDesc}</p>

                <div className='mock-box'>
                    <div
                        style={{
                            background: '#1e293b',
                            border: '1px solid #475569',
                            borderRadius: 8,
                            padding: 24,
                            textAlign: 'center',
                        }}
                    >
                        <div style={{ fontSize: 48, marginBottom: 12 }}>📧</div>
                        <h3 style={{ color: '#e5e7eb', marginBottom: 8 }}>
                            {t.magicStepUI.checkYourEmail}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: 14 }}>
                            {t.magicStepUI.sentLoginLink}
                            <br />
                            {t.magicStepUI.clickLinkInEmail}
                        </p>
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
                <ul>
                    <li>{t.magicStepUI.userChecksMailbox}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
