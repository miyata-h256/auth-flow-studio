import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 13: Frontend → API
 * POST /auth/magic-link/verify { rid, token }
 */
export default function Step13VerifyRequest({ link, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    // リンクからパラメータを抽出
    let token = 'abc123...';
    let rid = 'tid_xyz';

    try {
        if (link) {
            const urlObj = new URL(link);
            token = urlObj.searchParams.get('token') || token;
            rid = urlObj.searchParams.get('rid') || rid;
        }
    } catch {
        // URLパースエラー時はデフォルト値を使用
    }

    return (
        <Layout>
            <ActionPanel title={`⑤ ${t.magicStepUI.verifyRequest}`}>
                <p>{t.magicStepUI.verifyRequestDesc}</p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['post']}`}>
                            POST
                        </span>
                        <span className={styles['endpoint-url']}>
                            /auth/magic-link/verify
                        </span>
                    </div>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(
                            {
                                rid: rid,
                                token: token.slice(0, 16) + '...',
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
                    <li>{t.magicStepUI.frontendExtractsToken}</li>
                    <li>{t.magicStepUI.sendsVerification}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
