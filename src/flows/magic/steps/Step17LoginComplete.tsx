import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';

/**
 * Step 17: ログイン完了
 * セッション/JWT発行 → ログイン状態
 */
export default function Step17LoginComplete({ email, onNext, onPrev }: MagicStepProps) {
    return (
        <Layout>
            <ActionPanel title='ログイン完了'>
                <p>
                    トークン検証が成功し、セッション/JWTが発行されてログインが完了しました。
                </p>

                <div className={styles['mock-box']}>
                    <p>ログイン状態（サンプル）</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                isAuthenticated: true,
                                method: 'magic-link',
                                user: {
                                    email: email || 'user@example.com',
                                    id: 'usr_' + btoa(email || 'user@example.com').slice(0, 8),
                                },
                                session: {
                                    token: 'eyJhbGciOiJIUzI1NiIs...',
                                    expiresAt: '2025-12-26T12:00:00.000Z',
                                },
                            },
                            null,
                            2
                        )}
                    </pre>
                    <div style={{ marginTop: 12 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ ログイン完了
                        </span>
                    </div>
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

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>
                        検証成功後、APIはToken Storeの <code>used=true</code>{' '}
                        に更新して再利用を防止。
                    </li>
                    <li>
                        セッションCookieまたはJWTが発行され、ユーザーはログイン状態になります。
                    </li>
                    <li>以降のリクエストはこのセッション/JWTで認証されます。</li>
                    <li>
                        Magic
                        Linkは「メールを受信できること」が認証要素となるパスワードレス認証です。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
