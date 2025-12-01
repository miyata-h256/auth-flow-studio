// import { motion } from 'motion/react';

export function AnimatedArrow({ d, active }) {
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
