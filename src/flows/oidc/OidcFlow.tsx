import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep';

import StepIndicator from '../../components/StepIndicator';

import StepClient from './steps/StepClient';
import StepProvider from './steps/StepProvider';
import StepRedirect from './steps/StepRedirect';
import StepTokenRequest from './steps/StepTokenRequest';
import StepTokenResponse from './steps/StepTokenResponse';
import StepSuccess from './steps/StepSuccess';
import styles from '../styles/Flow.module.css';
import OidcFlowSvg from './OidcFlowSvg';
import StepAuthorizationCodeRequest from './steps/StepAuthorizationCodeRequest';
import StepRedirectToLogin from './steps/StepRedirectToLogin';
import StepValidateAuthorizationCode from './steps/StepValidateAuthorizationCode';
import { FlowProps } from '../../types';

const STEP_LABELS: string[] = [
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

export default function OidcFlow({ onStepSelect, interactive = false }: FlowProps) {
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
                interactive={interactive}
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
