import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepAuthorizationCode({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='Authorization Code'>
        <p>
          認可サーバーは認証成功後、認可コード (authorization code)
          をクライアントへリダイレクトします。
        </p>
        <button
          className='primary-button'
          onClick={onNext}
        >
          次へ
        </button>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>認可コードは短期間のみ有効な一時的なコードです。</li>
          <li>
            クライアントはこのコードを用いてアクセストークンを要求します。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
