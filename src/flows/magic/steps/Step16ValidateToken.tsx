import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 16: API internal
 * hash(token)一致確認 / 期限確認 / used=false確認
 */
export default function Step16ValidateToken({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.validateToken}>
                <p>{t.magicStepUI.validateTokenDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.verificationChecklist}</p>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            color: '#e5e7eb',
                            fontSize: 14,
                        }}
                    >
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            {t.magicStepUI.hashMatch}
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            {t.magicStepUI.expiresAtValid}
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            {t.magicStepUI.usedFalse}
                        </li>
                    </ul>
                    <div style={{ marginTop: 12 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ {t.magicStepUI.verificationSuccess}
                        </span>
                    </div>
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
                    <li>{t.magicStepUI.apiValidatesToken}</li>
                    <li>{t.magicStepUI.tokenInvalidated}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
