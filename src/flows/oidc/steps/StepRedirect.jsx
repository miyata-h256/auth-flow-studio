import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';
import { buildRedirectUrl } from '../../../utils/oidcMock.js';

const redirectUrl = buildRedirectUrl();

export default function StepRedirect({ onNext, onPrev }) {
  return (
    <Layout>
      <ActionPanel title='Redirect Back to Client'>
        <p>Provider は Authorization Code を付与してクライアントに戻します。</p>

        <div className='mock-box'>
          <p style={{ marginBottom: 4 }}>ブラウザの URL（擬似）</p>
          <code className='code-block'>{redirectUrl}</code>
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
            Token 交換へ進む →
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='Behind the Scenes'>
        <ul>
          <li>
            クエリには <code>code</code> と <code>state</code>{' '}
            が含まれています。
          </li>
          <li>
            クライアントは受け取った <code>state</code>{' '}
            が最初に送ったものと一致するか確認します。
          </li>
          <li>一致しなければ CSRF 攻撃の疑いがあり、処理を中断します。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
