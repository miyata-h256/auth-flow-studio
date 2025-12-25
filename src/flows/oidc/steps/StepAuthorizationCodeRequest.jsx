import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { buildAuthRequest } from '../../../utils/oidcMock.js';
import styles from '../styles/StepAutorizationCodeRequest.module.css';
const authReq = buildAuthRequest();
export default function StepAuthorizationCodeRequest({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Authorization Code Request'>
        <p>
          クライアントが認可サーバーに対して Authorization Code を要求します。
        </p>
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
            次へ
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>ブラウザは認可エンドポイントへリダイレクトされます。</li>
          <li>
            リクエストには <code>response_type=code</code> 等が含まれます。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
