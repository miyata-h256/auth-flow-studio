import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { buildAuthRequest } from '../../../utils/oidcMock.js';
import styles from '../styles/StepClient.module.css';

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

        <div
          style={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h4>送信されるパラメータ（一部）</h4>
          <pre className={styles['code-block']}>
            {`
              {
                response_type=code,
                client_id=${authReq.client_id},
                redirect_uri=${authReq.redirect_uri},
                scope=${authReq.scope},
                state=${authReq.state},
                nonce=${authReq.nonce}
              }`}
          </pre>
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
