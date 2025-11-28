import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepInbox({ link, onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='擬似メールボックス'>
        <p>受信トレイに Magic Link が届いたイメージです。</p>

        <div className='mock-box'>
          <p style={{ marginBottom: 4 }}>件名: あなたのログインリンク</p>
          <code className='code-block'>
            {link || 'https://app.example.com/magic-login?token=...'}
          </code>
          <button
            className='primary-button'
            onClick={onNext}
          >
            Magic Link をクリック
          </button>
        </div>

        <div style={{ marginTop: 12 }}>
          <button
            className='secondary-button'
            onClick={onPrev}
          >
            ← 戻る
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            ユーザーがリンクをクリックすると、ブラウザはアプリに遷移します。
          </li>
          <li>URL のトークン部分を使ってサーバ側で認証処理が行われます。</li>
          <li>トークンが有効であれば、そのユーザーとしてログインさせます。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
