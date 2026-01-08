import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step12SessionToken({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 12: ${t.passkeyStepUI.sessionToken}`}>
                <p>{t.passkeyStepUIDetail.allVerificationsPassed}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.returnedToken}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 'success',
                                sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...',
                                user: {
                                    id: 'user-123',
                                    email: 'user@example.com',
                                },
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
                        onClick={onNext}
                    >
                        {t.stepUI.next}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li>{t.passkeyStepUI.sessionGenerated}</li>
                    <li>{t.passkeyStepUIDetail.sessionTokenReturned}</li>
                    <li>{t.passkeyStepUIDetail.tokenUsedForAuthState}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
