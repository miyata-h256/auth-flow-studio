import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import styles from '../styles/Steps.module.css';

/**
 * Step 7: API → Email Service
 * Send email with Magic Link
 */
export default function Step7SendEmail({ email, setLink, onNext, onPrev }) {
  const mockToken = btoa(JSON.stringify({ email, ts: 1735128000000 })).slice(
    0,
    24
  );
  const mockTokenId = 'tid_x7k9m2p4';
  const magicLink = `https://app.example.com/magic/callback?token=${mockToken}&rid=${mockTokenId}`;

  const handleNext = () => {
    setLink?.(magicLink);
    onNext();
  };

  return (
    <Layout>
      <ActionPanel title='③ メール送信'>
        <p>
          Auth APIがEmail ServiceにMagic Linkを含むメールの送信を依頼します。
        </p>

        <div className={styles['mock-box']}>
          <p>メール送信リクエスト</p>
          <pre className={styles['code-block']}>
            {JSON.stringify(
              {
                to: email,
                subject: 'ログインリンク',
                body: `以下のリンクをクリックしてログインしてください:\n${magicLink}`,
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
            ← 戻る
          </button>{' '}
          <button
            className='primary-button'
            onClick={handleNext}
          >
            次へ →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>Email ServiceはSMTP、Amazon SES、SendGridなどで実装されます。</li>
          <li>Magic LinkにはRAW_TOKENとtokenId（rid）の両方が含まれます。</li>
          <li>セキュリティのため、リンクはHTTPSである必要があります。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
