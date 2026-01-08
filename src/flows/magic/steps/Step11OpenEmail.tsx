import type { MagicStepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';

/**
 * Step 11: User → Email Service
 * メール閲覧
 */
export default function Step11OpenEmail({ link, onNext, onPrev }: MagicStepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`④ ${t.magicStepUI.openEmail}`}>
                <p>{t.magicStepUI.openEmailDesc}</p>

                <div className='mock-box'>
                    <div
                        style={{
                            background: '#0f172a',
                            border: '1px solid #334155',
                            borderRadius: 8,
                            padding: 16,
                        }}
                    >
                        <div
                            style={{
                                borderBottom: '1px solid #334155',
                                paddingBottom: 8,
                                marginBottom: 12,
                            }}
                        >
                            <div style={{ color: '#64748b', fontSize: 12 }}>
                                From: {t.magicStepUI.emailFrom}
                            </div>
                            <div style={{ color: '#e5e7eb', fontWeight: 600 }}>
                                {t.magicStepUI.emailSubject}
                            </div>
                        </div>
                        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6 }}>
                            <p>{t.magicStepUI.emailGreeting}</p>
                            <p>{t.magicStepUI.emailClickLink}</p>
                            <div
                                style={{
                                    background: '#1e293b',
                                    padding: 12,
                                    borderRadius: 4,
                                    marginTop: 8,
                                    wordBreak: 'break-all',
                                    fontSize: 12,
                                    color: '#818cf8',
                                }}
                            >
                                {link ||
                                    'https://app.example.com/magic/callback?token=...&rid=...'}
                            </div>
                            <p style={{ marginTop: 12, color: '#94a3b8', fontSize: 12 }}>
                                ※ {t.magicStepUI.linkValidTime}
                            </p>
                        </div>
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
                        {t.magicStepUI.clickLink} →
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.behindTheScenes}>
                <ul>
                    <li>{t.magicStepUI.userOpensEmail}</li>
                    <li>{t.magicStepUI.emailContainsLink}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
