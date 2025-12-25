import { motion } from 'motion/react';

/**
 * アニメーション付き矢印コンポーネント
 * @param {Object} props
 * @param {string} props.d - SVGパスデータ
 * @param {boolean} [props.active=false] - アクティブ状態
 */
export function AnimatedArrow({ d, active = false }) {
  return (
    <motion.path
      d={d}
      stroke='#a78bfa'
      strokeWidth='3'
      strokeLinecap='round'
      fill='none'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    />
  );
}
