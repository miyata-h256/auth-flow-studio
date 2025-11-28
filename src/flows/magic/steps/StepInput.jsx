import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { buildMagicLink } from '../../../utils/magicMock.js';

export default function StepInput({ email, setEmail, setLink, onNext }) {
  const handleSend = () => {
    const magicLink = buildMagicLink(email);
    setLink(magicLink);
    onNext();
  };

  return (
    <Layout>
      <ActionPanel title='メールアドレスを入力'>
        <p>ログイン用の Magic Link を送るメールアドレスを入力します。</p>

        <div className='mock-box'>
          <input
            className='mock-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
          />
          <button
            className='primary-button'
            onClick={handleSend}
          >
            Magic Link を送信
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            サーバ側では、ワンタイムで短時間だけ有効なトークンを生成します。
          </li>
          <li>トークンは署名付き JWT やランダム文字列などで表現されます。</li>
          <li>そのトークンを含んだ URL をメールで送信します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
