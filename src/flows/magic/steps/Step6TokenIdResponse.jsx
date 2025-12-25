import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 6: Token Store → API
 * tokenId を返す
 */
export default function Step6TokenIdResponse({ onNext, onPrev }) {
  const mockTokenId = 'tid_x7k9m2p4';

  return (
    <Layout>
      <ActionPanel title='トークンID発行'>
        <p>Token StoreからトークンIDが返されます。</p>

        <div className={styles['mock-box']}>
          <p>Token Storeレスポンス</p>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                tokenId: mockTokenId,
                created: true,
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
            <code>tokenId</code> はMagic Linkの一部として使われます。
          </li>
          <li>実際のトークン値（RAW_TOKEN）はメールリンクに埋め込まれます。</li>
          <li>検証時には tokenId で DB を引き、hash を比較します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
