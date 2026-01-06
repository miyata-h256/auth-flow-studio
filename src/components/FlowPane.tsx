import type { FlowStepWithType } from '../types';
import styles from './styles/FlowPane.module.css';

// FlowSvgコンポーネントを直接インポート
import OidcFlowSvg from '../flows/oidc/OidcFlowSvg';
import PasskeyFlowSvg from '../flows/passkey/PasskeyFlowSvg';
import MagicFlowSvg from '../flows/magic/MagicFlowSvg';

export type FlowId = 'oidc' | 'passkey' | 'magic';

interface FlowPaneProps {
    flowId: FlowId;
    activeStep: number;
    onStepClick?: (step: FlowStepWithType | null) => void;
}

/**
 * FlowPane - Compare画面用のフロー図表示コンポーネント
 */
export default function FlowPane({ flowId, activeStep, onStepClick }: FlowPaneProps) {
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
