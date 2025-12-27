import { useState, useCallback } from 'react';

/**
 * フローステップを管理するカスタムフック
 * @param {number} totalSteps - フローの総ステップ数
 * @returns {Object} ステップ管理オブジェクト
 * @returns {number} returns.step - 現在のステップインデックス (0-based)
 * @returns {function} returns.next - 次のステップに進む関数
 * @returns {function} returns.prev - 前のステップに戻る関数
 * @returns {function} returns.reset - 最初のステップに戻る関数
 */
export function useFlowStep(totalSteps) {
  const [step, setStep] = useState(0);

  const next = useCallback(
    () => setStep((s) => Math.min(s + 1, totalSteps - 1)),
    [totalSteps]
  );

  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  const reset = useCallback(() => setStep(0), []);

  return { step, next, prev, reset };
}
