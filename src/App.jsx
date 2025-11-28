import { useState } from 'react';
import OidcFlow from './flows/oidc/OidcFlow.jsx';
import PasskeyFlow from './flows/passkey/PasskeyFlow.jsx';
import MagicFlow from './flows/magic/MagicFlow.jsx';

export default function App() {
  const [flow, setFlow] = useState(null);

  if (flow === 'oidc') {
    return <OidcFlow onBack={() => setFlow(null)} />;
  }

  if (flow === 'passkey') {
    return <PasskeyFlow onBack={() => setFlow(null)} />;
  }

  if (flow === 'magic') {
    return <MagicFlow onBack={() => setFlow(null)} />;
  }

  return (
    <div className='app-root'>
      <header className='app-header'>
        <h1>Auth Flow Studio</h1>
        <p className='app-subtitle'>
          各種ログイン方式の「裏側」で何が起きているかを体感するためのミニアプリ
        </p>
      </header>

      <main className='app-main'>
        <div className='card-grid'>
          <button
            className='card'
            onClick={() => setFlow('oidc')}
          >
            <h2>OIDC Code Flow</h2>
            <p>OAuth2 / OIDC の典型的な認証フローをステップごとに可視化</p>
          </button>

          <button
            className='card'
            onClick={() => setFlow('passkey')}
          >
            <h2>Passkey (WebAuthn)</h2>
            <p>パスワードレスな認証がどう動いているかをざっくり追体験</p>
          </button>

          <button
            className='card'
            onClick={() => setFlow('magic')}
          >
            <h2>Magic Link</h2>
            <p>メールのワンタイムリンクでログインする仕組みを理解する</p>
          </button>
        </div>
      </main>
    </div>
  );
}
