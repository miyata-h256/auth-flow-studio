// src/components/AuthFlowSvg.jsx
import styles from './styles/OidcFlowSvg.module.css';

/**
 * OIDC フロー図（簡略SVG版）
 *
 * props:
 *  - activeStep: 1〜10（それ以外なら全部非アクティブ）
 */
export default function OidcFlowSvg({ activeStep }) {
  return (
    <svg
      className={styles.svgRoot}
      viewBox='0 0 950 630'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='translate(120, 0)'>
        {/* === 上段のノード群 ================================================== */}
        {/* User */}
        <g>
          <rect
            className={styles.nodeRect}
            x='0.5'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='70.5'
            y='37'
          >
            User
          </text>
        </g>

        {/* Client */}
        <g>
          <rect
            className={styles.nodeRect}
            x='258'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='328'
            y='37'
          >
            Client
          </text>
        </g>

        {/* Auth Server */}
        <g>
          <rect
            className={styles.nodeRect}
            x='565'
            y='0'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='635'
            y='32'
          >
            Authentication
          </text>
          <text
            className={styles.nodeLabel}
            x='635'
            y='48'
          >
            Server
          </text>
        </g>

        {/* === 下段のノード群（元SVGに合わせて） =============================== */}
        {/* User (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='0.5'
            y='550'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='70.5'
            y='587'
          >
            User
          </text>
        </g>

        {/* Client (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='258'
            y='550'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='328'
            y='587'
          >
            Client
          </text>
        </g>

        {/* Auth Server (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x='565'
            y='550'
            width='140'
            height='70'
            rx='10.5'
            ry='10.5'
          />
          <text
            className={styles.nodeLabel}
            x='635'
            y='582'
          >
            Authentication
          </text>
          <text
            className={styles.nodeLabel}
            x='635'
            y='598'
          >
            Server
          </text>
        </g>

        {/* === Lifeline 的な縦線（省略してもいいけど雰囲気用） ================= */}
        <line
          x1='70.5'
          y1='70'
          x2='70.5'
          y2='550'
          className={styles.lifeline}
        />
        <line
          x1='328'
          y1='70'
          x2='328'
          y2='550'
          className={styles.lifeline}
        />
        <line
          x1='635'
          y1='70'
          x2='635'
          y2='550'
          className={styles.lifeline}
        />

        {/* ====================================================================== */}
        {/* 1〜10 の矢印（元SVGの座標をベースにした簡略版）                      */}
        {/* ====================================================================== */}

        {/* Step 1: User → Client (Click oidc-login link) */}
        <g
          data-step-arrow='1'
          className={`${styles.arrowGroup} ${
            activeStep === 1 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='125'
            x2='320'
            y2='125'
          />
          <text
            x='199'
            y='115'
            className={styles.arrowLabel}
          >
            Click oidc-login link
          </text>
          <polygon
            className={styles.arrowHead}
            points='330,125 304,129 306,125 304,121'
          />
        </g>

        {/* Step 2: Client → Auth Server (Authorization Code Request) */}
        <g
          data-step-arrow='2'
          className={`${styles.arrowGroup} ${
            activeStep === 2 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='343'
            y1='165'
            x2='625'
            y2='165'
          />
          <text
            x='484'
            y='155'
            className={styles.arrowLabel}
          >
            Authorization Code Request
          </text>
          <polygon
            className={styles.arrowHead}
            points='635,165 611,169 613,165 611,161'
          />
        </g>

        {/* Step 3: Auth Server → User (Redirect to login page) */}
        <g
          data-step-arrow='3'
          className={`${styles.arrowGroup} ${
            activeStep === 3 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='620'
            y1='215'
            x2='95'
            y2='215'
          />
          <text
            x='352'
            y='205'
            className={styles.arrowLabel}
          >
            Redirect to login page
          </text>
          <polygon
            className={styles.arrowHead}
            points='70,215 94,211 92,215 94,219'
          />
        </g>

        {/* Step 4: User → Auth Server (Authentication and Consent) */}
        <g
          data-step-arrow='4'
          className={`${styles.arrowGroup} ${
            activeStep === 4 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='85'
            y1='265'
            x2='620'
            y2='265'
          />
          <text
            x='352'
            y='255'
            className={styles.arrowLabel}
          >
            Authentication and Consent
          </text>
          <polygon
            className={styles.arrowHead}
            points='635,265 611,269 613,265 611,261'
          />
        </g>

        {/* Step 5: Auth Server → Client (Authorization Code) */}
        <g
          data-step-arrow='5'
          className={`${styles.arrowGroup} ${
            activeStep === 5 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='620'
            y1='315'
            x2='343'
            y2='315'
          />
          <text
            x='484'
            y='305'
            className={styles.arrowLabel}
          >
            Authorization Code
          </text>
          <polygon
            className={styles.arrowHead}
            points='330,315 352,311 350,315 352,319'
          />
        </g>

        {/* Step 6: Client → Auth Server (Code + Client Credentials) */}
        <g
          data-step-arrow='6'
          className={`${styles.arrowGroup} ${
            activeStep === 6 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='343'
            y1='355'
            x2='620'
            y2='355'
          />
          <text
            x='484'
            y='345'
            className={styles.arrowLabel}
          >
            Authorizatioon Code for Application Credentials
          </text>
          <polygon
            className={styles.arrowHead}
            points='635,355 611,359 613,355 611,351'
          />
        </g>

        {/* Step 7: Auth Server 内の検証 (Validate Code + Credentials) */}
        <g
          data-step-arrow='7'
          className={`${styles.arrowGroup} ${
            activeStep === 7 ? styles.arrowLoopUp : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='580'
            y1='388'
            x2='635'
            y2='388'
          />

          <rect
            className={styles.nodeRect}
            x='547'
            y='380'
            width='30'
            height='50'
            rx='5.5'
            ry='5.5'
          />

          <text
            className={styles.arrowLabel}
            x='450'
            y='390'
          >
            <tspan
              x='450'
              dy='0'
            >
              Validatet Authorizatioon Code
            </tspan>
            <tspan
              x='450'
              dy='16'
            >
              +
            </tspan>
            <tspan
              x='450'
              dy='16'
            >
              Client Credentials
            </tspan>
          </text>
        </g>

        {/* 下段：左向きのループ */}
        <g
          data-step-arrow='7'
          className={`${styles.arrowGroup} ${
            activeStep === 7 ? styles.arrowLoopDown : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='585'
            y1='423'
            x2='635'
            y2='423'
          />
          <polygon
            className={styles.arrowHead}
            points='580,423 589,427 587,423 589,419'
          />
        </g>

        {/* Step 8: Auth Server → Client (ID Token & Access Token) */}
        <g
          data-step-arrow='8'
          className={`${styles.arrowGroup} ${
            activeStep === 8 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1='620'
            y1='485'
            x2='343'
            y2='485'
          />
          <text
            x='484'
            y='475'
            className={styles.arrowLabel}
          >
            ID Token & Access Token
          </text>
          <polygon
            className={styles.arrowHead}
            points='330,485 352,481 350,485 352,489'
          />
        </g>

        {/* ====================================================================== */}
        {/* 1〜8 の番号ノード                                                      */}
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
            cx='70.5'
            cy='125'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70.5'
            y='125'
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
            cx='328'
            cy='165'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='328'
            y='165'
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
            cx='635'
            cy='215'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='635'
            y='215'
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
            cx='70.5'
            cy='265'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='70.5'
            y='265'
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
            cx='635'
            cy='315'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='635'
            y='315'
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
            cx='328'
            cy='355'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='328'
            y='355'
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
            cx='635'
            cy='405'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='635'
            y='405'
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
            cx='635'
            cy='485'
            r='15'
          />
          <text
            className={styles.stepLabel}
            x='635'
            y='485'
          >
            8
          </text>
        </g>
      </g>
    </svg>
  );
}
