import Layout from '../../../components/Layout.jsx';
import ActionPanel from '../../../components/ActionPanel.jsx';
import ExplanationPanel from '../../../components/ExplanationPanel.jsx';

export default function Step1LoginClick({ onNext }) {
  return (
    <Layout>
      <ActionPanel title='ステップ 1: ログインボタンクリック'>
        <p>ユーザーが「パスキーでログイン」ボタンをクリックします。</p>

        <div className='mock-box'>
          <button
            className='primary-button'
            onClick={onNext}
          >
            パスキーでログイン
          </button>
        </div>
      </ActionPanel>

      <ExplanationPanel title='このステップで起こること'>
        <ul>
          <li>
            フロントエンドアプリケーションがユーザーの操作を受け取ります。
          </li>
          <li>バックエンドに認証開始のリクエストを送る準備をします。</li>
        </ul>
      </ExplanationPanel>
    </Layout>
  );
}
