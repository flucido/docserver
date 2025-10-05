function LogomarkPaths() {
  return (
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
      {/* Hand/lightbulb icon for LTC */}
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      <path d="M9 21h6" strokeLinecap="round" />
    </g>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 36" fill="none" {...props}>
      {/* Logomark on the left */}
      <g transform="translate(0, 6)">
        <LogomarkPaths />
      </g>
      {/* Text: LUCIDO TECHNOLOGY CONSULTING */}
      <text
        x="32"
        y="14"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.5"
        fill="currentColor"
      >
        LUCIDO TECHNOLOGY CONSULTING
      </text>
      {/* Tagline: DRIVING DIGITAL CLARITY */}
      <text
        x="32"
        y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing="1"
        fill="currentColor"
        opacity="0.7"
      >
        DRIVING DIGITAL CLARITY
      </text>
    </svg>
  )
}
