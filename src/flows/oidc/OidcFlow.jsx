import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep.js';

import StepIndicator from '../../components/StepIndicator.jsx';

import StepClient from './steps/StepClient.jsx';
import StepProvider from './steps/StepProvider.jsx';
import StepRedirect from './steps/StepRedirect.jsx';
import StepTokenRequest from './steps/StepTokenRequest.jsx';
import StepTokenResponse from './steps/StepTokenResponse.jsx';
import StepSuccess from './steps/StepSuccess.jsx';
import styles from '../styles/Flow.module.css';
import OidcFlowSvg from './OidcFlowSvg.jsx';
import StepAuthorizationCodeRequest from './steps/StepAuthorizationCodeRequest.jsx';
import StepRedirectToLogin from './steps/StepRedirectToLogin.jsx';
import StepValidateAuthorizationCode from './steps/StepValidateAuthorizationCode.jsx';
const STEP_LABELS = [
  'User: OIDCログイン開始',
  'Authorization Code Request: 認可コード要求',
  'Redirect to Login: ログイン画面へリダイレクト',
  'Provider: ログイン / 同意',
  'Redirect: Code 受け取り',
  'Token Request: トークン要求',
  'Validate Authorization Code: 認可コード検証',
  'Token Response: Token取得',
  'App: ログイン完了',
];

export default function OidcFlow({ onStepSelect }) {
  const navigate = useNavigate();
  const handleBack = () => navigate('/home');
  const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);

  const screens = [
    <StepClient onNext={next} />,
    <StepAuthorizationCodeRequest
      onNext={next}
      onPrev={prev}
    />,
    <StepRedirectToLogin
      onNext={next}
      onPrev={prev}
    />,
    <StepProvider
      onNext={next}
      onPrev={prev}
    />,
    <StepRedirect
      onNext={next}
      onPrev={prev}
    />,
    <StepTokenRequest
      onNext={next}
      onPrev={prev}
    />,
    <StepValidateAuthorizationCode
      onNext={next}
      onPrev={prev}
    />,
    <StepTokenResponse
      onNext={next}
      onPrev={prev}
    />,
    <StepSuccess
      onNext={handleBack}
      onPrev={prev}
    />,
  ];

  return (
    <div className={styles['flow-root']}>
      <header className={styles['flow-header']}>
        <div></div>
        <div>
          <h1>OIDC Code Flow</h1>
          <p className={styles['flow-subtitle']}>
            OAuth2 / OIDC の典型的なコードフローを、画面と裏側の動きで追体験
          </p>
        </div>
        <button
          className='reset-button'
          onClick={reset}
        >
          リセット
        </button>
      </header>

      {/* OIDCアニメーション付きフロー図 */}
      <OidcFlowSvg
        activeStep={step + 1}
        onStepClick={onStepSelect}
      />

      <div
        style={{
          display: 'flex',
        }}
      >
        {/* ステップUI */}
        <div style={{ flex: 1 }}>{screens[step]}</div>
      </div>

      <StepIndicator
        steps={STEP_LABELS}
        current={step}
      />
    </div>
  );
}
