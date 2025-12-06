import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepClient({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='Client Application'>
        <p>ユーザーはクライアントアプリから「OIDCでログイン」を開始します。</p>
        <button
          className='primary-button'
          onClick={onNext}
        >
          Login with OIDC
        </button>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>クライアントは Authorization Request を組み立てます。</li>
          <li>
            <code>state</code> は CSRF 対策用のランダム値。
          </li>
          <li>
            <code>nonce</code> は ID Token を後で検証するための一時値。
          </li>
          <li>
            これらはフロントの画面からは見えませんが、重要な安全装置です。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
