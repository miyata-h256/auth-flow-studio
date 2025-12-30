import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step9VerifyChallenge({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 9: チャレンジ検証'>
        <p>
          バックエンドが <strong>clientDataJSON</strong> 内のチャレンジが
          自分が送ったものと一致するか確認します。
        </p>

        <div className={styles['mock-box']}>
          <h4>検証内容</h4>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                check: 'Challenge Verification',
                sent_challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                received_challenge: 'dGVzdCBjaGFsbGVuZ2U=',
                result: 'PASS ✓',
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
            次へ →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='このステップで起こること'>
        <ul>
          <li>
            <strong>Replay 攻撃を防止</strong>します。
          </li>
          <li>チャレンジが一致しない場合、認証は失敗します。</li>
          <li>チャレンジは通常 1 回限りで、複数回使用はできません。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
