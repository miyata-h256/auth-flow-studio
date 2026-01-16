// src/types/variants.ts
// 認証フローのバリアント（基本版 vs 強化版）の型定義

/**
 * フローファミリー（認証方式のカテゴリ）
 */
export type FlowFamily = 'oidc' | 'magic' | 'passkey';

/**
 * フローバリアントID
 * - 基本版: xxx-basic
 * - 強化版: xxx-enhanced
 */
export type FlowVariantId =
    | 'oidc-basic'
    | 'oidc-pkce'
    | 'magic-basic'
    | 'magic-enhanced'
    | 'passkey-basic'
    | 'passkey-enhanced';

/**
 * セキュリティ強化機能のメタデータ（翻訳不要な部分）
 * 翻訳テキスト（name, description等）は i18n で管理
 */
export interface SecurityEnhancementMeta {
    /** 機能ID */
    id: string;
    /** 実装の複雑さ（1-5） */
    complexity: 1 | 2 | 3 | 4 | 5;
}

/**
 * フローバリアント定義（翻訳不要な部分）
 * 翻訳テキスト（name, subtitle, useCases）は i18n で管理
 */
export interface FlowVariant {
    /** バリアントID */
    id: FlowVariantId;
    /** 所属するフローファミリー */
    family: FlowFamily;
    /** 基本版かどうか */
    isBasic: boolean;
    /** 含まれるセキュリティ強化機能のID */
    enhancements: string[];
    /** 追加ステップ（基本版との差分） */
    additionalSteps?: number[];
    /** このバリアントで変更されるステップ */
    modifiedSteps?: number[];
    /** 推奨度（1-5） */
    recommendationLevel: 1 | 2 | 3 | 4 | 5;
}

/**
 * フローファミリー情報（翻訳不要な部分）
 * 翻訳テキスト（name, description）は i18n で管理
 */
export interface FlowFamilyInfo {
    /** ファミリーID */
    id: FlowFamily;
    /** 利用可能なバリアント */
    variants: FlowVariantId[];
}

/**
 * バリアント比較結果
 */
export interface VariantComparison {
    /** 基本版のID */
    basicVariant: FlowVariantId;
    /** 強化版のID */
    enhancedVariant: FlowVariantId;
    /** 追加される機能のID */
    addedFeatureIds: string[];
    /** 追加されるステップ */
    addedSteps: number[];
    /** 変更されるステップ */
    modifiedSteps: number[];
}

/**
 * 変更されるステップの情報
 */
export interface VariantStepModification {
    /** ステップ番号 */
    stepNumber: number;
    /** 強化フラグ */
    isEnhanced: true;
    /** 対応するセキュリティ強化機能ID */
    enhancementId: string;
    /** 変更の説明 */
    description: string;
    /** 詳細説明 */
    detail?: string;
    /** 基本版での動作 */
    basicBehavior?: string;
    /** 強化版での動作 */
    enhancedBehavior?: string;
    /** ペイロード例 */
    payload?: Record<string, unknown>;
}
