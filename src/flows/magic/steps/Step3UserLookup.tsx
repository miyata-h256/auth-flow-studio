import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 3: API → DB
 * email でユーザー検索/作成
 */
export default function Step3UserLookup({ email, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.userLookup}>
                <p>{t.magicStepUI.userLookupDesc}</p>

                <div className={styles['mock-box']}>
                    <p>{t.magicStepUI.dbQuery}</p>
                    <pre className={styles['code-block']}>
                        {`SELECT * FROM users 
WHERE email = '${email}'

-- 存在しなければ新規作成
INSERT INTO users (email, created_at)
VALUES ('${email}', NOW())
RETURNING id`}
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
                    <li>{t.magicStepUI.apiSearchesUser}</li>
                    <li>{t.magicStepUI.newUserMayCreate}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
