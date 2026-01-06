import styles from './styles/FlowPane.module.css';

import OidcFlow from '../flows/oidc/OidcFlow';
import PasskeyFlow from '../flows/passkey/PasskeyFlow';
import MagicFlow from '../flows/magic/MagicFlow';

/**
 * onStepSelect: クリックされたステップ情報を親に渡す
 * side: "left" | "right"（将来、差分色などに使える）
 */
export default function FlowPane({ flowId, side, onStepSelect }) {
  return (
    <div className={styles.pane}>
      {/* ここで「ステップクリックイベント」を拾えるようにするのが肝。
          既存のフロー側で onStepSelect を受け取れるなら渡す。
          受け取れないなら、まずは FlowPane をただ表示だけにする。 */}
      {flowId === 'oidc' && (
        <OidcFlow
          side={side}
          onStepSelect={onStepSelect}
          interactive={true}
        />
      )}
      {flowId === 'passkey' && (
        <PasskeyFlow
          side={side}
          onStepSelect={onStepSelect}
          interactive={true}
        />
      )}
      {flowId === 'magic' && (
        <MagicFlow
          side={side}
          onStepSelect={onStepSelect}
          interactive={true}
        />
      )}
    </div>
  );
}
