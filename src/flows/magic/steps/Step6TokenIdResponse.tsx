import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 6: Token Store → API
 * tokenId を返す
 */
export default function Step6TokenIdResponse({ onNext, onPrev }: StepProps) {
    const t = useTranslation();
    const mockTokenId = 'tid_x7k9m2p4';

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.tokenIdResponse}>
                <p>{t.magicStepUI.tokenIdResponseDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.tokenStoreResponse}</p>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                tokenId: mockTokenId,
                                created: true,
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
                    <li>{t.magicStepUI.tokenStoredSuccess}</li>
                    <li>{t.magicStepUI.recordIdentifiable}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
