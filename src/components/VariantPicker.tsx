// src/components/VariantPicker.tsx
// フローバリアント選択コンポーネント（ファミリーでグループ化）

import { useMemo } from 'react';
import { FLOW_FAMILIES, FLOW_VARIANTS } from '../data/securityEnhancements';
import type { FlowFamily, FlowVariantId } from '../types/variants';
import styles from './styles/VariantPicker.module.css';

interface VariantPickerProps {
    /** ラベル */
    label: string;
    /** 現在選択されているバリアントID */
    value: FlowVariantId;
    /** 値変更時のコールバック */
    onChange: (value: FlowVariantId) => void;
    /** 非活性にするバリアントID（相手側で選択中のものなど） */
    disabledVariants?: FlowVariantId[];
    /** 特定のファミリーのみ表示 */
    filterFamily?: FlowFamily;
    /** 同系統比較モード（同じファミリー内のみ選択可能） */
    sameFamilyOnly?: FlowFamily;
}

export default function VariantPicker({
    label,
    value,
    onChange,
    disabledVariants = [],
    filterFamily,
    sameFamilyOnly,
}: VariantPickerProps) {
    // ファミリーとバリアントをグループ化
    const groupedOptions = useMemo(() => {
        const families = Object.values(FLOW_FAMILIES);

        return families
            .filter((family) => !filterFamily || family.id === filterFamily)
            .filter((family) => !sameFamilyOnly || family.id === sameFamilyOnly)
            .map((family) => ({
                family,
                variants: family.variants
                    .map((variantId) => FLOW_VARIANTS[variantId])
                    .filter((v) => !!v),
            }));
    }, [filterFamily, sameFamilyOnly]);

    return (
        <div className={styles.wrap}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value as FlowVariantId)}
            >
                {groupedOptions.map(({ family, variants }) => (
                    <optgroup key={family.id} label={family.name}>
                        {variants.map((variant) => (
                            <option
                                key={variant.id}
                                value={variant.id}
                                disabled={disabledVariants.includes(variant.id)}
                            >
                                {variant.name}
                                {variant.isBasic ? '' : ' ⭐'}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
}
