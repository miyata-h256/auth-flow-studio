import { useNavigate } from 'react-router-dom';
import '../Home.css';

export default function Home() {
  const navigate = useNavigate();

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
            onClick={() => navigate('/oidc-flow')}
          >
            <h2>OIDC Code Flow</h2>
            <p>OAuth2 / OIDC の典型的な認証フローをステップごとに可視化</p>
          </button>

          <button
            className='card'
            onClick={() => navigate('/passkey-flow')}
          >
            <h2>Passkey (WebAuthn)</h2>
            <p>パスワードレスな認証がどう動いているかをざっくり追体験</p>
          </button>

          <button
            className='card'
            onClick={() => navigate('/magic-flow')}
          >
            <h2>Magic Link</h2>
            <p>メールのワンタイムリンクでログインする仕組みを理解する</p>
          </button>
        </div>
      </main>
    </div>
  );
}
