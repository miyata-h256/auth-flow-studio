// src/flows/passkey/PasskeyFlowSvg.jsx
import styles from './styles/PasskeyFlowSvg.module.css';

/**
 * Passkey フロー図（SVG版）
 * PasskeyFlow のステップ: 1-14
 *
 * props:
 *  - activeStep: ステップ番号（1-14）
 */
export default function PasskeyFlowSvg({ activeStep }) {
  return (
    <svg
      className={styles.svgRoot}
      viewBox='0 0 1032 1182'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        {/* ====================================================================== */}
        {/* ノード（参加者） */}
        {/* ====================================================================== */}

        {/* User (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='0'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='70'
            y='37'
          >
            User
          </text>
        </g>

        {/* Frontend (Client) (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='230'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='300'
            y='25'
          >
            Frontend
          </text>
          <text
            className={styles.nodeLabel}
            x='300'
            y='45'
          >
            (Client)
          </text>
        </g>

        {/* Backend (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='660'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='730'
            y='37'
          >
            Backend
          </text>
        </g>

        {/* Authenticator (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='890'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='960'
            y='37'
          >
            Authenticator
          </text>
        </g>

        {/* User (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='0'
            y='1110'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='70'
            y='1147'
          >
            User
          </text>
        </g>

        {/* Frontend (Client) (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='230'
            y='1110'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='300'
            y='1135'
          >
            Frontend
          </text>
          <text
            className={styles.nodeLabel}
            x='300'
            y='1155'
          >
            (Client)
          </text>
        </g>

        {/* Backend (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='660'
            y='1110'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='730'
            y='1147'
          >
            Backend
          </text>
        </g>

        {/* Authenticator (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='890'
            y='1110'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='960'
            y='1147'
          >
            Authenticator
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Lifeline（縦線） */}
        {/* ====================================================================== */}
        <line
          x1='70'
          y1='70'
          x2='70'
          y2='1110'
          className={styles.lifeline}
        />
        <line
          x1='300'
          y1='70'
          x2='300'
          y2='1110'
          className={styles.lifeline}
        />
        <line
          x1='730'
          y1='70'
          x2='730'
          y2='1110'
          className={styles.lifeline}
        />
        <line
          x1='960'
          y1='70'
          x2='960'
          y2='1110'
          className={styles.lifeline}
        />

        {/* ====================================================================== */}
        {/* ステップ矢印 */}
        {/* ====================================================================== */}

        {/* Step 1: User → Frontend (「パスキーでログイン」クリック) */}
        <g
          data-step-arrow='1'
          className={`${styles.arrowGroup} ${
            activeStep === 1 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='130'
            x2='270'
            y2='130'
          />
          <text
            x='177'
            y='115'
            className={styles.arrowLabel}
          >
            Click Login
          </text>
          <polygon
            className={styles.arrowHead}
            points='280,130 260,135 263,130 260,125'
          />
        </g>

        {/* Step 2: Frontend → Backend (POST /webauthn/authenticate/begin) */}
        <g
          data-step-arrow='2'
          className={`${styles.arrowGroup} ${
            activeStep === 2 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='315'
            y1='180'
            x2='660'
            y2='180'
          />
          <text
            x='487'
            y='165'
            className={styles.arrowLabel}
          >
            Authentication Begin
          </text>
          <polygon
            className={styles.arrowHead}
            points='670,180 650,185 653,180 650,175'
          />
        </g>

        {/* Step 3: Backend → Frontend (PublicKeyCredentialRequestOptions) */}
        <g
          data-step-arrow='3'
          className={`${styles.arrowGroup} ${
            activeStep === 3 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='660'
            y1='230'
            x2='315'
            y2='230'
          />
          <text
            x='487'
            y='215'
            className={styles.arrowLabel}
          >
            Challenge Options
          </text>
          <polygon
            className={styles.arrowHead}
            points='305,230 325,225 322,230 325,235'
          />
        </g>

        {/* Step 4: Frontend → Authenticator (credentials.get) */}
        <g
          data-step-arrow='4'
          className={`${styles.arrowGroup} ${
            activeStep === 4 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='315'
            y1='280'
            x2='920'
            y2='280'
          />
          <text
            x='617'
            y='265'
            className={styles.arrowLabel}
          >
            credentials.get()
          </text>
          <polygon
            className={styles.arrowHead}
            points='930,280 910,285 913,280 910,275'
          />
        </g>

        {/* Step 5: Authenticator → User (生体認証 / PIN 要求) */}
        <g
          data-step-arrow='5'
          className={`${styles.arrowGroup} ${
            activeStep === 5 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='920'
            y1='330'
            x2='85'
            y2='330'
          />
          <text
            x='502'
            y='315'
            className={styles.arrowLabel}
          >
            Biometric / PIN Request
          </text>
          <polygon
            className={styles.arrowHead}
            points='75,330 95,325 92,330 95,335'
          />
        </g>

        {/* Step 6: User → Authenticator (認証OK) */}
        <g
          data-step-arrow='6'
          className={`${styles.arrowGroup} ${
            activeStep === 6 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='380'
            x2='920'
            y2='380'
          />
          <text
            x='502'
            y='365'
            className={styles.arrowLabel}
          >
            Authentication OK
          </text>
          <polygon
            className={styles.arrowHead}
            points='930,380 910,385 913,380 910,375'
          />
        </g>

        {/* Step 7: Authenticator → Frontend (assertion) */}
        <g
          data-step-arrow='7'
          className={`${styles.arrowGroup} ${
            activeStep === 7 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='920'
            y1='430'
            x2='315'
            y2='430'
          />
          <text
            x='617'
            y='415'
            className={styles.arrowLabel}
          >
            Assertion
          </text>
          <polygon
            className={styles.arrowHead}
            points='305,430 325,425 322,430 325,435'
          />
        </g>

        {/* Step 8: Frontend → Backend (POST /webauthn/authenticate/complete) */}
        <g
          data-step-arrow='8'
          className={`${styles.arrowGroup} ${
            activeStep === 8 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='315'
            y1='480'
            x2='660'
            y2='480'
          />
          <text
            x='487'
            y='465'
            className={styles.arrowLabel}
          >
            Authentication Complete
          </text>
          <polygon
            className={styles.arrowHead}
            points='670,480 650,485 653,480 650,475'
          />
        </g>

        {/* Step 9: Backend → Backend (challenge 検証) */}
        <g
          data-step-arrow='9'
          className={`${styles.arrowGroup} ${
            activeStep === 9 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='730'
            y1='530'
            x2='730'
            y2='530'
            strokeDasharray='5,5'
          />
          <text
            x='765'
            y='520'
            className={styles.arrowLabel}
          >
            Verify Challenge
          </text>
        </g>

        {/* Step 10: Backend → Backend (publicKey 検証) */}
        <g
          data-step-arrow='10'
          className={`${styles.arrowGroup} ${
            activeStep === 10 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='730'
            y1='575'
            x2='730'
            y2='575'
            strokeDasharray='5,5'
          />
          <text
            x='765'
            y='565'
            className={styles.arrowLabel}
          >
            Verify Signature
          </text>
        </g>

        {/* Step 11: Backend → Backend (signCount チェック) */}
        <g
          data-step-arrow='11'
          className={`${styles.arrowGroup} ${
            activeStep === 11 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='730'
            y1='620'
            x2='730'
            y2='620'
            strokeDasharray='5,5'
          />
          <text
            x='765'
            y='610'
            className={styles.arrowLabel}
          >
            Check signCount
          </text>
        </g>

        {/* Step 12: Backend → Frontend (認証成功 + セッション) */}
        <g
          data-step-arrow='12'
          className={`${styles.arrowGroup} ${
            activeStep === 12 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='660'
            y1='680'
            x2='315'
            y2='680'
          />
          <text
            x='487'
            y='665'
            className={styles.arrowLabel}
          >
            Session Token
          </text>
          <polygon
            className={styles.arrowHead}
            points='305,680 325,675 322,680 325,685'
          />
        </g>

        {/* Step 13: Frontend → User (ログイン完了画面) */}
        <g
          data-step-arrow='13'
          className={`${styles.arrowGroup} ${
            activeStep === 13 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='270'
            y1='730'
            x2='85'
            y2='730'
          />
          <text
            x='177'
            y='715'
            className={styles.arrowLabel}
          >
            Authenticated
          </text>
          <polygon
            className={styles.arrowHead}
            points='75,730 95,725 92,730 95,735'
          />
        </g>

        {/* Step 14: Frontend → User (ログイン完了) */}
        <g
          data-step-arrow='14'
          className={`${styles.arrowGroup} ${
            activeStep === 14 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='1000'
            x2='270'
            y2='1000'
          />
          <text
            x='177'
            y='985'
            className={styles.arrowLabel}
          >
            Login Complete
          </text>
          <polygon
            className={styles.arrowHead}
            points='280,1000 260,1005 263,1000 260,995'
          />
        </g>

        {/* ====================================================================== */}
        {/* ステップノード（番号サークル） */}
        {/* ====================================================================== */}

        {/* Step 1 */}
        <g
          data-step-node='1'
          className={`${styles.stepGroup} ${
            activeStep === 1 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='70'
            cy='130'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70'
            y='130'
          >
            1
          </text>
        </g>

        {/* Step 2 */}
        <g
          data-step-node='2'
          className={`${styles.stepGroup} ${
            activeStep === 2 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='180'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='180'
          >
            2
          </text>
        </g>

        {/* Step 3 */}
        <g
          data-step-node='3'
          className={`${styles.stepGroup} ${
            activeStep === 3 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='230'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='230'
          >
            3
          </text>
        </g>

        {/* Step 4 */}
        <g
          data-step-node='4'
          className={`${styles.stepGroup} ${
            activeStep === 4 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='280'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='280'
          >
            4
          </text>
        </g>

        {/* Step 5 */}
        <g
          data-step-node='5'
          className={`${styles.stepGroup} ${
            activeStep === 5 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='960'
            cy='330'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='960'
            y='330'
          >
            5
          </text>
        </g>

        {/* Step 6 */}
        <g
          data-step-node='6'
          className={`${styles.stepGroup} ${
            activeStep === 6 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='70'
            cy='380'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70'
            y='380'
          >
            6
          </text>
        </g>

        {/* Step 7 */}
        <g
          data-step-node='7'
          className={`${styles.stepGroup} ${
            activeStep === 7 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='960'
            cy='430'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='960'
            y='430'
          >
            7
          </text>
        </g>

        {/* Step 8 */}
        <g
          data-step-node='8'
          className={`${styles.stepGroup} ${
            activeStep === 8 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='480'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='480'
          >
            8
          </text>
        </g>

        {/* Step 9 */}
        <g
          data-step-node='9'
          className={`${styles.stepGroup} ${
            activeStep === 9 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='530'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='530'
          >
            9
          </text>
        </g>

        {/* Step 10 */}
        <g
          data-step-node='10'
          className={`${styles.stepGroup} ${
            activeStep === 10 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='575'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='575'
          >
            10
          </text>
        </g>

        {/* Step 11 */}
        <g
          data-step-node='11'
          className={`${styles.stepGroup} ${
            activeStep === 11 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='620'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='620'
          >
            11
          </text>
        </g>

        {/* Step 12 */}
        <g
          data-step-node='12'
          className={`${styles.stepGroup} ${
            activeStep === 12 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='680'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='680'
          >
            12
          </text>
        </g>

        {/* Step 13 */}
        <g
          data-step-node='13'
          className={`${styles.stepGroup} ${
            activeStep === 13 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='730'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='730'
          >
            13
          </text>
        </g>

        {/* Step 14 */}
        <g
          data-step-node='14'
          className={`${styles.stepGroup} ${
            activeStep === 14 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='70'
            cy='1000'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70'
            y='1000'
          >
            14
          </text>
        </g>
      </g>
    </svg>
  );
}
