import styles from './styles/FlowPane.module.css';

// FlowSvgコンポーネントを直接インポート
import OidcFlowSvg from '../flows/oidc/OidcFlowSvg';
import PasskeyFlowSvg from '../flows/passkey/PasskeyFlowSvg';
import MagicFlowSvg from '../flows/magic/MagicFlowSvg';

/**
 * FlowPane - Compare画面用のフロー図表示コンポーネント
 *
 * props:
 *  - flowId: 'oidc' | 'passkey' | 'magic'
 *  - activeStep: 現在アクティブなステップ番号（ハイライト表示用）
 *  - onStepClick: ステップクリック時のコールバック
 */
export default function FlowPane({ flowId, activeStep, onStepClick }) {
  return (
    <div className={styles.pane}>
      {flowId === 'oidc' && (
        <OidcFlowSvg
          activeStep={activeStep}
          onStepClick={onStepClick}
          interactive={true}
        />
      )}
      {flowId === 'passkey' && (
        <PasskeyFlowSvg
          activeStep={activeStep}
          onStepClick={onStepClick}
          interactive={true}
        />
      )}
      {flowId === 'magic' && (
        <MagicFlowSvg
          activeStep={activeStep}
          onStepClick={onStepClick}
          interactive={true}
        />
      )}
    </div>
  );
}
