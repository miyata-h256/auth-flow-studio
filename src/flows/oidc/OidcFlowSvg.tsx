// src/flows/oidc/OidcFlowSvg.tsx
import React from 'react';
import styles from './styles/OidcFlowSvg.module.css';
import { OIDC_STEPS } from './oidcSteps';
import type { FlowStepWithType } from '../../types';

/**
 * OidcFlowSvg コンポーネントのProps
 */
interface OidcFlowSvgProps {
    /** 現在アクティブなステップ番号（1〜9） */
    activeStep: number;
    /** ステップクリック時のコールバック */
    onStepClick?: (step: FlowStepWithType | null) => void;
    /** クリック操作を有効にするか（デフォルト: false） */
    interactive?: boolean;
}

/**
 * OIDC フロー図（SVG版）
 *
 * props:
 *  - activeStep: 1〜9（それ以外なら全部非アクティブ）
 *  - onStepClick: (stepData) => void - ステップクリック時のコールバック
 *  - interactive: boolean - クリック操作を有効にするか（デフォルト: false）
 *
 * Participants (3):
 *  - USER: User
 *  - CLIENT: Client
 *  - AUTH: Authentication Server
 */
export default function OidcFlowSvg({
    activeStep,
    onStepClick,
    interactive = false,
}: OidcFlowSvgProps): React.ReactElement {
    // ステップノードクリック時のハンドラ（interactiveがtrueの場合のみ有効）
    const handleStepClick = interactive
        ? (e: React.MouseEvent<SVGGElement> | React.KeyboardEvent<SVGGElement>) => {
            const stepId = parseInt(e.currentTarget.dataset.step || '', 10);
            if (stepId && onStepClick) {
                const stepData = OIDC_STEPS[stepId];
                if (stepData) {
                    onStepClick({ ...stepData, flowType: 'oidc' });
                }
            }
        }
        : undefined;
    // X座標（各participantの中心）
    const X = {
        USER: 70.5, // User
        CLIENT: 328, // Client
        AUTH: 635, // Authentication Server
    };

    // ノードの幅・高さ
    const NODE_WIDTH = 140;
    const NODE_HEIGHT = 70;

    // Y座標のベース
    const Y_TOP = 0;
    const Y_BOTTOM = 550;
    const Y_LIFELINE_START = 70;

    // ステップのY座標
    const stepY: Record<number, number> = {
        1: 125, // User → Client: Click oidc-login link
        2: 165, // Client → Auth: Authorization Code Request
        3: 215, // Auth → User: Redirect to login page
        4: 265, // User → Auth: Authentication and Consent
        5: 315, // Auth → Client: Authorization Code
        6: 355, // Client → Auth: Code + Client Credentials
        7: 405, // Auth internal: Validate Code + Credentials
        8: 485, // Auth → Client: ID Token & Access Token
    };

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

                {/* Client */}
                <g>
                    <rect
                        className={styles.nodeRect}
                        x={X.CLIENT - NODE_WIDTH / 2}
                        y={Y_TOP}
                        width={NODE_WIDTH}
                        height={NODE_HEIGHT}
                        rx='10.5'
                        ry='10.5'
                    />
                    <text
                        className={styles.nodeLabel}
                        x={X.CLIENT}
                        y={Y_TOP + 37}
                    >
                        Client
                    </text>
                </g>

                {/* Auth Server */}
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
                        y={Y_TOP + 32}
                    >
                        Authentication
                    </text>
                    <text
                        className={styles.nodeLabel}
                        x={X.AUTH}
                        y={Y_TOP + 48}
                    >
                        Server
                    </text>
                </g>

                {/* === 下段のノード群 ================================================== */}
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

                {/* Client (bottom) */}
                <g>
                    <rect
                        className={styles.nodeRect}
                        x={X.CLIENT - NODE_WIDTH / 2}
                        y={Y_BOTTOM}
                        width={NODE_WIDTH}
                        height={NODE_HEIGHT}
                        rx='10.5'
                        ry='10.5'
                    />
                    <text
                        className={styles.nodeLabel}
                        x={X.CLIENT}
                        y={Y_BOTTOM + 37}
                    >
                        Client
                    </text>
                </g>

                {/* Auth Server (bottom) */}
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
                        y={Y_BOTTOM + 32}
                    >
                        Authentication
                    </text>
                    <text
                        className={styles.nodeLabel}
                        x={X.AUTH}
                        y={Y_BOTTOM + 48}
                    >
                        Server
                    </text>
                </g>

                {/* === Lifeline（縦線） =============================================== */}
                <line
                    x1={X.USER}
                    y1={Y_LIFELINE_START}
                    x2={X.USER}
                    y2={Y_BOTTOM}
                    className={styles.lifeline}
                />
                <line
                    x1={X.CLIENT}
                    y1={Y_LIFELINE_START}
                    x2={X.CLIENT}
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
                {/* ステップ矢印                                                           */}
                {/* ====================================================================== */}

                {/* Step 1: User → Client (Click oidc-login link) */}
                <g
                    data-step-arrow='1'
                    className={`${styles.arrowGroup} ${activeStep === 1 ? styles.arrowRightActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.USER + 15}
                        y1={stepY[1]}
                        x2={X.CLIENT - 8}
                        y2={stepY[1]}
                    />
                    <text
                        x={(X.USER + X.CLIENT) / 2 - 2}
                        y={stepY[1] - 10}
                        className={styles.arrowLabel}
                    >
                        Click oidc-login link
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.CLIENT + 2},${stepY[1]} ${X.CLIENT - 24},${stepY[1] + 4
                            } ${X.CLIENT - 22},${stepY[1]} ${X.CLIENT - 24},${stepY[1] - 4}`}
                    />
                </g>

                {/* Step 2: Client → Auth Server (Authorization Code Request) */}
                <g
                    data-step-arrow='2'
                    className={`${styles.arrowGroup} ${activeStep === 2 ? styles.arrowRightActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.CLIENT + 15}
                        y1={stepY[2]}
                        x2={X.AUTH - 10}
                        y2={stepY[2]}
                    />
                    <text
                        x={(X.CLIENT + X.AUTH) / 2 + 3}
                        y={stepY[2] - 10}
                        className={styles.arrowLabel}
                    >
                        Authorization Code Request
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.AUTH},${stepY[2]} ${X.AUTH - 24},${stepY[2] + 4} ${X.AUTH - 22
                            },${stepY[2]} ${X.AUTH - 24},${stepY[2] - 4}`}
                    />
                </g>

                {/* Step 3: Auth Server → User (Redirect to login page) */}
                <g
                    data-step-arrow='3'
                    className={`${styles.arrowGroup} ${activeStep === 3 ? styles.arrowLeftActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.AUTH - 15}
                        y1={stepY[3]}
                        x2={X.USER + 25}
                        y2={stepY[3]}
                    />
                    <text
                        x={(X.USER + X.AUTH) / 2}
                        y={stepY[3] - 10}
                        className={styles.arrowLabel}
                    >
                        Redirect to login page
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.USER},${stepY[3]} ${X.USER + 24},${stepY[3] - 4} ${X.USER + 22
                            },${stepY[3]} ${X.USER + 24},${stepY[3] + 4}`}
                    />
                </g>

                {/* Step 4: User → Auth Server (Authentication and Consent) */}
                <g
                    data-step-arrow='4'
                    className={`${styles.arrowGroup} ${activeStep === 4 ? styles.arrowRightActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.USER + 15}
                        y1={stepY[4]}
                        x2={X.AUTH - 15}
                        y2={stepY[4]}
                    />
                    <text
                        x={(X.USER + X.AUTH) / 2}
                        y={stepY[4] - 10}
                        className={styles.arrowLabel}
                    >
                        Authentication and Consent
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.AUTH},${stepY[4]} ${X.AUTH - 24},${stepY[4] + 4} ${X.AUTH - 22
                            },${stepY[4]} ${X.AUTH - 24},${stepY[4] - 4}`}
                    />
                </g>

                {/* Step 5: Auth Server → Client (Authorization Code) */}
                <g
                    data-step-arrow='5'
                    className={`${styles.arrowGroup} ${activeStep === 5 ? styles.arrowLeftActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.AUTH - 15}
                        y1={stepY[5]}
                        x2={X.CLIENT + 15}
                        y2={stepY[5]}
                    />
                    <text
                        x={(X.CLIENT + X.AUTH) / 2 + 3}
                        y={stepY[5] - 10}
                        className={styles.arrowLabel}
                    >
                        Authorization Code
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.CLIENT + 2},${stepY[5]} ${X.CLIENT + 24},${stepY[5] - 4
                            } ${X.CLIENT + 22},${stepY[5]} ${X.CLIENT + 24},${stepY[5] + 4}`}
                    />
                </g>

                {/* Step 6: Client → Auth Server (Code + Client Credentials) */}
                <g
                    data-step-arrow='6'
                    className={`${styles.arrowGroup} ${activeStep === 6 ? styles.arrowRightActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.CLIENT + 15}
                        y1={stepY[6]}
                        x2={X.AUTH - 15}
                        y2={stepY[6]}
                    />
                    <text
                        x={(X.CLIENT + X.AUTH) / 2 + 3}
                        y={stepY[6] - 10}
                        className={styles.arrowLabel}
                    >
                        Authorizatioon Code for Application Credentials
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.AUTH},${stepY[6]} ${X.AUTH - 24},${stepY[6] + 4} ${X.AUTH - 22
                            },${stepY[6]} ${X.AUTH - 24},${stepY[6] - 4}`}
                    />
                </g>

                {/* Step 7: Auth Server 内の検証 (Validate Code + Credentials) */}
                {/* 上段：右向きの線 */}
                <g
                    data-step-arrow='7'
                    className={`${styles.arrowGroup} ${activeStep === 7 ? styles.arrowLoopUp : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.AUTH - 55}
                        y1={stepY[7] - 17}
                        x2={X.AUTH}
                        y2={stepY[7] - 17}
                    />

                    {/* 内部処理ボックス */}
                    <rect
                        className={styles.nodeRect}
                        x={X.AUTH - 88}
                        y={stepY[7] - 25}
                        width='30'
                        height='50'
                        rx='5.5'
                        ry='5.5'
                    />

                    <text
                        className={styles.arrowLabel}
                        x={X.AUTH - 185}
                        y={stepY[7] - 15}
                    >
                        <tspan
                            x={X.AUTH - 185}
                            dy='0'
                        >
                            Validatet Authorizatioon Code
                        </tspan>
                        <tspan
                            x={X.AUTH - 185}
                            dy='16'
                        >
                            +
                        </tspan>
                        <tspan
                            x={X.AUTH - 185}
                            dy='16'
                        >
                            Client Credentials
                        </tspan>
                    </text>
                </g>

                {/* 下段：左向きの矢印 */}
                <g
                    data-step-arrow='7'
                    className={`${styles.arrowGroup} ${activeStep === 7 ? styles.arrowLoopDown : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.AUTH - 50}
                        y1={stepY[7] + 18}
                        x2={X.AUTH}
                        y2={stepY[7] + 18}
                    />
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.AUTH - 55},${stepY[7] + 18} ${X.AUTH - 46},${stepY[7] + 22
                            } ${X.AUTH - 48},${stepY[7] + 18} ${X.AUTH - 46},${stepY[7] + 14}`}
                    />
                </g>

                {/* Step 8: Auth Server → Client (ID Token & Access Token) */}
                <g
                    data-step-arrow='8'
                    className={`${styles.arrowGroup} ${activeStep === 8 ? styles.arrowLeftActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.AUTH - 15}
                        y1={stepY[8]}
                        x2={X.CLIENT + 15}
                        y2={stepY[8]}
                    />
                    <text
                        x={(X.CLIENT + X.AUTH) / 2 + 3}
                        y={stepY[8] - 10}
                        className={styles.arrowLabel}
                    >
                        ID Token & Access Token
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.CLIENT + 2},${stepY[8]} ${X.CLIENT + 24},${stepY[8] - 4
                            } ${X.CLIENT + 22},${stepY[8]} ${X.CLIENT + 24},${stepY[8] + 4}`}
                    />
                </g>

                {/* Step 9: Client → User (Login Complete) */}
                <g
                    data-step-arrow='9'
                    className={`${styles.arrowGroup} ${activeStep === 9 ? styles.arrowLeftActive : ''
                        }`}
                >
                    <line
                        className={styles.arrow}
                        x1={X.CLIENT - 15}
                        y1={stepY[8] + 40}
                        x2={X.USER + 15}
                        y2={stepY[8] + 40}
                    />
                    <text
                        x={(X.USER + X.CLIENT) / 2}
                        y={stepY[8] + 30}
                        className={styles.arrowLabel}
                    >
                        Login Complete
                    </text>
                    <polygon
                        className={styles.arrowHead}
                        points={`${X.USER},${stepY[8] + 40} ${X.USER + 24},${stepY[8] + 36
                            } ${X.USER + 22},${stepY[8] + 40} ${X.USER + 24},${stepY[8] + 44}`}
                    />
                </g>

                {/* ====================================================================== */}
                {/* ステップノード（番号サークル）                                          */}
                {/* ====================================================================== */}

                {/* Step 1 circle */}
                <g
                    data-step='1'
                    data-step-node='1'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 1 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
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

                {/* Step 2 circle */}
                <g
                    data-step='2'
                    data-step-node='2'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 2 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.CLIENT}
                        cy={stepY[2]}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.CLIENT}
                        y={stepY[2]}
                    >
                        2
                    </text>
                </g>

                {/* Step 3 circle */}
                <g
                    data-step='3'
                    data-step-node='3'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 3 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.AUTH}
                        cy={stepY[3]}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.AUTH}
                        y={stepY[3]}
                    >
                        3
                    </text>
                </g>

                {/* Step 4 circle */}
                <g
                    data-step='4'
                    data-step-node='4'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 4 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.USER}
                        cy={stepY[4]}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.USER}
                        y={stepY[4]}
                    >
                        4
                    </text>
                </g>

                {/* Step 5 circle */}
                <g
                    data-step='5'
                    data-step-node='5'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 5 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
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

                {/* Step 6 circle */}
                <g
                    data-step='6'
                    data-step-node='6'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 6 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.CLIENT}
                        cy={stepY[6]}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.CLIENT}
                        y={stepY[6]}
                    >
                        6
                    </text>
                </g>

                {/* Step 7 circle */}
                <g
                    data-step='7'
                    data-step-node='7'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 7 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
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

                {/* Step 8 circle */}
                <g
                    data-step='8'
                    data-step-node='8'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 8 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.AUTH}
                        cy={stepY[8]}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.AUTH}
                        y={stepY[8]}
                    >
                        8
                    </text>
                </g>

                {/* Step 9 circle - Login Complete */}
                <g
                    data-step='9'
                    data-step-node='9'
                    className={`${styles.stepGroup} ${interactive ? styles.clickable : ''
                        } ${activeStep === 9 ? styles.stepGroupActive : ''}`}
                    {...(interactive && {
                        onClick: handleStepClick,
                        role: 'button',
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent<SVGGElement>) =>
                            e.key === 'Enter' && handleStepClick?.(e),
                    })}
                >
                    <circle
                        className={styles.stepCircle}
                        cx={X.CLIENT}
                        cy={stepY[8] + 40}
                        r='15'
                    />
                    <text
                        className={styles.stepLabel}
                        x={X.CLIENT}
                        y={stepY[8] + 40}
                    >
                        9
                    </text>
                </g>
            </g>
        </svg>
    );
}
