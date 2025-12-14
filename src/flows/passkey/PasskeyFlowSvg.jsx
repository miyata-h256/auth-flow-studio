// src/flows/passkey/PasskeyFlowSvg.jsx
import styles from './styles/PasskeyFlowSvg.module.css';

/**
 * Passkey フロー図（簡略SVG版）
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
        {/* === 上段のノード群 ================================================== */}
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

        {/* === 下段のノード群 ================================================== */}
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

        {/* === Lifeline 的な縦線 ================================================ */}
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
        {/* ステップ矢印（Passkey登録フロー）                                     */}
        {/* ====================================================================== */}

        {/* Step 1: User → Frontend (Click Register) */}
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
            Click Register
          </text>
          <polygon
            className={styles.arrowHead}
            points='280,130 260,135 263,130 260,125'
          />
        </g>

        {/* Step 2: Frontend → Backend (Registration Request) */}
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
            Registration Request
          </text>
          <polygon
            className={styles.arrowHead}
            points='670,180 650,185 653,180 650,175'
          />
        </g>

        {/* Step 3: Backend → Authenticator (Create Passkey) */}
        <g
          data-step-arrow='3'
          className={`${styles.arrowGroup} ${
            activeStep === 3 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='745'
            y1='230'
            x2='920'
            y2='230'
          />
          <text
            x='832'
            y='215'
            className={styles.arrowLabel}
          >
            Create Passkey
          </text>
          <polygon
            className={styles.arrowHead}
            points='930,230 910,235 913,230 910,225'
          />
        </g>

        {/* Step 4: Authenticator → Backend (Public Key) */}
        <g
          data-step-arrow='4'
          className={`${styles.arrowGroup} ${
            activeStep === 4 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='920'
            y1='280'
            x2='745'
            y2='280'
          />
          <text
            x='832'
            y='265'
            className={styles.arrowLabel}
          >
            Public Key
          </text>
          <polygon
            className={styles.arrowHead}
            points='735,280 755,275 752,280 755,285'
          />
        </g>

        {/* Step 5: Backend → Frontend (Registration Complete) */}
        <g
          data-step-arrow='5'
          className={`${styles.arrowGroup} ${
            activeStep === 5 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='660'
            y1='330'
            x2='315'
            y2='330'
          />
          <text
            x='487'
            y='315'
            className={styles.arrowLabel}
          >
            Registration Complete
          </text>
          <polygon
            className={styles.arrowHead}
            points='305,330 325,325 322,330 325,335'
          />
        </g>

        {/* Step 6: Frontend → User (Show Login Option) */}
        <g
          data-step-arrow='6'
          className={`${styles.arrowGroup} ${
            activeStep === 6 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='270'
            y1='380'
            x2='85'
            y2='380'
          />
          <text
            x='177'
            y='365'
            className={styles.arrowLabel}
          >
            Show Login Option
          </text>
          <polygon
            className={styles.arrowHead}
            points='75,380 95,375 92,380 95,385'
          />
        </g>

        {/* Step 7: User → Frontend (Authenticate with Passkey) */}
        <g
          data-step-arrow='7'
          className={`${styles.arrowGroup} ${
            activeStep === 7 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='580'
            x2='270'
            y2='580'
          />
          <text
            x='177'
            y='565'
            className={styles.arrowLabel}
          >
            Authenticate
          </text>
          <polygon
            className={styles.arrowHead}
            points='280,580 260,585 263,580 260,575'
          />
        </g>

        {/* Step 8: Frontend → Backend (Verify Signature) */}
        <g
          data-step-arrow='8'
          className={`${styles.arrowGroup} ${
            activeStep === 8 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='315'
            y1='630'
            x2='660'
            y2='630'
          />
          <text
            x='487'
            y='615'
            className={styles.arrowLabel}
          >
            Verify Signature
          </text>
          <polygon
            className={styles.arrowHead}
            points='670,630 650,635 653,630 650,625'
          />
        </g>

        {/* ====================================================================== */}
        {/* ステップノード（番号サークル）                                         */}
        {/* ====================================================================== */}

        {/* Step 1 circle */}
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

        {/* Step 2 circle */}
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

        {/* Step 3 circle */}
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

        {/* Step 4 circle */}
        <g
          data-step-node='4'
          className={`${styles.stepGroup} ${
            activeStep === 4 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='960'
            cy='280'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='960'
            y='280'
          >
            4
          </text>
        </g>

        {/* Step 5 circle */}
        <g
          data-step-node='5'
          className={`${styles.stepGroup} ${
            activeStep === 5 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='330'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='330'
          >
            5
          </text>
        </g>

        {/* Step 6 circle */}
        <g
          data-step-node='6'
          className={`${styles.stepGroup} ${
            activeStep === 6 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='380'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='380'
          >
            6
          </text>
        </g>

        {/* Step 7 circle */}
        <g
          data-step-node='7'
          className={`${styles.stepGroup} ${
            activeStep === 7 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='70'
            cy='580'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70'
            y='580'
          >
            7
          </text>
        </g>

        {/* Step 8 circle */}
        <g
          data-step-node='8'
          className={`${styles.stepGroup} ${
            activeStep === 8 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='630'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='630'
          >
            8
          </text>
        </g>

        {/* Step 9 circle */}
        <g
          data-step-node='9'
          className={`${styles.stepGroup} ${
            activeStep === 9 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='655'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='655'
          >
            9
          </text>
        </g>

        {/* Step 10 circle */}
        <g
          data-step-node='10'
          className={`${styles.stepGroup} ${
            activeStep === 10 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='725'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='725'
          >
            10
          </text>
        </g>

        {/* Step 11 circle */}
        <g
          data-step-node='11'
          className={`${styles.stepGroup} ${
            activeStep === 11 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='815'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='815'
          >
            11
          </text>
        </g>

        {/* Step 12 circle */}
        <g
          data-step-node='12'
          className={`${styles.stepGroup} ${
            activeStep === 12 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='905'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='905'
          >
            12
          </text>
        </g>

        {/* Step 13 circle */}
        <g
          data-step-node='13'
          className={`${styles.stepGroup} ${
            activeStep === 13 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='730'
            cy='1005'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='730'
            y='1005'
          >
            13
          </text>
        </g>

        {/* Step 14 circle */}
        <g
          data-step-node='14'
          className={`${styles.stepGroup} ${
            activeStep === 14 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx='300'
            cy='1065'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='300'
            y='1065'
          >
            14
          </text>
        </g>
      </g>
    </svg>
  );
}
