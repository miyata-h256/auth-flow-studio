import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep';
import { useTranslation } from '../../i18n';
import StepIndicator from '../../components/StepIndicator';

import Step1EmailInput from './steps/Step1EmailInput';
import Step2MagicLinkRequest from './steps/Step2MagicLinkRequest';
import Step3UserLookup from './steps/Step3UserLookup';
import Step4UserResponse from './steps/Step4UserResponse';
import Step5CreateToken from './steps/Step5CreateToken';
import Step6TokenIdResponse from './steps/Step6TokenIdResponse';
import Step7SendEmail from './steps/Step7SendEmail';
import Step8EmailAccepted from './steps/Step8EmailAccepted';
import Step9ApiResponse from './steps/Step9ApiResponse';
import Step10CheckEmail from './steps/Step10CheckEmail';
import Step11OpenEmail from './steps/Step11OpenEmail';
import Step12ClickLink from './steps/Step12ClickLink';
import Step13VerifyRequest from './steps/Step13VerifyRequest';
import Step14LookupToken from './steps/Step14LookupToken';
import Step15TokenRecord from './steps/Step15TokenRecord';
import Step16ValidateToken from './steps/Step16ValidateToken';
import Step17LoginComplete from './steps/Step17LoginComplete';
import styles from '../styles/Flow.module.css';
import MagicFlowSvg from './MagicFlowSvg';
import type { FlowProps } from '../../types';

export default function MagicFlow({ onStepSelect, interactive = false }: FlowProps): React.ReactElement {
    const navigate = useNavigate();
    const t = useTranslation();
    const handleBack = () => navigate('/home');

    const STEP_LABELS = [
        `① ${t.magic.steps[1].label}`,
        `② ${t.magic.steps[2].label}`,
        `③ ${t.magic.steps[3].label}`,
        `④ ${t.magic.steps[4].label}`,
        `⑤ ${t.magic.steps[5].label}`,
        `⑥ ${t.magic.steps[6].label}`,
        `⑦ ${t.magic.steps[7].label}`,
        `⑧ ${t.magic.steps[8].label}`,
        `⑨ ${t.magic.steps[9].label}`,
        `⑩ ${t.magic.steps[10].label}`,
        `⑪ ${t.magic.steps[11].label}`,
        `⑫ ${t.magic.steps[12].label}`,
        `⑬ ${t.magic.steps[13].label}`,
        `⑭ ${t.magic.steps[14].label}`,
        `⑮ ${t.magic.steps[15].label}`,
        `⑯ ${t.magic.steps[16].label}`,
        `⑰ ${t.magic.steps[17].label}`,
    ];

    const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);
    const [email, setEmail] = useState('user@example.com');
    const [link, setLink] = useState('');

    const screens = [
        <Step1EmailInput
            key="step1"
            email={email}
            setEmail={setEmail}
            onNext={next}
        />,
        <Step2MagicLinkRequest
            key="step2"
            email={email}
            onNext={next}
            onPrev={prev}
        />,
        <Step3UserLookup
            key="step3"
            email={email}
            onNext={next}
            onPrev={prev}
        />,
        <Step4UserResponse
            key="step4"
            email={email}
            onNext={next}
            onPrev={prev}
        />,
        <Step5CreateToken
            key="step5"
            email={email}
            onNext={next}
            onPrev={prev}
        />,
        <Step6TokenIdResponse
            key="step6"
            onNext={next}
            onPrev={prev}
        />,
        <Step7SendEmail
            key="step7"
            email={email}
            setLink={setLink}
            onNext={next}
            onPrev={prev}
        />,
        <Step8EmailAccepted
            key="step8"
            onNext={next}
            onPrev={prev}
        />,
        <Step9ApiResponse
            key="step9"
            onNext={next}
            onPrev={prev}
        />,
        <Step10CheckEmail
            key="step10"
            onNext={next}
            onPrev={prev}
        />,
        <Step11OpenEmail
            key="step11"
            link={link}
            onNext={next}
            onPrev={prev}
        />,
        <Step12ClickLink
            key="step12"
            link={link}
            onNext={next}
            onPrev={prev}
        />,
        <Step13VerifyRequest
            key="step13"
            link={link}
            onNext={next}
            onPrev={prev}
        />,
        <Step14LookupToken
            key="step14"
            onNext={next}
            onPrev={prev}
        />,
        <Step15TokenRecord
            key="step15"
            email={email}
            onNext={next}
            onPrev={prev}
        />,
        <Step16ValidateToken
            key="step16"
            onNext={next}
            onPrev={prev}
        />,
        <Step17LoginComplete
            key="step17"
            email={email}
            onNext={handleBack}
            onPrev={prev}
        />,
    ];

    return (
        <div className={styles['flow-root']}>
            <header className={styles['flow-header']}>
                <div></div>
                <div>
                    <h1>{t.magic.title}</h1>
                    <p className={styles['flow-subtitle']}>
                        {t.magic.subtitle}
                    </p>
                </div>
                <button
                    className='reset-button'
                    onClick={reset}
                >
                    {t.common.back}
                </button>
            </header>

            {/* Magic Link フロー図 */}
            <MagicFlowSvg
                activeStep={step + 1}
                onStepClick={onStepSelect}
                interactive={interactive}
            />

            {screens[step]}

            <StepIndicator
                steps={STEP_LABELS}
                current={step}
            />
        </div>
    );
}
