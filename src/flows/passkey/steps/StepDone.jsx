import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepDone({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='ログイン完了'>
        <p>
          署名の検証が成功すると、そのユーザーとしてログイン完了となります。
        </p>

        <div className='mock-box'>
          <p>ログイン状態（サンプル）</p>
          <pre className='code-block'>
            {JSON.stringify(
              {
                isAuthenticated: true,
                method: 'passkey',
                user: {
                  id: 'user-123',
                  displayName: 'Passkey User',
                },
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
            onClick={onNext}
          >
            トップに戻る
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>パスワードは一度も送信されていません。</li>
          <li>
            認証情報の「所持（デバイス）」＋「生体情報 or
            PIN」で安全性を確保します。
          </li>
          <li>
            これが Passkey / WebAuthn
            によるパスワードレス認証のざっくりした流れです。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
