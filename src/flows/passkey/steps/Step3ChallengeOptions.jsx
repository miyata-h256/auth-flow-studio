import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step3ChallengeOptions({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 3: チャレンジ・オプションの受信'>
        <p>
          バックエンドがフロントエンドに{' '}
          <strong>PublicKeyCredentialRequestOptions</strong> を返します。
        </p>

        <div className={styles['mock-box']}>
          <h4>受信するオプション</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                timeout: 60000,
                rpId: 'example.com',
                userVerification: 'preferred',
                allowCredentials: [
                  {
                    type: 'public-key',
                    id: 'credentialId123...',
                    transports: ['internal', 'platform'],
                  },
                ],
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
            バックエンドが生成した <strong>challenge</strong>{' '}
            がフロントエンドに送られます。
          </li>
          <li>
            <strong>challenge</strong> は一時的で、署名検証時に使われます。
          </li>
          <li>
            オプションに <strong>allowCredentials</strong> が含まれる場合、
            ユーザーの登録済みデバイスを限定できます。
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
