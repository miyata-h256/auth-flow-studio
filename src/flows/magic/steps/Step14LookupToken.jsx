import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 14: API → Token Store
 * lookup rid -> storedHash/expiry/used
 */
export default function Step14LookupToken({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='トークン検索'>
        <p>Auth APIがToken Storeからトークンレコードを検索します。</p>

        <div className={styles['mock-box']}>
          <p>Token Store検索</p>
          <pre className={styles['code-block']}>
            {`SELECT 
  token_hash,
  user_id,
  expires_at,
  used,
  nonce
FROM magic_tokens
WHERE id = 'rid_parameter'`}
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
            <code>rid</code> をキーにしてToken Storeからレコードを取得します。
          </li>
          <li>取得するのはハッシュ値、有効期限、使用済みフラグなど。</li>
          <li>
            レコードが見つからなければ、不正なリクエストとして拒否します。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
