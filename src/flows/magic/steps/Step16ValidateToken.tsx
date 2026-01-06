import { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import styles from '../styles/Steps.module.css';

/**
 * Step 16: API internal
 * hash(token)一致確認 / 期限確認 / used=false確認
 */
export default function Step16ValidateToken({ onNext, onPrev }: StepProps) {
    return (
        <Layout>
            <ActionPanel title='トークン検証'>
                <p>Auth API内部でトークンの検証を行います。</p>

                <div className={styles['mock-box']}>
                    <p>検証チェックリスト</p>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            color: '#e5e7eb',
                            fontSize: 14,
                        }}
                    >
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            hash(token) がstoredHashと一致
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            expiresAt が現在時刻より後（有効期限内）
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            <span style={{ color: '#6ee7b7', marginRight: 8 }}>✓</span>
                            used = false（未使用）
                        </li>
                    </ul>
                    <div style={{ marginTop: 12 }}>
                        <span className={`${styles['status-badge']} ${styles['success']}`}>
                            ✓ 検証成功
                        </span>
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
                        次へ →
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title='Behind the Scenes'>
                <ul>
                    <li>
                        <strong>hash一致確認:</strong>{' '}
                        受け取ったtokenをハッシュ化し、DBのハッシュと比較。
                    </li>
                    <li>
                        <strong>期限確認:</strong> トークンの有効期限が切れていないか確認。
                    </li>
                    <li>
                        <strong>used確認:</strong>{' '}
                        ワンタイム性を保証するため、未使用であることを確認。
                    </li>
                    <li>
                        検証成功後、<code>used=true</code> に更新して再利用を防止します。
                    </li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
