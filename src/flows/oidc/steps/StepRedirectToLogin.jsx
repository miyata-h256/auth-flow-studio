import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepRedirectToLogin({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Redirect to Login Page'>
        <p>
          ユーザーのブラウザはログインページへリダイレクトされ、認証が要求されます。
        </p>
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
            次へ
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>リダイレクト先は認可サーバーのログイン画面です。</li>
          <li>
            ログイン後、認可サーバーはクライアントのリダイレクト URI
            に戻します。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
