import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

/**
 * Step 11: User → Email Service
 * メール閲覧
 */
export default function Step11OpenEmail({ link, onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='④ メールを開く'>
        <p>ユーザーがメールボックスを開き、Magic Linkのメールを確認します。</p>

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
                From: noreply@app.example.com
              </div>
              <div style={{ color: '#e5e7eb', fontWeight: 600 }}>
                件名: あなたのログインリンク
              </div>
            </div>
            <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6 }}>
              <p>こんにちは、</p>
              <p>以下のリンクをクリックしてログインしてください：</p>
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
                ※ このリンクは15分間有効です。
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <button
            className='secondary-button'
            onClick={onPrev}
          >
            ← 戻る
          </button>{' '}
          <button
            className='primary-button'
            onClick={onNext}
          >
            リンクをクリック →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            ユーザーはメールアプリ（Gmail、Outlookなど）でメールを開きます。
          </li>
          <li>メールにはMagic Linkと有効期限の案内が含まれています。</li>
          <li>次のステップでリンクをクリックします。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
