import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step12SessionToken({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='ステップ 12: セッショントークン返却'>
                <p>
                    すべての検証に成功しました。バックエンドがセッショントークン（JWT
                    など） をフロントエンドに返します。
                </p>

                <div className={styles['mock-box']}>
                    <h4>返却されるトークン</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'success',
                                sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...',
                                user: {
                                    id: 'user-123',
                                    email: 'user@example.com',
                                },
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
                    <li>認証が成功し、ユーザーが確定されました。</li>
                    <li>セッショントークンがフロントエンドに返されます。</li>
                    <li>
                        以降のリクエストでこのトークンを使い、認証状態を保つことができます。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
