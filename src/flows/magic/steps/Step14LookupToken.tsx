import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 14: API → Token Store
 * lookup rid -> storedHash/expiry/used
 */
export default function Step14LookupToken({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.lookupToken}>
                <p>{t.magicStepUI.lookupTokenDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.tokenStoreSearch}</p>
                    <pre className={styles['code-block']}>
                        {`SELECT 
  token_hash,
  user_id,
  expires_at,
  used,
  nonce
FROM magic_tokens
WHERE id = 'rid_parameter'`}
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
                    <li>{t.magicStepUI.apiSearchesToken}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
