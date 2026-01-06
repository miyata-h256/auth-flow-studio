// src/flows/passkey/PasskeyFlowSvg.jsx
import styles from './styles/PasskeyFlowSvg.module.css';
import { PASSKEY_STEPS } from './passkeySteps.js';

/**
 * Passkey フロー図（SVG版）
 *
 * props:
 *  - activeStep: 1〜14（それ以外なら全部非アクティブ）
 *  - onStepClick: (stepData) => void - ステップクリック時のコールバック
 *  - interactive: boolean - クリック操作を有効にするか（デフォルト: false）
 *
 * Participants (4):
 *  - USER: User
 *  - FE: Frontend (Client)
 *  - BE: Backend
 *  - AUTH: Authenticator
 */
export default function PasskeyFlowSvg({
  activeStep,
  onStepClick,
  interactive = false,
}) {
  // ステップノードクリック時のハンドラ（interactiveがtrueの場合のみ有効）
  const handleStepClick = interactive
    ? (e) => {
        const stepId = parseInt(e.currentTarget.dataset.step, 10);
        if (stepId && onStepClick) {
          const stepData = PASSKEY_STEPS[stepId];
          if (stepData) {
            onStepClick({ ...stepData, flowType: 'passkey' });
          }
        }
      }
    : undefined;
  // X座標（各participantの中心）
  const X = {
    USER: 70, // User
    FE: 300, // Frontend (Client)
    BE: 730, // Backend
    AUTH: 960, // Authenticator
  };

  // ノードの幅・高さ
  const NODE_WIDTH = 140;
  const NODE_HEIGHT = 70;

  // Y座標のベース
  const Y_TOP = 0;
  const Y_BOTTOM = 1110;
  const Y_LIFELINE_START = 70;

  // ステップのY座標
  const stepY = {
    1: 130, // User → FE: Click Login
    2: 180, // FE → BE: Authentication Begin
    3: 230, // BE → FE: Challenge Options
    4: 280, // FE → AUTH: credentials.get()
    5: 330, // AUTH → User: Biometric / PIN Request
    6: 380, // User → AUTH: Authentication OK
    7: 430, // AUTH → FE: Assertion
    8: 480, // FE → BE: Authentication Complete
    9: 530, // BE internal: Verify Challenge
    10: 575, // BE internal: Verify Signature
    11: 620, // BE internal: Check signCount
    12: 680, // BE → FE: Session Token
    13: 730, // FE → User: Authenticated
    14: 1000, // User → FE: Login Complete
  };

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
            x={X.USER - NODE_WIDTH / 2}
            y={Y_TOP}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.USER}
            y={Y_TOP + 37}
          >
            User
          </text>
        </g>

        {/* Frontend (Client) (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.FE - NODE_WIDTH / 2}
            y={Y_TOP}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_TOP + 25}
          >
            Frontend
          </text>
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_TOP + 45}
          >
            (Client)
          </text>
        </g>

        {/* Backend (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.BE - NODE_WIDTH / 2}
            y={Y_TOP}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.BE}
            y={Y_TOP + 37}
          >
            Backend
          </text>
        </g>

        {/* Authenticator (top) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.AUTH - NODE_WIDTH / 2}
            y={Y_TOP}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.AUTH}
            y={Y_TOP + 37}
          >
            Authenticator
          </text>
        </g>

        {/* User (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.USER - NODE_WIDTH / 2}
            y={Y_BOTTOM}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.USER}
            y={Y_BOTTOM + 37}
          >
            User
          </text>
        </g>

        {/* Frontend (Client) (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.FE - NODE_WIDTH / 2}
            y={Y_BOTTOM}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_BOTTOM + 25}
          >
            Frontend
          </text>
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_BOTTOM + 45}
          >
            (Client)
          </text>
        </g>

        {/* Backend (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.BE - NODE_WIDTH / 2}
            y={Y_BOTTOM}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.BE}
            y={Y_BOTTOM + 37}
          >
            Backend
          </text>
        </g>

        {/* Authenticator (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.AUTH - NODE_WIDTH / 2}
            y={Y_BOTTOM}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x={X.AUTH}
            y={Y_BOTTOM + 37}
          >
            Authenticator
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Lifeline（縦線） */}
        {/* ====================================================================== */}
        <line
          x1={X.USER}
          y1={Y_LIFELINE_START}
          x2={X.USER}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.FE}
          y1={Y_LIFELINE_START}
          x2={X.FE}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.BE}
          y1={Y_LIFELINE_START}
          x2={X.BE}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.AUTH}
          y1={Y_LIFELINE_START}
          x2={X.AUTH}
          y2={Y_BOTTOM}
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
            x1={X.USER + 15}
            y1={stepY[1]}
            x2={X.FE - 10}
            y2={stepY[1]}
          />
          <text
            x={(X.USER + X.FE) / 2 - 8}
            y={stepY[1] - 15}
            className={styles.arrowLabel}
          >
            Click Login
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE},${stepY[1]} ${X.FE - 23},${stepY[1] + 5} ${
              X.FE - 20
            },${stepY[1]} ${X.FE - 23},${stepY[1] - 5}`}
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
            x1={X.FE + 15}
            y1={stepY[2]}
            x2={X.BE - 20}
            y2={stepY[2]}
          />
          <text
            x={(X.FE + X.BE) / 2 - 28}
            y={stepY[2] - 15}
            className={styles.arrowLabel}
          >
            Authentication Begin
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.BE},${stepY[2]} ${X.BE - 20},${stepY[2] + 5} ${
              X.BE - 17
            },${stepY[2]} ${X.BE - 20},${stepY[2] - 5}`}
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
            x1={X.BE - 15}
            y1={stepY[3]}
            x2={X.FE + 15}
            y2={stepY[3]}
          />
          <text
            x={(X.FE + X.BE) / 2 - 28}
            y={stepY[3] - 15}
            className={styles.arrowLabel}
          >
            Challenge Options
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE},${stepY[3]} ${X.FE + 20},${stepY[3] - 5} ${
              X.FE + 17
            },${stepY[3]} ${X.FE + 20},${stepY[3] + 5}`}
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
            x1={X.FE + 15}
            y1={stepY[4]}
            x2={X.AUTH - 10}
            y2={stepY[4]}
          />
          <text
            x={(X.FE + X.AUTH) / 2 - 17}
            y={stepY[4] - 15}
            className={styles.arrowLabel}
          >
            credentials.get()
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.AUTH},${stepY[4]} ${X.AUTH - 20},${stepY[4] + 5} ${
              X.AUTH - 17
            },${stepY[4]} ${X.AUTH - 20},${stepY[4] - 5}`}
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
            x1={X.AUTH - 15}
            y1={stepY[5]}
            x2={X.USER + 15}
            y2={stepY[5]}
          />
          <text
            x={(X.USER + X.AUTH) / 2 - 12}
            y={stepY[5] - 15}
            className={styles.arrowLabel}
          >
            Biometric / PIN Request
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.USER},${stepY[5]} ${X.USER + 20},${stepY[5] - 5} ${
              X.USER + 17
            },${stepY[5]} ${X.USER + 20},${stepY[5] + 5}`}
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
            x1={X.USER + 15}
            y1={stepY[6]}
            x2={X.AUTH - 10}
            y2={stepY[6]}
          />
          <text
            x={(X.USER + X.AUTH) / 2 - 12}
            y={stepY[6] - 15}
            className={styles.arrowLabel}
          >
            Authentication OK
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.AUTH},${stepY[6]} ${X.AUTH - 20},${stepY[6] + 5} ${
              X.AUTH - 17
            },${stepY[6]} ${X.AUTH - 20},${stepY[6] - 5}`}
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
            x1={X.AUTH - 15}
            y1={stepY[7]}
            x2={X.FE + 15}
            y2={stepY[7]}
          />
          <text
            x={(X.FE + X.AUTH) / 2 - 17}
            y={stepY[7] - 15}
            className={styles.arrowLabel}
          >
            Assertion
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE},${stepY[7]} ${X.FE + 20},${stepY[7] - 5} ${
              X.FE + 18
            },${stepY[7]} ${X.FE + 20},${stepY[7] + 5}`}
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
            x1={X.FE + 15}
            y1={stepY[8]}
            x2={X.BE - 10}
            y2={stepY[8]}
          />
          <text
            x={(X.FE + X.BE) / 2 - 28}
            y={stepY[8] - 15}
            className={styles.arrowLabel}
          >
            Authentication Complete
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.BE},${stepY[8]} ${X.BE - 25},${stepY[8] + 5} ${
              X.BE - 20
            },${stepY[8]} ${X.BE - 25},${stepY[8] - 5}`}
          />
        </g>

        {/* Step 9: Backend → Backend (challenge 検証) */}
        {/* 上段：右向きの線（Backend → 内部処理ボックス） */}
        <g
          data-step-arrow='9'
          className={`${styles.arrowGroup} ${
            activeStep === 9 ? styles.arrowLoopUp : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 50}
            y1={stepY[9] - 15}
            x2={X.BE}
            y2={stepY[9] - 15}
          />

          {/* 内部処理ボックス */}
          <rect
            className={styles.nodeRect}
            x={X.BE - 75}
            y={stepY[9] - 18}
            width='25'
            height='36'
            rx='4'
            ry='4'
          />

          <text
            x={X.BE + 70}
            y={stepY[9]}
            className={styles.arrowLabel}
          >
            Verify Challenge
          </text>
        </g>

        {/* 下段：左向きの矢印（内部処理ボックス → Backend） */}
        <g
          data-step-arrow='9'
          className={`${styles.arrowGroup} ${
            activeStep === 9 ? styles.arrowLoopDown : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 45}
            y1={stepY[9] + 15}
            x2={X.BE}
            y2={stepY[9] + 15}
          />
          <polygon
            className={styles.arrowHead}
            points={`${X.BE - 51},${stepY[9] + 15} ${X.BE - 42},${
              stepY[9] + 19
            } ${X.BE - 44},${stepY[9] + 15} ${X.BE - 42},${stepY[9] + 11}`}
          />
        </g>

        {/* Step 10: Backend → Backend (publicKey 検証) */}
        {/* 上段：右向きの線（Backend → 内部処理ボックス） */}
        <g
          data-step-arrow='10'
          className={`${styles.arrowGroup} ${
            activeStep === 10 ? styles.arrowLoopUp : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 50}
            y1={stepY[10] - 15}
            x2={X.BE}
            y2={stepY[10] - 15}
          />

          {/* 内部処理ボックス */}
          <rect
            className={styles.nodeRect}
            x={X.BE - 75}
            y={stepY[10] - 18}
            width='25'
            height='36'
            rx='4'
            ry='4'
          />

          <text
            x={X.BE + 70}
            y={stepY[10]}
            className={styles.arrowLabel}
          >
            Verify Signature
          </text>
        </g>

        {/* 下段：左向きの矢印（内部処理ボックス → Backend） */}
        <g
          data-step-arrow='10'
          className={`${styles.arrowGroup} ${
            activeStep === 10 ? styles.arrowLoopDown : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 45}
            y1={stepY[10] + 15}
            x2={X.BE}
            y2={stepY[10] + 15}
          />
          <polygon
            className={styles.arrowHead}
            points={`${X.BE - 51},${stepY[10] + 15} ${X.BE - 42},${
              stepY[10] + 19
            } ${X.BE - 44},${stepY[10] + 15} ${X.BE - 42},${stepY[10] + 11}`}
          />
        </g>

        {/* Step 11: Backend → Backend (signCount チェック) */}
        {/* 上段：右向きの線（Backend → 内部処理ボックス） */}
        <g
          data-step-arrow='11'
          className={`${styles.arrowGroup} ${
            activeStep === 11 ? styles.arrowLoopUp : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 50}
            y1={stepY[11] - 15}
            x2={X.BE}
            y2={stepY[11] - 15}
          />

          {/* 内部処理ボックス */}
          <rect
            className={styles.nodeRect}
            x={X.BE - 75}
            y={stepY[11] - 18}
            width='25'
            height='36'
            rx='4'
            ry='4'
          />

          <text
            x={X.BE + 70}
            y={stepY[11]}
            className={styles.arrowLabel}
          >
            Check signCount
          </text>
        </g>

        {/* 下段：左向きの矢印（内部処理ボックス → Backend） */}
        <g
          data-step-arrow='11'
          className={`${styles.arrowGroup} ${
            activeStep === 11 ? styles.arrowLoopDown : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.BE - 45}
            y1={stepY[11] + 15}
            x2={X.BE}
            y2={stepY[11] + 15}
          />
          <polygon
            className={styles.arrowHead}
            points={`${X.BE - 50},${stepY[11] + 15} ${X.BE - 41},${
              stepY[11] + 19
            } ${X.BE - 43},${stepY[11] + 15} ${X.BE - 41},${stepY[11] + 11}`}
          />
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
            x1={X.BE - 15}
            y1={stepY[12]}
            x2={X.FE + 15}
            y2={stepY[12]}
          />
          <text
            x={(X.FE + X.BE) / 2 - 28}
            y={stepY[12] - 15}
            className={styles.arrowLabel}
          >
            Session Token
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE},${stepY[12]} ${X.FE + 20},${stepY[12] - 5} ${
              X.FE + 17
            },${stepY[12]} ${X.FE + 20},${stepY[12] + 5}`}
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
            x1={X.FE - 15}
            y1={stepY[13]}
            x2={X.USER + 15}
            y2={stepY[13]}
          />
          <text
            x={(X.USER + X.FE) / 2 - 8}
            y={stepY[13] - 15}
            className={styles.arrowLabel}
          >
            Authenticated
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.USER},${stepY[13]} ${X.USER + 20},${stepY[13] - 5} ${
              X.USER + 17
            },${stepY[13]} ${X.USER + 20},${stepY[13] + 5}`}
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
            x1={X.USER + 15}
            y1={stepY[14]}
            x2={X.FE - 15}
            y2={stepY[14]}
          />
          <text
            x={(X.USER + X.FE) / 2 - 8}
            y={stepY[14] - 15}
            className={styles.arrowLabel}
          >
            Login Complete
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE},${stepY[14]} ${X.FE - 20},${stepY[14] + 5} ${
              X.FE - 15
            },${stepY[14]} ${X.FE - 20},${stepY[14] - 5}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* ステップノード（番号サークル） */}
        {/* ====================================================================== */}

        {/* Step 1 */}
        <g
          data-step='1'
          data-step-node='1'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 1 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.USER}
            cy={stepY[1]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.USER}
            y={stepY[1]}
          >
            1
          </text>
        </g>

        {/* Step 2 */}
        <g
          data-step='2'
          data-step-node='2'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 2 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.FE}
            cy={stepY[2]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.FE}
            y={stepY[2]}
          >
            2
          </text>
        </g>

        {/* Step 3 */}
        <g
          data-step='3'
          data-step-node='3'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 3 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.BE}
            cy={stepY[3]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.BE}
            y={stepY[3]}
          >
            3
          </text>
        </g>

        {/* Step 4 */}
        <g
          data-step='4'
          data-step-node='4'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 4 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.FE}
            cy={stepY[4]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.FE}
            y={stepY[4]}
          >
            4
          </text>
        </g>

        {/* Step 5 */}
        <g
          data-step='5'
          data-step-node='5'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 5 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.AUTH}
            cy={stepY[5]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.AUTH}
            y={stepY[5]}
          >
            5
          </text>
        </g>

        {/* Step 6 */}
        <g
          data-step='6'
          data-step-node='6'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 6 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.USER}
            cy={stepY[6]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.USER}
            y={stepY[6]}
          >
            6
          </text>
        </g>

        {/* Step 7 */}
        <g
          data-step='7'
          data-step-node='7'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 7 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.AUTH}
            cy={stepY[7]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.AUTH}
            y={stepY[7]}
          >
            7
          </text>
        </g>

        {/* Step 8 */}
        <g
          data-step='8'
          data-step-node='8'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 8 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.FE}
            cy={stepY[8]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.FE}
            y={stepY[8]}
          >
            8
          </text>
        </g>

        {/* Step 9 */}
        <g
          data-step='9'
          data-step-node='9'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 9 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.BE}
            cy={stepY[9]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.BE}
            y={stepY[9]}
          >
            9
          </text>
        </g>

        {/* Step 10 */}
        <g
          data-step='10'
          data-step-node='10'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 10 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.BE}
            cy={stepY[10]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.BE}
            y={stepY[10]}
          >
            10
          </text>
        </g>

        {/* Step 11 */}
        <g
          data-step='11'
          data-step-node='11'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 11 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.BE}
            cy={stepY[11]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.BE}
            y={stepY[11]}
          >
            11
          </text>
        </g>

        {/* Step 12 */}
        <g
          data-step='12'
          data-step-node='12'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 12 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.BE}
            cy={stepY[12]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.BE}
            y={stepY[12]}
          >
            12
          </text>
        </g>

        {/* Step 13 */}
        <g
          data-step='13'
          data-step-node='13'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 13 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.FE}
            cy={stepY[13]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.FE}
            y={stepY[13]}
          >
            13
          </text>
        </g>

        {/* Step 14 */}
        <g
          data-step='14'
          data-step-node='14'
          className={`${styles.stepGroup} ${
            interactive ? styles.clickable : ''
          } ${activeStep === 14 ? styles.stepGroupActive : ''}`}
          {...(interactive && {
            onClick: handleStepClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => e.key === 'Enter' && handleStepClick(e),
          })}
        >
          <circle
            className={styles.stepCircle}
            cx={X.USER}
            cy={stepY[14]}
            r='15'
          />
          <text
            className={styles.stepLabel}
            x={X.USER}
            y={stepY[14]}
          >
            14
          </text>
        </g>
      </g>
    </svg>
  );
}
