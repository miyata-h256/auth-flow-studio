import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step11CheckSignCount({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 11: signCount チェック'>
        <p>
          バックエンドがオーセンティケーターの <strong>signCount</strong> を
          確認し、複製品でないことを検証します。
        </p>

        <div className={styles['mock-box']}>
          <h4>検証内容</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                check: 'signCount Verification',
                previous_count: 42,
                current_count: 43,
                cloned_check: 'NOT cloned ✓',
                result: 'PASS ✓',
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
          <li>
            各オーセンティケーターは <strong>signCount</strong>
            （署名回数）を記録します。
          </li>
          <li>
            サーバが保存した signCount より大きければ、正規のデバイスです。
          </li>
          <li>
            signCount が前回以下なら、デバイスが複製された可能性があります。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
