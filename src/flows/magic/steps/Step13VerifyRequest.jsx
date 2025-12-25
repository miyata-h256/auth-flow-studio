import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 13: Frontend → API
 * POST /auth/magic-link/verify { rid, token }
 */
export default function Step13VerifyRequest({ link, onNext, onPrev }) {
  // リンクからパラメータを抽出
  let token = 'abc123...';
  let rid = 'tid_xyz';

  try {
    if (link) {
      const urlObj = new URL(link);
      token = urlObj.searchParams.get('token') || token;
      rid = urlObj.searchParams.get('rid') || rid;
    }
  } catch {
    // URLパースエラー時はデフォルト値を使用
  }

  return (
    <Layout>
      <ActionPanel title='⑤ トークン検証リクエスト'>
        <p>フロントエンドからAuth APIにトークン検証リクエストを送信します。</p>

        <div className={styles['mock-box']}>
          <div className={styles['endpoint-display']}>
            <span className={`${styles['method-badge']} ${styles['post']}`}>
              POST
            </span>
            <span className={styles['endpoint-url']}>
              /auth/magic-link/verify
            </span>
          </div>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                rid: rid,
                token: token.slice(0, 16) + '...',
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
            フロントエンドはURLパラメータから取得した <code>rid</code> と{' '}
            <code>token</code> をAPIに送信します。
          </li>
          <li>APIはこれを使ってToken Storeから該当レコードを検索します。</li>
          <li>トークンの検証が成功すれば、ログインが確定します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
