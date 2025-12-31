import styles from './styles/FlowPicker.module.css';

export default function FlowPicker({ label, options, value, onChange }) {
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
