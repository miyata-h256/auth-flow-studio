import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 7: API → Email Service
 * Send email with Magic Link
 */
export default function Step7SendEmail({ email, setLink, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    const mockToken = btoa(JSON.stringify({ email, ts: 1735128000000 })).slice(
        0,
        24
    );
    const mockTokenId = 'tid_x7k9m2p4';
    const magicLink = `https://app.example.com/magic/callback?token=${mockToken}&rid=${mockTokenId}`;

    const handleNext = () => {
        setLink?.(magicLink);
        onNext();
    };

    return (
        <Layout>
            <ActionPanel title={`③ ${t.magicStepUI.sendEmail}`}>
                <p>{t.magicStepUI.sendEmailDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.emailSendRequest}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                to: email,
                                subject: t.magicStepUI.loginLink,
                                body: `${t.magicStepUI.clickLinkToLogin}:\n${magicLink}`,
                            },
                            null,
                            2
                        )}
                    </pre>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button
                        className='secondary-button'
                        onClick={onPrev}
                    >
                        {t.stepUI.back}
                    </button>{' '}
                    <button
                        className='primary-button'
                        onClick={handleNext}
                    >
                        {t.stepUI.next}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.apiRequestsEmail}</li>
                    <li>{t.magicStepUI.linkContains}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
