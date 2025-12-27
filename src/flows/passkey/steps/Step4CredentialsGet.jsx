import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step4CredentialsGet({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 4: credentials.get() 呼び出し'>
        <p>
          フロントエンドが WebAuthn API の <code>credentials.get()</code>{' '}
          を呼び出します。
        </p>

        <div className={styles['mock-box']}>
          <h4>API 呼び出し</h4>
          <pre className={styles['code-block']}>
            {`navigator.credentials.get({
  publicKey: {
    challenge: challengeFromServer,
    rpId: "example.com",
    timeout: 60000,
    userVerification: "preferred"
  }
})`}
          </pre>
        </div>

        <div style={{ marginTop: 12 }}>
          <button
            className='primary-button'
            onClick={onNext}
          >
            次へ →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='このステップで起こること'>
        <ul>
          <li>
            フロントエンドからオーセンティケーターにリクエストが送られます。
          </li>
          <li>
            次のステップで、ユーザーの生体認証（Touch ID / Face
            ID）が要求されます。
          </li>
          <li>この API は非同期で、ユーザーの操作を待ちます。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
