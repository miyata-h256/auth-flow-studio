import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 4: DB → API
 * userId / user status を返す
 */
export default function Step4UserResponse({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    const mockUserId = 'usr_' + btoa(email || '').slice(0, 8);

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.userResponse}>
                <p>{t.magicStepUI.userResponseDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.dbResponse}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                userId: mockUserId,
                                email: email,
                                status: 'active',
                                createdAt: '2025-01-01T00:00:00Z',
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

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.dbReturnsUser}</li>
                    <li>{t.magicStepUI.existingUser}</li>
                    <li>{t.magicStepUI.errorNotFound}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
