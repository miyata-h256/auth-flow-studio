// src/data/variantSteps.ts
// バリアント別のステップ差分データ
// Note: このファイルのテキストは i18n/locales/[en|ja].ts の variantSteps で管理されています

import type { FlowStep } from '../types';
import type { VariantStepModification } from '../types/variants';
import type { TranslationKeys } from '../i18n/types';

/**
 * 翻訳データからOIDC + PKCEの変更ステップ情報を生成
 */
export function getOidcPkceModifications(t: TranslationKeys): Record<number, Partial<FlowStep> & { isEnhanced: true; enhancementId: string; basicBehavior?: string; enhancedBehavior?: string }> {
    return {
        // ステップ2: 認可リクエストにcode_challenge追加
        2: {
            isEnhanced: true,
            enhancementId: 'pkce',
            description: t.variantSteps.oidcPkce[2].description,
            basicBehavior: t.variantSteps.oidcPkce[2].basicBehavior,
            enhancedBehavior: t.variantSteps.oidcPkce[2].enhancedBehavior,
            detail: t.variantSteps.oidcPkce[2].detail,
            payload: {
                response_type: 'code',
                client_id: 'your-client-id',
                redirect_uri: 'https://your-app.com/callback',
                scope: 'openid profile email',
                state: 'random-state-value',
                nonce: 'random-nonce-value',
                code_challenge: 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM',
                code_challenge_method: 'S256',
            },
        },
        // ステップ6: トークンリクエストにcode_verifier追加
        6: {
            isEnhanced: true,
            enhancementId: 'pkce',
            description: t.variantSteps.oidcPkce[6].description,
            basicBehavior: t.variantSteps.oidcPkce[6].basicBehavior,
            enhancedBehavior: t.variantSteps.oidcPkce[6].enhancedBehavior,
            detail: t.variantSteps.oidcPkce[6].detail,
            payload: {
                grant_type: 'authorization_code',
                code: 'SplxlOBeZQQYbYS6WxSbIA',
                redirect_uri: 'https://your-app.com/callback',
                client_id: 'your-client-id',
                code_verifier: 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
            },
        },
    };
}

/**
 * 翻訳データからMagic Link Enhancedの変更ステップ情報を生成
 */
export function getMagicEnhancedModifications(t: TranslationKeys): Record<number, Partial<FlowStep> & { isEnhanced: true; enhancementId: string; basicBehavior?: string; enhancedBehavior?: string }> {
    return {
        // ステップ5: トークン生成時にデバイス情報も保存
        5: {
            isEnhanced: true,
            enhancementId: 'deviceBinding',
            description: t.variantSteps.magicEnhanced[5].description,
            basicBehavior: t.variantSteps.magicEnhanced[5].basicBehavior,
            enhancedBehavior: t.variantSteps.magicEnhanced[5].enhancedBehavior,
            detail: t.variantSteps.magicEnhanced[5].detail,
            payload: {
                token_id: 'tok_xxxxxxxxxxxx',
                email: 'user@example.com',
                device_fingerprint: 'fp_abc123xyz789',
                session_id: 'sess_xxxxxxxxxx',
                created_at: '2024-01-15T10:00:00Z',
                expires_at: '2024-01-15T10:05:00Z', // 5分後（Short TTL）
            },
        },
        // ステップ7: メール送信時にセキュリティフレーズを含める
        7: {
            isEnhanced: true,
            enhancementId: 'antiPhishing',
            description: t.variantSteps.magicEnhanced[7].description,
            basicBehavior: t.variantSteps.magicEnhanced[7].basicBehavior,
            enhancedBehavior: t.variantSteps.magicEnhanced[7].enhancedBehavior,
            detail: t.variantSteps.magicEnhanced[7].detail,
        },
        // ステップ13: トークン検証時にデバイス照合
        13: {
            isEnhanced: true,
            enhancementId: 'deviceBinding',
            description: t.variantSteps.magicEnhanced[13].description,
            basicBehavior: t.variantSteps.magicEnhanced[13].basicBehavior,
            enhancedBehavior: t.variantSteps.magicEnhanced[13].enhancedBehavior,
            detail: t.variantSteps.magicEnhanced[13].detail,
        },
        // ステップ16: 検証成功時の追加チェック
        16: {
            isEnhanced: true,
            enhancementId: 'shortTtl',
            description: t.variantSteps.magicEnhanced[16].description,
            basicBehavior: t.variantSteps.magicEnhanced[16].basicBehavior,
            enhancedBehavior: t.variantSteps.magicEnhanced[16].enhancedBehavior,
            detail: t.variantSteps.magicEnhanced[16].detail,
        },
    };
}

