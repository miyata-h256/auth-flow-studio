import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function StepDone({ email, onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='ログイン完了'>
        <p>
          ワンタイムリンクの検証が成功すると、そのメールアドレスのユーザーとしてログイン完了です。
        </p>

        <div className='mock-box'>
          <p>ログイン状態（サンプル）</p>
          <pre className='code-block'>
            {JSON.stringify(
              {
                isAuthenticated: true,
                method: 'magic-link',
                user: {
                  email,
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
          <li>
            パスワードの代わりに「メールを受け取れること」が認証要素になっています。
          </li>
          <li>リンクには有効期限を設けて、不正利用を防ぎます。</li>
          <li>
            実運用では IP 制限やデバイス情報などと組み合わせて安全性を高めます。
          </li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
