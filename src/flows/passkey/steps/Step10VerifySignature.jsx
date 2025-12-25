import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step10VerifySignature({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 10: 署名検証'>
        <p>
          バックエンドが登録済みの <strong>公開鍵</strong> を使って
          署名を検証します。
        </p>

        <div className={styles['mock-box']}>
          <h4>検証内容</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                check: 'Signature Verification',
                public_key: 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQ...',
                signature: 'MEQCIFQZj4dQ7H...',
                verified: true,
                result: 'PASS ✓',
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
            登録時に保存した <strong>公開鍵</strong> で署名を検証します。
          </li>
          <li>
            公開鍵と秘密鍵は数学的に関連しており、
            公開鍵で検証されたということは秘密鍵で署名されたことの証拠です。
          </li>
          <li>
            <strong>秘密鍵の所有を証明</strong>しているのと同じです。
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
