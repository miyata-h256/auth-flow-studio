import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { issueTokens } from '../../../utils/oidcMock.js';
import { decodeJwt } from '../../../utils/jwtDecode.js';
import styles from '../styles/StepTokenResponse.module.css';

const tokens = issueTokens();
const decodedIdToken = decodeJwt(tokens.idToken);

export default function StepTokenResponse({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Token Endpoint'>
        <p>
          Authentication ServerからアクセストークンとIDトークンが返されます。
        </p>

        <div style={{ marginTop: 16 }}>
          <h4>レスポンス（サンプル）</h4>
          <div className={styles['mock-box']}>
            <code className={styles['code-block']}>
              {JSON.stringify(
                {
                  access_token: tokens.accessToken,
                  id_token: `${tokens.idToken.slice(0, 40)}...`,
                  refresh_token: tokens.refreshToken,
                },
                null,
                2
              )}
            </code>
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
            ログイン完了へ →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <p>
          クライアントは ID Token の署名・aud・iss・nonce などを検証します。
        </p>
        <p>ペイロードのイメージ:</p>
        <pre className={styles['code-block']}>
          {JSON.stringify(decodedIdToken, null, 2)}
        </pre>
      </ExplanationPanel>
    </Layout>
  );
}
