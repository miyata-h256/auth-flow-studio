import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep';
import { useTranslation } from '../../i18n';

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

export default function OidcFlow({ onStepSelect, interactive = false }: FlowProps) {
    const navigate = useNavigate();
    const t = useTranslation();
    const handleBack = () => navigate('/home');

    const STEP_LABELS: string[] = [
        `User: ${t.oidc.steps[1].label}`,
        `Authorization Code Request: ${t.oidc.steps[2].label}`,
        `Redirect to Login: ${t.oidc.steps[3].label}`,
        `Provider: ${t.oidc.steps[4].label}`,
        `Redirect: ${t.oidc.steps[5].label}`,
        `Token Request: ${t.oidc.steps[6].label}`,
        `Validate Authorization Code: ${t.oidc.steps[7].label}`,
        `Token Response: ${t.oidc.steps[8].label}`,
        `App: ${t.oidc.steps[9].label}`,
    ];

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
                    <h1>{t.oidc.title}</h1>
                    <p className={styles['flow-subtitle']}>
                        {t.oidc.subtitle}
                    </p>
                </div>
                <button
                    className='reset-button'
                    onClick={reset}
                >
                    {t.common.back}
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
