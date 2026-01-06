// src/types/flow.ts
// フロー関連の共通型定義

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | null;

/**
 * フローステップのメタデータ
 */
export interface FlowStep {
    id: number;
    label: string;
    from: string;
    to: string;
    description: string;
    detail: string;
    httpMethod: HttpMethod;
    endpoint?: string | null;
    payload?: Record<string, unknown> | null;
}

/**
 * フローステップのマップ型
 */
export type FlowSteps = Record<number, FlowStep>;

/**
 * useFlowStep フックの戻り値
 */
export interface UseFlowStepReturn {
    step: number;
    next: () => void;
    prev: () => void;
    reset: () => void;
}

/**
 * ステップコンポーネントの共通Props
 */
export interface StepProps {
    onNext: () => void;
    onPrev?: () => void;
}

/**
 * Magic Link ステップ用の拡張Props
 */
export interface MagicStepProps extends StepProps {
    email?: string;
    setEmail?: React.Dispatch<React.SetStateAction<string>>;
    link?: string;
    setLink?: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * FlowStep with flowType
 */
export interface FlowStepWithType extends FlowStep {
    flowType: string;
}

/**
 * フローコンポーネントの共通Props
 */
export interface FlowProps {
    onStepSelect?: (step: FlowStepWithType | null) => void;
    interactive?: boolean;
}

/**
 * SVGフローコンポーネントの共通Props
 */
export interface FlowSvgProps {
    activeStep: number;
    onStepClick?: (step: FlowStepWithType | null) => void;
    interactive?: boolean;
}
