import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 3: API → DB
 * email でユーザー検索/作成
 */
export default function Step3UserLookup({ email, onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='ユーザー検索/作成'>
        <p>Auth APIはUser DBでメールアドレスからユーザーを検索します。</p>

        <div className={styles['mock-box']}>
          <p>DBクエリ（イメージ）</p>
          <pre className={styles['code-block']}>
            {`SELECT * FROM users 
WHERE email = '${email}'

-- 存在しなければ新規作成
INSERT INTO users (email, created_at)
VALUES ('${email}', NOW())
RETURNING id`}
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
            Magic
            Linkでは、ユーザーが存在しなければ新規登録を兼ねることが多いです。
          </li>
          <li>
            メールアドレスの正当性はリンクをクリックすることで検証されます。
          </li>
          <li>この段階ではまだ認証は完了していません。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
