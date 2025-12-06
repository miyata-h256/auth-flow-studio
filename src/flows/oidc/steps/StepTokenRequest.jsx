import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { issueTokens } from '../../../utils/oidcMock.js';
import { decodeJwt } from '../../../utils/jwtDecode.js';

const tokens = issueTokens();
const decodedIdToken = decodeJwt(tokens.idToken);

export default function StepTokenRequest({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Token Endpoint'>
        <p>
          バックエンドが Authorization Code を使って Token Endpoint
          に問い合わせます。
        </p>

        <div className='mock-box'>
          <p>POST /token</p>
          <code className='code-block'>
            grant_type=authorization_code
            <br />
            code=AUTH_CODE_123
            <br />
            redirect_uri=https://app.example.com/callback
            <br />
            client_id=demo-client
          </code>
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
            Authorization Code検証へ →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <p>
          クライアントは ID Token の署名・aud・iss・nonce などを検証します。
        </p>
        <p>ペイロードのイメージ:</p>
        <pre className='code-block'>
          {JSON.stringify(decodedIdToken, null, 2)}
        </pre>
      </ExplanationPanel>
    </Layout>
  );
}
