import { AuthFlowSvg } from '../../components/AuthFlowSvg';
import { AnimatedArrow } from '../../components/AnimatedArrow';

export default function OidcFlowDiagram({ step }) {
  return (
    <AuthFlowSvg>
      <AnimatedArrow
        d='M300 130 L350 100'
        active={step >= 0}
      />
      <AnimatedArrow
        d='M425 70 L425 60 L80 60 L80 100'
        active={step >= 1}
      />
      <AnimatedArrow
        d='M80 160 L80 200 L425 200'
        active={step >= 2}
      />
      <AnimatedArrow
        d='M425 130 L300 130'
        active={step >= 3}
      />
      <AnimatedArrow
        d='M300 160 L350 160'
        active={step >= 4}
      />
    </AuthFlowSvg>
  );
}
