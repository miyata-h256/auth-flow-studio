import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep';
import StepIndicator from '../../components/StepIndicator';

import Step1LoginClick from './steps/Step1LoginClick';
import Step2AuthBegin from './steps/Step2AuthBegin';
import Step3ChallengeOptions from './steps/Step3ChallengeOptions';
import Step4CredentialsGet from './steps/Step4CredentialsGet';
import Step5BiometricRequest from './steps/Step5BiometricRequest';
import Step6AuthenticationOK from './steps/Step6AuthenticationOK';
import Step7Assertion from './steps/Step7Assertion';
import Step8AuthComplete from './steps/Step8AuthComplete';
import Step9VerifyChallenge from './steps/Step9VerifyChallenge';
import Step10VerifySignature from './steps/Step10VerifySignature';
import Step11CheckSignCount from './steps/Step11CheckSignCount';
import Step12SessionToken from './steps/Step12SessionToken';
import Step13Authenticated from './steps/Step13Authenticated';
import Step14LoginComplete from './steps/Step14LoginComplete';
import styles from '../styles/Flow.module.css';
import PasskeyFlowSvg from './PasskeyFlowSvg';
import type { FlowProps } from '../../types';

const STEP_LABELS = [
    'ログインクリック',
    '認証開始',
    'チャレンジ',
    'credentials.get',
    '生体認証',
    '認証確認',
    'Assertion',
    '認証送信',
    'チャレンジ検証',
    '署名検証',
    'signCount確認',
    'トークン返却',
    '認証確立',
    'ログイン完了',
];

export default function PasskeyFlow({ onStepSelect, interactive = false }: FlowProps) {
    const navigate = useNavigate();
    const handleBack = () => navigate('/home');
    const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);

    const screens = [
        <Step1LoginClick
            onNext={next}
            onPrev={prev}
        />,
        <Step2AuthBegin
            onNext={next}
            onPrev={prev}
        />,
        <Step3ChallengeOptions
            onNext={next}
            onPrev={prev}
        />,
        <Step4CredentialsGet
            onNext={next}
            onPrev={prev}
        />,
        <Step5BiometricRequest
            onNext={next}
            onPrev={prev}
        />,
        <Step6AuthenticationOK
            onNext={next}
            onPrev={prev}
        />,
        <Step7Assertion
            onNext={next}
            onPrev={prev}
        />,
        <Step8AuthComplete
            onNext={next}
            onPrev={prev}
        />,
        <Step9VerifyChallenge
            onNext={next}
            onPrev={prev}
        />,
        <Step10VerifySignature
            onNext={next}
            onPrev={prev}
        />,
        <Step11CheckSignCount
            onNext={next}
            onPrev={prev}
        />,
        <Step12SessionToken
            onNext={next}
            onPrev={prev}
        />,
        <Step13Authenticated
            onNext={next}
            onPrev={prev}
        />,
        <Step14LoginComplete
            onNext={handleBack}
            onPrev={prev}
        />,
    ];

    return (
        <div className={styles['flow-root']}>
            <header className={styles['flow-header']}>
                <div></div>
                <div>
                    <h1>Passkey (WebAuthn)</h1>
                    <p className={styles['flow-subtitle']}>
                        公開鍵暗号をベースにしたパスワードレス認証の流れをざっくり理解する
                    </p>
                </div>
                <button
                    className='reset-button'
                    onClick={reset}
                >
                    リセット
                </button>
            </header>

            <PasskeyFlowSvg
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
