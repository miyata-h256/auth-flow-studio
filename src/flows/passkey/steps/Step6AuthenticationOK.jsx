import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step6AuthenticationOK({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 6: 認証成功'>
        <p>ユーザーが生体認証に成功しました。</p>

        <div className={styles['mock-box']}>
          <h4>認証ステータス</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                status: 'success',
                message: 'Biometric authentication completed',
              },
              null,
              2
            )}
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
          <li>デバイスは認証を確認しました。</li>
          <li>秘密鍵を使ってチャレンジに署名する準備ができました。</li>
          <li>
            <strong>秘密鍵はデバイスから出ません</strong>—
            デバイス内で署名が生成されます。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
