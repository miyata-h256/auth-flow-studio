import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';
import { useTranslation } from '../../../i18n';

/**
 * Step 12: User → Frontend
 * GET /magic/callback?token=RAW_TOKEN&rid=tokenId
 */
export default function Step12ClickLink({ link, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();
    // リンクからパラメータを抽出
    const url =
        link || 'https://app.example.com/magic/callback?token=abc123&rid=tid_xyz';
    const urlObj = new URL(url);
    const token = urlObj.searchParams.get('token') || 'abc123...';
    const rid = urlObj.searchParams.get('rid') || 'tid_xyz';

    return (
        <Layout>
            <ActionPanel title={t.magicStepUI.clickLink}>
                <p>{t.magicStepUI.clickLinkDesc}</p>

                <div className={styles['mock-box']}>
                    <div className={styles['endpoint-display']}>
                        <span className={`${styles['method-badge']} ${styles['get']}`}>
                            GET
                        </span>
                        <span className={styles['endpoint-url']}>/magic/callback</span>
                    </div>
                    <ul className={styles['param-list']}>
                        <li>
                            <span className={styles['param-key']}>token:</span>
                            <span className={styles['param-value']}>
                                {token.slice(0, 20)}...
                            </span>
                        </li>
                        <li>
                            <span className={styles['param-key']}>rid:</span>
                            <span className={styles['param-value']}>{rid}</span>
                        </li>
                    </ul>
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
                    <li>{t.magicStepUI.userClicksLink}</li>
                    <li>{t.magicStepUI.browserOpensCallback}</li>
                    <li>{t.magicStepUI.frontendExtractsToken}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
