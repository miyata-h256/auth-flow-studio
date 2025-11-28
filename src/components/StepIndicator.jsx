export default function StepIndicator({ steps, current }) {
  return (
    <div className='step-indicator'>
      {steps.map((label, index) => (
        <div
          key={label}
          className={
            'step-indicator-item' +
            (index === current ? ' step-indicator-item--active' : '') +
            (index < current ? ' step-indicator-item--done' : '')
          }
        >
          <div className='step-indicator-dot' />
          <span className='step-indicator-label'>{label}</span>
        </div>
      ))}
    </div>
  );
}
