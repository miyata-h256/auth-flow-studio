import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { signChallenge } from '../../../utils/passkeyMock.js';

const signed = signChallenge();

export default function StepAuth({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Passkey 認証'>
        <p>既に登録済みのパスキーでログインするイメージです。</p>

        <div className='mock-box'>
          <p>「指紋をタッチ」「顔を認証」といった操作をイメージ</p>
          <button
            className='primary-button'
            onClick={onNext}
          >
            認証する
          </button>
        </div>

        <div style={{ marginTop: 16 }}>
          <h4>サインされた challenge のイメージ</h4>
          <pre className='code-block'>{JSON.stringify(signed, null, 2)}</pre>
        </div>

        <div style={{ marginTop: 12 }}>
          <button
            className='secondary-button'
            onClick={onPrev}
          >
            ← 戻る
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>サーバはランダムな challenge をクライアントに送ります。</li>
          <li>クライアントは秘密鍵で challenge に署名します。</li>
          <li>
            サーバは登録済みの公開鍵で署名を検証し、正しい端末か確認します。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
