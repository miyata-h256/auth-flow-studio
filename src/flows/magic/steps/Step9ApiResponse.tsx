import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 9: API → Frontend
 * 200 OK "Please check your email"
 */
export default function Step9ApiResponse({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.apiResponse}>
                <p>{t.magicStepUI.apiResponseDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.apiResponse}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                status: 200,
                                message: t.magicStepUI.checkYourEmail,
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
                    <li>{t.magicStepUI.apiReturnsSuccess}</li>
                    <li>{t.magicStepUI.showCheckEmailMessage}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
