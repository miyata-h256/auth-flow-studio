import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n';
import './styles/Home.css';

export default function Home(): React.ReactElement {
    const navigate = useNavigate();
    const t = useTranslation();

    return (
        <div className='app-root'>
            <header className='app-header'>
                <h1>{t.home.title}</h1>
                <p className='app-subtitle'>
                    {t.home.subtitle}
                </p>
            </header>

            <main className='app-main'>
                <section className='section'>
                    <h2 className='section-title'>{t.home.authFlows}</h2>
                    <div className='card-grid'>
                        <button
                            className='card'
                            onClick={() => navigate('/oidc-flow')}
                        >
                            <h3>{t.home.oidcTitle}</h3>
                            <p>{t.home.oidcDescription}</p>
                        </button>

                        <button
                            className='card'
                            onClick={() => navigate('/passkey-flow')}
                        >
                            <h3>{t.home.passkeyTitle}</h3>
                            <p>{t.home.passkeyDescription}</p>
                        </button>

                        <button
                            className='card'
                            onClick={() => navigate('/magic-flow')}
                        >
                            <h3>{t.home.magicLinkTitle}</h3>
                            <p>{t.home.magicLinkDescription}</p>
                        </button>
                    </div>
                </section>

                <section className='section'>
                    <h2 className='section-title'>{t.home.compare}</h2>
                    <div className='card-grid'>
                        <button
                            className='card'
                            onClick={() => navigate('/compare')}
                        >
                            <h3>{t.home.compareTitle}</h3>
                            <p>{t.home.compareDescription}</p>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
