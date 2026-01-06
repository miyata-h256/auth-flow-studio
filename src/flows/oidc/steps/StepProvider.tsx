import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { StepProps } from '../../../types';
import styles from '../styles/StepProvider.module.css';

export default function StepProvider({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='Authorization Server (Provider)'>
                <p>
                    ここは Google や Azure AD
                    などの認可サーバー側の画面をイメージしています。
                </p>

                <div className={styles['mock-provider-login-form']}>
                    <p style={{ marginBottom: 8 }}>ログインフォーム（擬似）</p>
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
                        ログイン & 同意する
                    </button>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button
                        className='secondary-button'
                        onClick={onPrev}
                    >
                        ← 前のステップへ
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>
                        ユーザーは Provider で認証されます（ID/Password や MFA など）。
                    </li>
                    <li>クライアントが要求した scope に対して、ユーザーが同意します。</li>
                    <li>
                        同意後、Authorization Code を付与して <code>redirect_uri</code>{' '}
                        にリダイレクトします。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
