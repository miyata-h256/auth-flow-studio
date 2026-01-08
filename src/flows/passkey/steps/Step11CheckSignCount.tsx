import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';
import styles from '../styles/PasskeyFlow.module.css';

export default function Step11CheckSignCount({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 11: ${t.passkeyStepUI.checkSignCount}`}>
                <p>{t.passkeyStepUIDetail.backendChecksSignCount}</p>

                <div className={styles['mock-box']}>
                    <h4>{t.passkeyStepUIDetail.verificationContent}</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                check: 'signCount Verification',
                                previous_count: 42,
                                current_count: 43,
                                cloned_check: 'NOT cloned ✓',
                                result: 'PASS ✓',
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
                    <li>{t.passkeyStepUIDetail.eachAuthRecordsSignCount}</li>
                    <li>{t.passkeyStepUIDetail.greaterThanStoredOk}</li>
                    <li>{t.passkeyStepUIDetail.lessOrEqualMayBeCloned}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
