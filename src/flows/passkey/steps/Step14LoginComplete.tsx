import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/PasskeyFlow.module.css';

// 固定のサンプル日時を使用（レンダリングごとに変わらないように）
const SAMPLE_LOGIN_TIME = '2025-12-26T12:00:00.000Z';

export default function Step14LoginComplete({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='ステップ 14: ログイン完了'>
                <p>
                    パスキー認証フローが完了し、ユーザーが ログインした状態になります。
                </p>

                <div className={styles['mock-box']}>
                    <h4>ログイン完了状態</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'authenticated',
                                method: 'passkey',
                                user: {
                                    id: 'user-123',
                                    email: 'user@example.com',
                                    displayName: 'Passkey User',
                                },
                                loginTime: SAMPLE_LOGIN_TIME,
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
                        トップに戻る
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='このフロー全体の流れ'>
                <ul>
                    <li>
                        <strong>パスワードは一度も送信されていません。</strong>
                    </li>
                    <li>秘密鍵は端末から出ません —署名のみが送られます。</li>
                    <li>公開鍵暗号により、非常に安全な認証が実現されています。</li>
                    <li>
                        複数のセキュリティチェック (チャレンジ検証、署名検証、signCount
                        チェック) により、スプーフィング攻撃が防止されます。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
