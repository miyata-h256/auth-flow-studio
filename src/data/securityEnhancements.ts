// src/data/securityEnhancements.ts
// セキュリティ強化機能のデータ定義
// 注意: name, description, benefits, mitigates などの表示テキストは
// i18n/locales/{ja,en}.ts の securityEnhancements セクションで管理されています

import type { FlowVariant, FlowFamilyInfo } from '../types/variants';

/**
 * セキュリティ強化機能のID定義
 * 翻訳テキストは i18n で管理
 */
export const SECURITY_ENHANCEMENT_IDS = [
    'pkce',
    'deviceBinding',
    'shortTtl',
    'antiPhishing',
    'attestation',
    'devicePolicy',
    'stepUpAuth',
] as const;

export type SecurityEnhancementId = (typeof SECURITY_ENHANCEMENT_IDS)[number];

/**
 * セキュリティ強化機能の複雑度（翻訳不要なメタデータ）
 */
export const SECURITY_ENHANCEMENT_COMPLEXITY: Record<SecurityEnhancementId, number> = {
    pkce: 2,
    deviceBinding: 3,
    shortTtl: 1,
    antiPhishing: 2,
    attestation: 4,
    devicePolicy: 4,
    stepUpAuth: 3,
};

/**
 * フローバリアントの定義（翻訳不要なメタデータのみ）
 * name, subtitle, useCases は i18n で管理
 */
export const FLOW_VARIANTS: Record<string, FlowVariant> = {
    // ========== OIDC バリアント ==========
    'oidc-basic': {
        id: 'oidc-basic',
        family: 'oidc',
        isBasic: true,
        enhancements: [],
        recommendationLevel: 2,
    },

    'oidc-pkce': {
        id: 'oidc-pkce',
        family: 'oidc',
        isBasic: false,
        enhancements: ['pkce'],
        additionalSteps: [],
        modifiedSteps: [2, 6], // 認可リクエストとトークンリクエストが変更
        recommendationLevel: 5,
    },

    // ========== Magic Link バリアント ==========
    'magic-basic': {
        id: 'magic-basic',
        family: 'magic',
        isBasic: true,
        enhancements: [],
        recommendationLevel: 2,
    },

    'magic-enhanced': {
        id: 'magic-enhanced',
        family: 'magic',
        isBasic: false,
        enhancements: ['deviceBinding', 'shortTtl', 'antiPhishing'],
        additionalSteps: [5, 13, 16], // デバイス検証、フィッシング対策表示、デバイス照合
        modifiedSteps: [5, 7, 13, 16],
        recommendationLevel: 4,
    },

    // ========== Passkey バリアント ==========
    'passkey-basic': {
        id: 'passkey-basic',
        family: 'passkey',
        isBasic: true,
        enhancements: [],
        recommendationLevel: 4,
    },

    'passkey-enhanced': {
        id: 'passkey-enhanced',
        family: 'passkey',
        isBasic: false,
        enhancements: ['attestation', 'devicePolicy', 'stepUpAuth'],
        additionalSteps: [3, 10, 11], // Attestation検証、デバイスポリシー、Step-up
        modifiedSteps: [3, 9, 10, 11],
        recommendationLevel: 5,
    },
};

/**
 * フローファミリー情報（翻訳不要なメタデータのみ）
 * name, description は i18n で管理
 */
export const FLOW_FAMILIES: Record<string, FlowFamilyInfo> = {
    oidc: {
        id: 'oidc',
        variants: ['oidc-basic', 'oidc-pkce'],
    },
    magic: {
        id: 'magic',
        variants: ['magic-basic', 'magic-enhanced'],
    },
    passkey: {
        id: 'passkey',
        variants: ['passkey-basic', 'passkey-enhanced'],
    },
};

/**
 * バリアントIDからバリアント情報を取得
 */
export function getVariant(variantId: string): FlowVariant | undefined {
    return FLOW_VARIANTS[variantId];
}

/**
 * バリアントIDからセキュリティ強化機能IDのリストを取得
 */
export function getEnhancementIdsForVariant(variantId: string): string[] {
    const variant = FLOW_VARIANTS[variantId];
    if (!variant) return [];
    return variant.enhancements;
}

/**
 * 2つのバリアント間の差分を計算
 */
export function compareVariants(
    basicId: string,
    enhancedId: string
): {
    addedEnhancementIds: string[];
    additionalSteps: number[];
    modifiedSteps: number[];
} {
    const basic = FLOW_VARIANTS[basicId];
    const enhanced = FLOW_VARIANTS[enhancedId];

    if (!basic || !enhanced) {
        return { addedEnhancementIds: [], additionalSteps: [], modifiedSteps: [] };
    }

    // 強化版で追加された機能ID
    const addedEnhancementIds = enhanced.enhancements.filter(
        (id) => !basic.enhancements.includes(id)
    );

    return {
        addedEnhancementIds,
        additionalSteps: enhanced.additionalSteps || [],
        modifiedSteps: enhanced.modifiedSteps || [],
    };
}

/**
 * ファミリー内のバリアント一覧を取得
 */
export function getVariantsForFamily(familyId: string): FlowVariant[] {
    const family = FLOW_FAMILIES[familyId];
    if (!family) return [];
    return family.variants
        .map((id) => FLOW_VARIANTS[id])
        .filter((v): v is FlowVariant => !!v);
}
