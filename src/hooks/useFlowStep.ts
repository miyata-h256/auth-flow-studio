import { useState, useCallback } from 'react';
import type { UseFlowStepReturn } from '../types';

/**
 * フローステップを管理するカスタムフック
 * @param totalSteps - フローの総ステップ数
 * @returns ステップ管理オブジェクト
 */
export function useFlowStep(totalSteps: number): UseFlowStepReturn {
    const [step, setStep] = useState(0);

    const next = useCallback(
        () => setStep((s) => Math.min(s + 1, totalSteps - 1)),
        [totalSteps]
    );

    const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

    const reset = useCallback(() => setStep(0), []);

    return { step, next, prev, reset };
}
