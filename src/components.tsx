import { ComponentChildren, JSX } from 'preact'

export function Separator() {
  return (
    <div
      style={{
        borderRight:
          '1px solid hsl(var(--c-pri-h), calc(var(--c-pri-s) - 20% * var(--l-multi)), calc(var(--c-pri-l) + 5% * var(--l-multi)))',
        height: '26px',
        width: '1px',
        display: 'inline-block',
        margin: '0 1rem',
        verticalAlign: 'middle'
      }}
    ></div>
  )
}

const labelStyle = {
  padding: '12px 0px',
  cursor: 'pointer'
}

const inputStyle = {
  marginLeft: '0.5rem',
  verticalAlign: 'middle'
}

export function Input({
  label,
  ...inputProps
}: { label: string } & JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <label style={labelStyle}>
      {label}
      <input style={inputStyle} {...inputProps} />
    </label>
  )
}

export function Group({ children }: { children: ComponentChildren }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        gap: '1rem'
      }}
    >
      {children}
    </div>
  )
}
