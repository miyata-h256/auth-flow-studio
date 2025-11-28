import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { buildAuthRequest } from '../../../utils/oidcMock.js';

const authReq = buildAuthRequest();

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

        <div style={{ marginTop: 16 }}>
          <h4>送信されるパラメータ（一部）</h4>
          <code className='code-block'>
            response_type=code
            <br />
            client_id={authReq.client_id}
            <br />
            redirect_uri={authReq.redirect_uri}
            <br />
            scope={authReq.scope}
            <br />
            state={authReq.state}
            <br />
            nonce={authReq.nonce}
          </code>
        </div>
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
