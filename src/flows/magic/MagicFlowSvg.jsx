// src/flows/magic/MagicFlowSvg.jsx
import styles from './styles/MagicFlowSvg.module.css';

/**
 * Magic Link Login フロー図（SVG版）
 *
 * props:
 *  - activeStep: 1〜16（それ以外なら全部非アクティブ）
 *
 * Participants (7):
 *  - U: User (Browser)
 *  - FE: Frontend (Web App)
 *  - API: App Backend / Auth API
 *  - DB: User DB
 *  - MAIL: Email Service
 *  - S: Magic Link (Token Store)
 *  - APP: App (Session/JWT Issuer)
 */
export default function MagicFlowSvg({ activeStep }) {
  // X座標（各participantの中心）
  const X = {
    U: 140, // User
    FE: 260, // Frontend
    API: 400, // API
    DB: 570, // User DB
    MAIL: 680, // Email Service
    S: 820, // Token Store
  };

  // Y座標のベース
  const Y_TOP = 0;
  const Y_BOTTOM = 780;
  const Y_LIFELINE_START = 70;

  // ステップのY座標
  const stepY = {
    1: 120, // User → FE: メール入力 & 送信
    2: 155, // FE → API: POST /auth/magic-link/request
    3: 190, // API → DB: email でユーザー検索/作成
    4: 225, // DB → API: userId / user status
    5: 280, // API → S: create magic_token
    6: 315, // S → API: tokenId
    7: 370, // API → MAIL: Send email
    8: 405, // MAIL → API: accepted
    9: 440, // API → FE: 200 OK
    10: 475, // FE → U: "メールを確認してね"
    11: 530, // U → MAIL: メール閲覧
    12: 565, // U → FE: GET /magic/callback
    13: 610, // FE → API: POST /auth/magic-link/verify
    14: 645, // API → S: lookup rid
    15: 680, // S → API: token record
    16: 730, // API internal: hash検証
  };

  return (
    <svg
      className={styles.svgRoot}
      viewBox='0 0 980 820'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='translate(10, 0)'>
        {/* === 上段のノード群 ================================================== */}

        {/* User (Browser) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.U - 55}
            y={Y_TOP}
            width='110'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.U}
            y={Y_TOP + 25}
          >
            User
          </text>
          <text
            className={styles.nodeLabelSmall}
            x={X.U}
            y={Y_TOP + 42}
          >
            (Browser)
          </text>
        </g>

        {/* Frontend */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.FE - 55}
            y={Y_TOP}
            width='110'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_TOP + 25}
          >
            Frontend
          </text>
          <text
            className={styles.nodeLabelSmall}
            x={X.FE}
            y={Y_TOP + 42}
          >
            (Web App)
          </text>
        </g>

        {/* API */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.API - 55}
            y={Y_TOP}
            width='110'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.API}
            y={Y_TOP + 25}
          >
            Auth API
          </text>
          <text
            className={styles.nodeLabelSmall}
            x={X.API}
            y={Y_TOP + 42}
          >
            (Backend)
          </text>
        </g>

        {/* User DB */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.DB - 45}
            y={Y_TOP}
            width='90'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.DB}
            y={Y_TOP + 32}
          >
            User DB
          </text>
        </g>

        {/* Email Service */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.MAIL - 50}
            y={Y_TOP}
            width='100'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.MAIL}
            y={Y_TOP + 25}
          >
            Email
          </text>
          <text
            className={styles.nodeLabelSmall}
            x={X.MAIL}
            y={Y_TOP + 42}
          >
            (SMTP/SES)
          </text>
        </g>

        {/* Token Store */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.S - 50}
            y={Y_TOP}
            width='100'
            height='60'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.S}
            y={Y_TOP + 25}
          >
            Token Store
          </text>
          <text
            className={styles.nodeLabelSmall}
            x={X.S}
            y={Y_TOP + 42}
          >
            (DB/Redis)
          </text>
        </g>

        {/* === 下段のノード群 ================================================== */}

        {/* User (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.U - 55}
            y={Y_BOTTOM}
            width='110'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.U}
            y={Y_BOTTOM + 20}
          >
            User
          </text>
        </g>

        {/* Frontend (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.FE - 55}
            y={Y_BOTTOM}
            width='110'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.FE}
            y={Y_BOTTOM + 20}
          >
            Frontend
          </text>
        </g>

        {/* API (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.API - 55}
            y={Y_BOTTOM}
            width='110'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.API}
            y={Y_BOTTOM + 20}
          >
            Auth API
          </text>
        </g>

        {/* DB (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.DB - 45}
            y={Y_BOTTOM}
            width='90'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.DB}
            y={Y_BOTTOM + 20}
          >
            User DB
          </text>
        </g>

        {/* MAIL (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.MAIL - 50}
            y={Y_BOTTOM}
            width='100'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.MAIL}
            y={Y_BOTTOM + 20}
          >
            Email
          </text>
        </g>

        {/* Token Store (bottom) */}
        <g>
          <rect
            className={styles.nodeRect}
            x={X.S - 50}
            y={Y_BOTTOM}
            width='100'
            height='35'
            rx='8'
            ry='8'
          />
          <text
            className={styles.nodeLabel}
            x={X.S}
            y={Y_BOTTOM + 20}
          >
            Token Store
          </text>
        </g>

        {/* === Lifeline（縦線） =============================================== */}
        <line
          x1={X.U}
          y1={Y_LIFELINE_START}
          x2={X.U}
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
          x1={X.API}
          y1={Y_LIFELINE_START}
          x2={X.API}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.DB}
          y1={Y_LIFELINE_START}
          x2={X.DB}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.MAIL}
          y1={Y_LIFELINE_START}
          x2={X.MAIL}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />
        <line
          x1={X.S}
          y1={Y_LIFELINE_START}
          x2={X.S}
          y2={Y_BOTTOM}
          className={styles.lifeline}
        />

        {/* === Note: ① メールアドレス入力 ===================================== */}
        <g>
          <rect
            className={styles.noteRect}
            x={X.U - 60}
            y='85'
            width='180'
            height='20'
            rx='3'
            ry='3'
          />
          <text
            className={styles.noteLabel}
            x={X.U + 30}
            y='95'
          >
            ① メールアドレス入力
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Step 1: User → FE (メール入力 & 送信ボタン)                           */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='1'
          className={`${styles.arrowGroup} ${
            activeStep === 1 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.U + 15}
            y1={stepY[1]}
            x2={X.FE - 10}
            y2={stepY[1]}
          />
          <text
            x={(X.U + X.FE) / 2}
            y={stepY[1] - 10}
            className={styles.arrowLabel}
          >
            メール入力 & 送信
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE - 2},${stepY[1]} ${X.FE - 14},${stepY[1] - 4} ${
              X.FE - 12
            },${stepY[1]} ${X.FE - 14},${stepY[1] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 2: FE → API (POST /auth/magic-link/request)                      */}
        {/* ====================================================================== */}
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
            x2={X.API - 10}
            y2={stepY[2]}
          />
          <text
            x={(X.FE + X.API) / 2}
            y={stepY[2] - 10}
            className={styles.arrowLabel}
          >
            POST /magic-link/request
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API - 2},${stepY[2]} ${X.API - 14},${stepY[2] - 4} ${
              X.API - 12
            },${stepY[2]} ${X.API - 14},${stepY[2] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 3: API → DB (email でユーザー検索/作成)                          */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='3'
          className={`${styles.arrowGroup} ${
            activeStep === 3 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API + 15}
            y1={stepY[3]}
            x2={X.DB - 10}
            y2={stepY[3]}
          />
          <text
            x={(X.API + X.DB) / 2}
            y={stepY[3] - 10}
            className={styles.arrowLabel}
          >
            ユーザー検索/作成
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.DB - 2},${stepY[3]} ${X.DB - 14},${stepY[3] - 4} ${
              X.DB - 12
            },${stepY[3]} ${X.DB - 14},${stepY[3] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 4: DB → API (userId / user status)                               */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='4'
          className={`${styles.arrowGroup} ${
            activeStep === 4 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.DB - 15}
            y1={stepY[4]}
            x2={X.API + 10}
            y2={stepY[4]}
          />
          <text
            x={(X.API + X.DB) / 2}
            y={stepY[4] - 10}
            className={styles.arrowLabel}
          >
            userId / user status
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API + 2},${stepY[4]} ${X.API + 14},${stepY[4] - 4} ${
              X.API + 12
            },${stepY[4]} ${X.API + 14},${stepY[4] + 4}`}
          />
        </g>

        {/* === Note: ② ワンタイムトークン発行 ================================== */}
        <g>
          <rect
            className={styles.noteRect}
            x={X.API - 20}
            y='250'
            width='200'
            height='20'
            rx='3'
            ry='3'
          />
          <text
            className={styles.noteLabel}
            x={X.API + 80}
            y='260'
          >
            ② ワンタイムトークン発行（短命）
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Step 5: API → S (create magic_token)                                  */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='5'
          className={`${styles.arrowGroup} ${
            activeStep === 5 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API + 15}
            y1={stepY[5]}
            x2={X.S - 10}
            y2={stepY[5]}
          />
          <text
            x={(X.API + X.S) / 2}
            y={stepY[5] - 10}
            className={styles.arrowLabel}
          >
            create magic_token (hash保存)
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.S - 2},${stepY[5]} ${X.S - 14},${stepY[5] - 4} ${
              X.S - 12
            },${stepY[5]} ${X.S - 14},${stepY[5] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 6: S → API (tokenId)                                             */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='6'
          className={`${styles.arrowGroup} ${
            activeStep === 6 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.S - 15}
            y1={stepY[6]}
            x2={X.API + 10}
            y2={stepY[6]}
          />
          <text
            x={(X.API + X.S) / 2}
            y={stepY[6] - 10}
            className={styles.arrowLabel}
          >
            tokenId
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API + 2},${stepY[6]} ${X.API + 14},${stepY[6] - 4} ${
              X.API + 12
            },${stepY[6]} ${X.API + 14},${stepY[6] + 4}`}
          />
        </g>

        {/* === Note: ③ メール送信 ============================================== */}
        <g>
          <rect
            className={styles.noteRect}
            x={X.API - 20}
            y='340'
            width='180'
            height='20'
            rx='3'
            ry='3'
          />
          <text
            className={styles.noteLabel}
            x={X.API + 70}
            y='350'
          >
            ③ メール送信（リンク埋め込み）
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Step 7: API → MAIL (Send email with link)                             */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='7'
          className={`${styles.arrowGroup} ${
            activeStep === 7 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API + 15}
            y1={stepY[7]}
            x2={X.MAIL - 10}
            y2={stepY[7]}
          />
          <text
            x={(X.API + X.MAIL) / 2}
            y={stepY[7] - 10}
            className={styles.arrowLabel}
          >
            Send email (Magic Link)
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.MAIL - 2},${stepY[7]} ${X.MAIL - 14},${stepY[7] - 4} ${
              X.MAIL - 12
            },${stepY[7]} ${X.MAIL - 14},${stepY[7] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 8: MAIL → API (accepted)                                         */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='8'
          className={`${styles.arrowGroup} ${
            activeStep === 8 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.MAIL - 15}
            y1={stepY[8]}
            x2={X.API + 10}
            y2={stepY[8]}
          />
          <text
            x={(X.API + X.MAIL) / 2}
            y={stepY[8] - 10}
            className={styles.arrowLabel}
          >
            accepted
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API + 2},${stepY[8]} ${X.API + 14},${stepY[8] - 4} ${
              X.API + 12
            },${stepY[8]} ${X.API + 14},${stepY[8] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 9: API → FE (200 OK)                                             */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='9'
          className={`${styles.arrowGroup} ${
            activeStep === 9 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API - 15}
            y1={stepY[9]}
            x2={X.FE + 10}
            y2={stepY[9]}
          />
          <text
            x={(X.FE + X.API) / 2}
            y={stepY[9] - 10}
            className={styles.arrowLabel}
          >
            200 OK "メールを確認してください"
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE + 2},${stepY[9]} ${X.FE + 14},${stepY[9] - 4} ${
              X.FE + 12
            },${stepY[9]} ${X.FE + 14},${stepY[9] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 10: FE → U ("メールを確認してね")                                */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='10'
          className={`${styles.arrowGroup} ${
            activeStep === 10 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.FE - 15}
            y1={stepY[10]}
            x2={X.U + 10}
            y2={stepY[10]}
          />
          <text
            x={(X.U + X.FE) / 2}
            y={stepY[10] - 10}
            className={styles.arrowLabel}
          >
            "メールを確認してね"
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.U + 2},${stepY[10]} ${X.U + 14},${stepY[10] - 4} ${
              X.U + 12
            },${stepY[10]} ${X.U + 14},${stepY[10] + 4}`}
          />
        </g>

        {/* === Note: ④ ユーザーがメールを開いてリンクを押す ==================== */}
        <g>
          <rect
            className={styles.noteRect}
            x={X.U - 60}
            y='500'
            width='250'
            height='20'
            rx='3'
            ry='3'
          />
          <text
            className={styles.noteLabel}
            x={X.U + 65}
            y='510'
          >
            ④ ユーザーがメールを開いてリンクを押す
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Step 11: U → MAIL (メール閲覧)                                        */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='11'
          className={`${styles.arrowGroup} ${
            activeStep === 11 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.U + 15}
            y1={stepY[11]}
            x2={X.MAIL - 10}
            y2={stepY[11]}
          />
          <text
            x={(X.U + X.MAIL) / 2}
            y={stepY[11] - 10}
            className={styles.arrowLabel}
          >
            メール閲覧
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.MAIL - 2},${stepY[11]} ${X.MAIL - 14},${
              stepY[11] - 4
            } ${X.MAIL - 12},${stepY[11]} ${X.MAIL - 14},${stepY[11] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 12: U → FE (GET /magic/callback?token=...)                       */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='12'
          className={`${styles.arrowGroup} ${
            activeStep === 12 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.U + 15}
            y1={stepY[12]}
            x2={X.FE - 10}
            y2={stepY[12]}
          />
          <text
            x={(X.U + X.FE) / 2}
            y={stepY[12] - 10}
            className={styles.arrowLabel}
          >
            GET /magic/callback?token=...
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.FE - 2},${stepY[12]} ${X.FE - 14},${stepY[12] - 4} ${
              X.FE - 12
            },${stepY[12]} ${X.FE - 14},${stepY[12] + 4}`}
          />
        </g>

        {/* === Note: ⑤ トークン検証してログイン確定 ============================ */}
        <g>
          <rect
            className={styles.noteRect}
            x={X.FE - 20}
            y='580'
            width='200'
            height='20'
            rx='3'
            ry='3'
          />
          <text
            className={styles.noteLabel}
            x={X.FE + 80}
            y='590'
          >
            ⑤ トークン検証してログイン確定
          </text>
        </g>

        {/* ====================================================================== */}
        {/* Step 13: FE → API (POST /auth/magic-link/verify)                      */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='13'
          className={`${styles.arrowGroup} ${
            activeStep === 13 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.FE + 15}
            y1={stepY[13]}
            x2={X.API - 10}
            y2={stepY[13]}
          />
          <text
            x={(X.FE + X.API) / 2}
            y={stepY[13] - 10}
            className={styles.arrowLabel}
          >
            POST /magic-link/verify
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API - 2},${stepY[13]} ${X.API - 14},${stepY[13] - 4} ${
              X.API - 12
            },${stepY[13]} ${X.API - 14},${stepY[13] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 14: API → S (lookup rid)                                         */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='14'
          className={`${styles.arrowGroup} ${
            activeStep === 14 ? styles.arrowRightActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API + 15}
            y1={stepY[14]}
            x2={X.S - 10}
            y2={stepY[14]}
          />
          <text
            x={(X.API + X.S) / 2}
            y={stepY[14] - 10}
            className={styles.arrowLabel}
          >
            lookup rid → storedHash/expiry/used
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.S - 2},${stepY[14]} ${X.S - 14},${stepY[14] - 4} ${
              X.S - 12
            },${stepY[14]} ${X.S - 14},${stepY[14] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 15: S → API (token record)                                       */}
        {/* ====================================================================== */}
        <g
          data-step-arrow='15'
          className={`${styles.arrowGroup} ${
            activeStep === 15 ? styles.arrowLeftActive : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.S - 15}
            y1={stepY[15]}
            x2={X.API + 10}
            y2={stepY[15]}
          />
          <text
            x={(X.API + X.S) / 2}
            y={stepY[15] - 10}
            className={styles.arrowLabel}
          >
            token record
          </text>
          <polygon
            className={styles.arrowHead}
            points={`${X.API + 2},${stepY[15]} ${X.API + 14},${stepY[15] - 4} ${
              X.API + 12
            },${stepY[15]} ${X.API + 14},${stepY[15] + 4}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* Step 16: API internal (hash検証 / 期限確認 / used確認)                */}
        {/* ====================================================================== */}

        {/* 上段：右向きの線（API → 内部処理ボックス） */}
        <g
          data-step-arrow='16'
          className={`${styles.arrowGroup} ${
            activeStep === 16 ? styles.arrowLoopUp : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API - 40}
            y1={stepY[16] - 13}
            x2={X.API}
            y2={stepY[16] - 13}
          />

          {/* 内部処理ボックス */}
          <rect
            className={styles.nodeRect}
            x={X.API - 65}
            y={stepY[16] - 18}
            width='25'
            height='36'
            rx='4'
            ry='4'
          />

          <text
            x={X.API + 90}
            y={stepY[16] - 4}
            className={styles.arrowLabel}
          >
            hash(token)一致確認
          </text>
          <text
            x={X.API + 90}
            y={stepY[16] + 10}
            className={styles.arrowLabel}
          >
            期限確認 / used=false確認
          </text>
        </g>

        {/* 下段：左向きの矢印（内部処理ボックス → API） */}
        <g
          data-step-arrow='16'
          className={`${styles.arrowGroup} ${
            activeStep === 16 ? styles.arrowLoopDown : ''
          }`}
        >
          <line
            className={styles.arrow}
            x1={X.API - 35}
            y1={stepY[16] + 13}
            x2={X.API}
            y2={stepY[16] + 13}
          />
          <polygon
            className={styles.arrowHead}
            points={`${X.API - 40},${stepY[16] + 13} ${X.API - 31},${
              stepY[16] + 17
            } ${X.API - 33},${stepY[16] + 13} ${X.API - 31},${stepY[16] + 9}`}
          />
        </g>

        {/* ====================================================================== */}
        {/* ステップ番号のサークル                                                */}
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
            cx={X.U}
            cy={stepY[1]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.U}
            y={stepY[1]}
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
            cx={X.FE}
            cy={stepY[2]}
            r='12'
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
          data-step-node='3'
          className={`${styles.stepGroup} ${
            activeStep === 3 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx={X.API}
            cy={stepY[3]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[3]}
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
            cx={X.DB}
            cy={stepY[4]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.DB}
            y={stepY[4]}
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
            cx={X.API}
            cy={stepY[5]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[5]}
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
            cx={X.S}
            cy={stepY[6]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.S}
            y={stepY[6]}
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
            cx={X.API}
            cy={stepY[7]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[7]}
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
            cx={X.MAIL}
            cy={stepY[8]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.MAIL}
            y={stepY[8]}
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
            cx={X.API}
            cy={stepY[9]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[9]}
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
            cx={X.FE}
            cy={stepY[10]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.FE}
            y={stepY[10]}
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
            cx={X.U}
            cy={stepY[11]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.U}
            y={stepY[11]}
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
            cx={X.U}
            cy={stepY[12]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.U}
            y={stepY[12]}
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
            cx={X.FE}
            cy={stepY[13]}
            r='12'
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
          data-step-node='14'
          className={`${styles.stepGroup} ${
            activeStep === 14 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx={X.API}
            cy={stepY[14]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[14]}
          >
            14
          </text>
        </g>

        {/* Step 15 */}
        <g
          data-step-node='15'
          className={`${styles.stepGroup} ${
            activeStep === 15 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx={X.S}
            cy={stepY[15]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.S}
            y={stepY[15]}
          >
            15
          </text>
        </g>

        {/* Step 16 */}
        <g
          data-step-node='16'
          className={`${styles.stepGroup} ${
            activeStep === 16 ? styles.stepGroupActive : ''
          }`}
        >
          <circle
            className={styles.stepCircle}
            cx={X.API}
            cy={stepY[16]}
            r='12'
          />
          <text
            className={styles.stepLabel}
            x={X.API}
            y={stepY[16]}
          >
            16
          </text>
        </g>
      </g>
    </svg>
  );
}
