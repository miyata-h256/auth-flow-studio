import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';

/**
 * Step 8: Email Service → API
 * accepted レスポンス
 */
export default function Step8EmailAccepted({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='メール送信受付'>
                <p>Email Serviceがメール送信を受け付けました。</p>

                <div className={styles['mock-box']}>
                    <p>Email Serviceレスポンス</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'accepted',
                                messageId: 'msg_a1b2c3d4e5',
                                timestamp: '2025-12-25T12:00:30.000Z',
                            },
                            null,
                            2
                        )}
                    </pre>
                    <div style={{ marginTop: 8 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ Accepted
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
                        次へ →
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>「accepted」はメールがキューに入ったことを意味します。</li>
                    <li>実際の配信はEmail Serviceが非同期で行います。</li>
                    <li>配信失敗時はバウンス通知などで別途処理します。</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
