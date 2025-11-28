export function AuthFlowSvg({ children }) {
  return (
    <svg
      width='680'
      height='260'
      viewBox='0 0 680 260'
      xmlns='http://www.w3.org/2000/svg'
      style={{ overflow: 'visible' }}
    >
      {/* USER */}
      <g id='node-user'>
        <rect
          x='20'
          y='100'
          width='120'
          height='60'
          rx='10'
          fill='#1e1b2e'
          stroke='#6d28d9'
          strokeWidth='1.5'
        />
        <text
          x='80'
          y='135'
          fill='#e2e8f0'
          textAnchor='middle'
          fontSize='14'
        >
          User
        </text>
      </g>

      {/* CLIENT */}
      <g id='node-client'>
        <rect
          x='180'
          y='100'
          width='120'
          height='60'
          rx='10'
          fill='#1e1b2e'
          stroke='#6d28d9'
          strokeWidth='1.5'
        />
        <text
          x='240'
          y='135'
          fill='#e2e8f0'
          textAnchor='middle'
          fontSize='14'
        >
          Client
        </text>
      </g>

      {/* PROVIDER */}
      <g id='node-provider'>
        <rect
          x='350'
          y='70'
          width='150'
          height='60'
          rx='10'
          fill='#1e1b2e'
          stroke='#6d28d9'
          strokeWidth='1.5'
        />
        <text
          x='425'
          y='105'
          fill='#e2e8f0'
          textAnchor='middle'
          fontSize='14'
        >
          Provider
        </text>
      </g>

      {/* TOKEN ENDPOINT */}
      <g id='node-token'>
        <rect
          x='350'
          y='150'
          width='150'
          height='60'
          rx='10'
          fill='#1e1b2e'
          stroke='#6d28d9'
          strokeWidth='1.5'
        />
        <text
          x='425'
          y='185'
          fill='#e2e8f0'
          textAnchor='middle'
          fontSize='14'
        >
          Token Endpoint
        </text>
      </g>

      {children}
    </svg>
  );
}
