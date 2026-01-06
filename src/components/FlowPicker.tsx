import styles from './styles/FlowPicker.module.css';

interface FlowOption {
    id: string;
    label: string;
}

interface FlowPickerProps {
    label: string;
    options: FlowOption[];
    value: string;
    onChange?: (value: string) => void;
}

export default function FlowPicker({ label, options, value, onChange }: FlowPickerProps) {
    return (
        <div className={styles.wrap}>
            <div className={styles.label}>{label}</div>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                {options.map((opt) => (
                    <option
                        key={opt.id}
                        value={opt.id}
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
