import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';

/**
 * Step 1: User → Frontend
 * メール入力 & 送信ボタンをクリック
 */
export default function Step1EmailInput({ email, setEmail, onNext }: MagicStepProps) {
    return (
        <Layout>
            <ActionPanel title='① メールアドレス入力'>
                <p>
                    ユーザーはログイン用のメールアドレスを入力し、送信ボタンを押します。
                </p>

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
                        Magic Link を送信
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>ユーザーがメールアドレスを入力して「送信」をクリックします。</li>
                    <li>このステップはフロントエンドで行われます。</li>
                    <li>
                        次のステップで、フロントエンドからAPIへリクエストが送信されます。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
