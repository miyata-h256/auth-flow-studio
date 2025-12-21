import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step7Assertion({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 7: Assertion（主張）の返却'>
        <p>
          オーセンティケーターがチャレンジに署名した{' '}
          <strong>Assertion</strong> をフロントエンドに返します。
        </p>

        <div className={styles['mock-box']}>
          <h4>返却される Assertion</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                id: 'credentialId123...',
                rawId: 'Y3JlZGVudGlhbElkMTIz...',
                response: {
                  clientDataJSON: 'eyJ0eXBlIjoiIndlYmF1dGhuLmdldCI...',
                  authenticatorData: 'SZYN5OtPonmzjgQyP...',
                  signature: 'MEQCIFQZj4dQ7H...',
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
            <strong>signature</strong>: チャレンジに対する秘密鍵での署名
          </li>
          <li>
            <strong>authenticatorData</strong>: デバイス側の認証情報
          </li>
          <li>
            <strong>clientDataJSON</strong>: クライアント側の情報（origin, challenge など）
          </li>
          <li>
            この Assertion がサーバでの署名検証に使われます。
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
