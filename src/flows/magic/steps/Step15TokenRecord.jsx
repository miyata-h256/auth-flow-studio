import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 15: Token Store → API
 * token record を返す
 */
export default function Step15TokenRecord({ email, onNext, onPrev }) {
  const mockUserId = 'usr_' + btoa(email || 'user@example.com').slice(0, 8);

  return (
    <Layout>
      <ActionPanel title='トークンレコード取得'>
        <p>Token Storeからトークンレコードが返されます。</p>

        <div className={styles['mock-box']}>
          <p>Token Storeレスポンス</p>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                tokenHash: 'a1b2c3d4e5f6...',
                userId: mockUserId,
                expiresAt: '2025-12-25T12:10:00.000Z',
                used: false,
                nonce: 'nonce_abc123',
              },
              null,
              2
            )}
          </pre>
          <div style={{ marginTop: 8 }}>
            <span className={`${styles['status-badge']} ${styles['pending']}`}>
              未使用・有効期限内
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
          <li>
            レコードにはハッシュ化されたトークン、ユーザーID、有効期限などが含まれます。
          </li>
          <li>
            <code>used: false</code> はまだ使用されていないことを示します。
          </li>
          <li>次のステップでAPIがこのレコードを検証します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
