import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

/**
 * Step 10: Frontend → User
 * "メールを確認してね" を表示
 */
export default function Step10CheckEmail({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='メール確認案内'>
        <p>フロントエンドがユーザーにメール確認を促します。</p>

        <div className='mock-box'>
          <div
            style={{
              background: '#1e293b',
              border: '1px solid #475569',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>📧</div>
            <h3 style={{ color: '#e5e7eb', marginBottom: 8 }}>
              メールを確認してください
            </h3>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              入力したメールアドレスにログインリンクを送信しました。
              <br />
              メール内のリンクをクリックしてログインしてください。
            </p>
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
          <li>ユーザーは自分のメールボックスを確認する必要があります。</li>
          <li>リンクには有効期限があることを伝えると良いでしょう。</li>
          <li>再送機能を用意することも一般的です。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
