import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';

/**
 * Step 4: DB → API
 * userId / user status を返す
 */
export default function Step4UserResponse({ email, onNext, onPrev }: MagicStepProps) {
    const mockUserId = 'usr_' + btoa(email || '').slice(0, 8);

    return (
        <Layout>
            <ActionPanel title='ユーザー情報レスポンス'>
                <p>DBからユーザーIDとステータスが返されます。</p>

                <div className={styles['mock-box']}>
                    <p>DBレスポンス</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                userId: mockUserId,
                                email: email,
                                status: 'active',
                                createdAt: '2025-01-01T00:00:00Z',
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
                    <li>ユーザーのIDとステータスがAPIに返されます。</li>
                    <li>このuserIdはワンタイムトークンと紐付けられます。</li>
                    <li>ユーザーがブロックされている場合はここでエラーを返すことも。</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
