import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepValidateAuthorizationCode({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Validate Authorization Code + Client Credentials'>
        <p>
          クライアント（またはバックエンド）は受け取った認可コードとクライアント資格情報を検証します。
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
          <li>
            サーバー側でクライアント認証（client_secret 等）を確認します。
          </li>
          <li>正当であればアクセストークンを発行します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
