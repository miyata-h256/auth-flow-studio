import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step13Authenticated({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='ステップ 13: 認証状態確立'>
                <p>
                    フロントエンドがセッショントークンを保存し、
                    ユーザーが認証状態にあることを確認します。
                </p>

                <div className={styles['mock-box']}>
                    <h4>フロントエンドの状態</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                isAuthenticated: true,
                                sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...',
                                storedAt: 'localStorage',
                            },
                            null,
                            2
                        )}
                    </pre>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button
                        className='secondary-button'
                        onClick={onPrev}
                    >
                        ← 戻る
                    </button>{' '}
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        次へ →
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='このステップで起こること'>
                <ul>
                    <li>
                        フロントエンドがセッショントークンをローカルストレージなどに保存します。
                    </li>
                    <li>
                        今後のすべてのリクエストにこのトークンを含めることで、
                        認証状態を保つことができます。
                    </li>
                    <li>
                        ページをリロードしても、トークンを使って認証状態が復元されます。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
