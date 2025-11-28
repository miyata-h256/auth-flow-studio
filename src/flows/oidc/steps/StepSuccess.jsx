import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepSuccess({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='App Session'>
        <p>
          アプリケーション側では、ここで初めて「ログイン済みユーザー」として扱われます。
        </p>

        <div className='mock-box'>
          <p>ログイン状態（サンプル）</p>
          <pre className='code-block'>
            {JSON.stringify(
              {
                isAuthenticated: true,
                user: {
                  id: 'user-123',
                  name: 'Demo User',
                  email: 'user@example.com',
                },
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
            トップに戻る
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            アプリはセッションや Cookie を発行してユーザー状態を保持します。
          </li>
          <li>
            以降のリクエストでは Access Token が API 呼び出しなどに使われます。
          </li>
          <li>ここまでが OIDC Code Flow の大まかな流れです。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
