import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 5: API → Token Store
 * create magic_token (hash 保存)
 */
export default function Step5CreateToken({ email, onNext, onPrev }) {
  const mockUserId = 'usr_' + btoa(email).slice(0, 8);
  const mockNonce = 'nonce_a1b2c3d4';

  return (
    <Layout>
      <ActionPanel title='② ワンタイムトークン発行'>
        <p>Auth APIがToken Storeにワンタイムトークンを作成します。</p>

        <div className={styles['mock-box']}>
          <p>トークン作成リクエスト</p>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                userId: mockUserId,
                tokenHash: 'sha256(RAW_TOKEN)',
                expiresAt: '2025-12-25T12:15:00.000Z',
                nonce: mockNonce.slice(0, 8),
                used: false,
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
            トークンは生成後、<strong>ハッシュ化して</strong>
            保存します（平文は保存しない）。
          </li>
          <li>有効期限は通常15分〜1時間程度の短時間。</li>
          <li>
            <code>used=false</code>{' '}
            は使用済みかどうかのフラグで、ワンタイム性を保証します。
          </li>
          <li>Token Store は DB や Redis などで実装されます。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
