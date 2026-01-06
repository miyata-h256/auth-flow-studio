import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';

/**
 * Step 2: Frontend → API
 * POST /auth/magic-link/request { email, clientInfo }
 */
export default function Step2MagicLinkRequest({ email, onNext, onPrev }: MagicStepProps) {
    return (
        <Layout>
            <ActionPanel title='Magic Link リクエスト'>
                <p>フロントエンドからAuth APIへMagic Linkリクエストを送信します。</p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['post']}`}>
                            POST
                        </span>
                        <span className={styles['endpoint-url']}>
                            /auth/magic-link/request
                        </span>
                    </div>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                email: email,
                                clientInfo: {
                                    userAgent: 'Mozilla/5.0...',
                                    ip: '192.168.1.1',
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

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>
                        フロントエンドはAuth APIの <code>/auth/magic-link/request</code>{' '}
                        エンドポイントを呼び出します。
                    </li>
                    <li>
                        <code>clientInfo</code>{' '}
                        にはセキュリティ目的でユーザーエージェントやIPなどを含めることがあります。
                    </li>
                    <li>APIはこれを受け取ってユーザー検索・トークン発行を行います。</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
