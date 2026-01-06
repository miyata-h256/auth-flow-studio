import { useNavigate } from 'react-router-dom';
import './styles/Home.css';

export default function Home(): React.ReactElement {
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
                <section className='section'>
                    <h2 className='section-title'>認証フロー</h2>
                    <div className='card-grid'>
                        <button
                            className='card'
                            onClick={() => navigate('/oidc-flow')}
                        >
                            <h3>OIDC Code Flow</h3>
                            <p>OAuth2 / OIDC の典型的な認証フローをステップごとに可視化</p>
                        </button>

                        <button
                            className='card'
                            onClick={() => navigate('/passkey-flow')}
                        >
                            <h3>Passkey (WebAuthn)</h3>
                            <p>パスワードレスな認証がどう動いているかをざっくり追体験</p>
                        </button>

                        <button
                            className='card'
                            onClick={() => navigate('/magic-flow')}
                        >
                            <h3>Magic Link</h3>
                            <p>メールのワンタイムリンクでログインする仕組みを理解する</p>
                        </button>
                    </div>
                </section>

                <section className='section'>
                    <h2 className='section-title'>比較</h2>
                    <div className='card-grid'>
                        <button
                            className='card'
                            onClick={() => navigate('/compare')}
                        >
                            <h3>Compare Flows</h3>
                            <p>各認証フローを並べて比較する</p>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
