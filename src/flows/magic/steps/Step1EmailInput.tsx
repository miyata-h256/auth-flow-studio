import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';

/**
 * Step 1: User → Frontend
 * メール入力 & 送信ボタンをクリック
 */
export default function Step1EmailInput({ email, setEmail, onNext }: MagicStepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`① ${t.magicStepUI.emailInput}`}>
                <p>{t.magicStepUI.emailInputDesc}</p>

                <div className='mock-box'>
                    <input
                        className='mock-input'
                        value={email}
                        onChange={(e) => setEmail?.(e.target.value)}
                        placeholder='you@example.com'
                    />
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        {t.stepUI.sendMagicLink}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.userEntersEmail}</li>
                    <li>{t.magicStepUI.frontendAction}</li>
                    <li>{t.magicStepUI.nextStepApiCall}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
