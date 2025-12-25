import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 9: API → Frontend
 * 200 OK "メールを確認してください"
 */
export default function Step9ApiResponse({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='APIレスポンス'>
        <p>Auth APIからフロントエンドに成功レスポンスが返されます。</p>

        <div className={styles['mock-box']}>
          <p>APIレスポンス</p>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                status: 200,
                message: 'メールを確認してください',
                // セキュリティのため、メールが存在するかどうかは明かさない
                hint: '※ユーザー存在有無に関わらず同じレスポンス',
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

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            セキュリティ上、メールアドレスの存在有無を漏らさないよう、常に同じレスポンスを返します。
          </li>
          <li>
            「メールが登録されていません」などと返すと、攻撃者にユーザー情報を漏らしてしまいます。
          </li>
          <li>これは「ユーザー列挙攻撃」対策として重要です。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
