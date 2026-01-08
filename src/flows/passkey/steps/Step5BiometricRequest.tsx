import type { StepProps } from '../../../types';
import Layout from '../../../components/Layout';
import ActionPanel from '../../../components/ActionPanel';
import ExplanationPanel from '../../../components/ExplanationPanel';
import { useTranslation } from '../../../i18n';

export default function Step5BiometricRequest({ onNext, onPrev }: StepProps) {
    const t = useTranslation();

    return (
        <Layout>
            <ActionPanel title={`${t.stepUI.stepN} 5: ${t.passkeyStepUI.biometricRequest}`}>
                <p>{t.passkeyStepUI.biometricRequestDesc}</p>

                <div className='mock-box'>
                    <p>📱 {t.passkeyStepUIDetail.biometricDialogShown}</p>
                    <p style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
                        {t.passkeyStepUIDetail.biometricExample}
                    </p>
                    <button
                        className='secondary-button'
                        style={{ marginTop: 12 }}
                        onClick={onPrev}
                    >
                        {t.stepUI.back}
                    </button>{' '}
                    <button
                        className='primary-button'
                        style={{ marginTop: 12 }}
                        onClick={onNext}
                    >
                        {t.stepUI.next}
                    </button>
                </div>
            </ActionPanel>

            <ExplanationPanel title={t.stepUI.whatHappens}>
                <ul>
                    <li>{t.passkeyStepUIDetail.deviceSecureHardware}</li>
                    <li>{t.passkeyStepUIDetail.userEntersBiometricOrPin}</li>
                    <li>{t.passkeyStepUIDetail.authFailsHere}</li>
                </ul>
            </ExplanationPanel>
        </Layout>
    );
}