/**
 * 翻訳データからPasskey Enhancedの変更ステップ情報を生成
 */
export function getPasskeyEnhancedModifications(t: TranslationKeys): Record<number, Partial<FlowStep> & { isEnhanced: true; enhancementId: string; basicBehavior?: string; enhancedBehavior?: string }> {
    return {
        // ステップ3: Attestation検証オプションの追加
        3: {
            isEnhanced: true,
            enhancementId: 'attestation',
            description: t.variantSteps.passkeyEnhanced[3].description,
            basicBehavior: t.variantSteps.passkeyEnhanced[3].basicBehavior,
            enhancedBehavior: t.variantSteps.passkeyEnhanced[3].enhancedBehavior,
            detail: t.variantSteps.passkeyEnhanced[3].detail,
            payload: {
                challenge: 'randomChallengeBase64',
                rpId: 'example.com',
                allowCredentials: [],
                userVerification: 'required',
                attestation: 'direct',
            },
        },
        // ステップ9: Attestation検証
        9: {
            isEnhanced: true,
            enhancementId: 'attestation',
            description: t.variantSteps.passkeyEnhanced[9].description,
            basicBehavior: t.variantSteps.passkeyEnhanced[9].basicBehavior,
            enhancedBehavior: t.variantSteps.passkeyEnhanced[9].enhancedBehavior,
            detail: t.variantSteps.passkeyEnhanced[9].detail,
        },
        // ステップ10: デバイスポリシーチェック
        10: {
            isEnhanced: true,
            enhancementId: 'devicePolicy',
            description: t.variantSteps.passkeyEnhanced[10].description,
            basicBehavior: t.variantSteps.passkeyEnhanced[10].basicBehavior,
            enhancedBehavior: t.variantSteps.passkeyEnhanced[10].enhancedBehavior,
            detail: t.variantSteps.passkeyEnhanced[10].detail,
        },
        // ステップ11: Step-up認証の判定
        11: {
            isEnhanced: true,
            enhancementId: 'stepUpAuth',
            description: t.variantSteps.passkeyEnhanced[11].description,
            basicBehavior: t.variantSteps.passkeyEnhanced[11].basicBehavior,
            enhancedBehavior: t.variantSteps.passkeyEnhanced[11].enhancedBehavior,
            detail: t.variantSteps.passkeyEnhanced[11].detail,
        },
    };
}

/**
 * バリアントIDに対応する変更ステップデータを取得
 */
export function getVariantModifications(variantId: string, t: TranslationKeys): Record<number, Partial<FlowStep> & { isEnhanced: true; enhancementId: string }> {
    switch (variantId) {
        case 'oidc-pkce':
            return getOidcPkceModifications(t);
        case 'magic-enhanced':
            return getMagicEnhancedModifications(t);
        case 'passkey-enhanced':
            return getPasskeyEnhancedModifications(t);
        default:
            return {};
    }
}

/**
 * 強化されたステップかどうかを判定
 */
export function isEnhancedStep(variantId: string, stepId: number, t: TranslationKeys): boolean {
    const modifications = getVariantModifications(variantId, t);
    return !!modifications[stepId];
}

/**
 * ステップの強化情報を取得
 */
export function getStepEnhancement(variantId: string, stepId: number, t: TranslationKeys): { enhancementId: string; isEnhanced: boolean } | null {
    const modifications = getVariantModifications(variantId, t);
    const mod = modifications[stepId];
    if (!mod) return null;
    return {
        enhancementId: mod.enhancementId,
        isEnhanced: true,
    };
}

/**
 * バリアントIDに対応する変更ステップをVariantStepModification形式で取得
 */
export function getVariantStepModifications(variantId: string, t: TranslationKeys): Record<number, VariantStepModification> {
    const rawMods = getVariantModifications(variantId, t);
    const result: Record<number, VariantStepModification> = {};

    for (const [stepNum, mod] of Object.entries(rawMods)) {
        const num = Number(stepNum);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rawMod = mod as any;
        result[num] = {
            stepNumber: num,
            isEnhanced: true,
            enhancementId: mod.enhancementId,
            description: mod.description || '',
            detail: mod.detail,
            basicBehavior: rawMod.basicBehavior,
            enhancedBehavior: rawMod.enhancedBehavior,
            payload: mod.payload as Record<string, unknown> | undefined,
        };
    }

    return result;
}
