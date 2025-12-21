import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step8AuthComplete({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 8: 認証完了リクエスト'>
        <p>
          フロントエンドが Assertion をバックエンドに送信し、
          <code>POST /webauthn/authenticate/complete</code> を実行します。
        </p>

        <div className={styles['mock-box']}>
          <h4>リクエスト内容</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                method: 'POST',
                endpoint: '/webauthn/authenticate/complete',
                body: {
                  id: 'credentialId123...',
                  rawId: 'Y3JlZGVudGlhbElkMTIz...',
                  response: {
                    clientDataJSON: '...',
                    authenticatorData: '...',
                    signature: '...',
                  },
                },
              },
              null,
              2
            )}
          </pre>
        </div>
      </ActionPanel>

      <ExplanationPanel title='このステップで起こること'>
        <ul>
          <li>
            フロントエンドが Assertion をバックエンドに送ります。
          </li>
          <li>
            バックエンドはこれから署名を検証し、ユーザーを認証します。
          </li>
          <li>
            クライアント側の処理はここでほぼ完了です。
          </li>
        </ul>
      </ExplanationPanel>

      <div style={{ marginTop: 12 }}>
        <button
          className='primary-button'
          onClick={onNext}
        >
          次へ →
        </button>
      </div>
    </Layout>
  );
}
