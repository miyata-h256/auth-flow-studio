import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step2AuthBegin({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 2: 認証開始リクエスト'>
        <p>
          フロントエンドがバックエンドに
          <code>POST /webauthn/authenticate/begin</code> リクエストを送ります。
        </p>

        <div className={styles['mock-box']}>
          <h4>リクエスト内容</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                method: 'POST',
                endpoint: '/webauthn/authenticate/begin',
                headers: { 'Content-Type': 'application/json' },
              },
              null,
              2
            )}
          </pre>
        </div>
      </ActionPanel>

      <ExplanationPanel title='このステップで起こること'>
        <ul>
          <li>バックエンドで認証セッションが開始されます。</li>
          <li>
            認証に必要な <strong>challenge</strong> が生成されます。
          </li>
          <li>このリクエストはまだユーザー識別情報を含みません。</li>
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
