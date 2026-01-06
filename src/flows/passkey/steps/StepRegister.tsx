/**
 * @deprecated このコンポーネントは現在使用されていません。
 * 将来的にPasskey登録フローを実装する際に使用される可能性があります。
 */
import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { generatePasskey } from '../../../utils/passkeyMock';
import styles from '../styles/PasskeyFlow.module.css';
const passkey = generatePasskey();

export default function StepRegister({ onNext }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='Passkey 登録'>
                <p>新しいデバイスでパスキーを登録するイメージです。</p>

                <div className='mock-box'>
                    <p>端末のセキュリティ UI（Touch ID / Face ID）をイメージ</p>
                    <button
                        className='primary-button'
                        onClick={onNext}
                    >
                        パスキーを作成する
                    </button>
                </div>

                <div
                    className={styles['mock-box']}
                    style={{ marginTop: 16 }}
                >
                    <h4>生成された情報（サンプル）</h4>
                    <pre className={styles['code-block']}>
                        {JSON.stringify(passkey, null, 2)}
                    </pre>
                </div>
            </ActionPanel>

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>端末内のセキュアな領域で鍵ペアが生成されます。</li>
                    <li>秘密鍵は端末から出ません。</li>
                    <li>
                        サーバには <strong>公開鍵 + credentialId</strong> が登録されます。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
