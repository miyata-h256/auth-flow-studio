import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';

export default function Step5BiometricRequest({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='ステップ 5: 生体認証リクエスト'>
                <p>オーセンティケーター（デバイス）がユーザーに生体認証を求めます。</p>

                <div className='mock-box'>
                    <p>📱 生体認証ダイアログが表示されます</p>
                    <p style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
                        例: Touch ID / Face ID / Windows Hello
                    </p>
                    <button
                        className='secondary-button'
                        style={{ marginTop: 12 }}
                        onClick={onPrev}
                    >
                        ← 戻る
                    </button>{' '}
                    <button
                        className='primary-button'
                        style={{ marginTop: 12 }}
                        onClick={onNext}
                    >
                        認証を実行
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='このステップで起こること'>
                <ul>
                    <li>
                        デバイスのセキュアなハードウェアが起動します（Touch ID など）。
                    </li>
                    <li>ユーザーは生体認証またはデバイス PIN を入力します。</li>
                    <li>認証失敗時は、ここで処理が止まります。</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
