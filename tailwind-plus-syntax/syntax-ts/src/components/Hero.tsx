import { Button } from '@/components/Button'

// LTC Logo component
function LTCLogo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-4 mb-8" {...props}>
      {/* Logo icon - hand with lightbulb */}
      <div className="flex-shrink-0 w-16 h-16 bg-black rounded-lg flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="w-10 h-10"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          <path d="M9 21h6" strokeLinecap="round" />
        </svg>
      </div>
      {/* Logo text */}
      <div className="text-white">
        <div className="text-xl font-bold tracking-tight">
          LUCIDO TECHNOLOGY CONSULTING
        </div>
        <div className="text-sm tracking-wider mt-1 text-slate-300">
          DRIVING DIGITAL CLARITY
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900 dark:-mt-19 dark:-mb-32 dark:pt-19 dark:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/660099f38ca92e548d501ee2/6620355751b14c5ddf8ac633_kids%20schoolwork%20with%20tablet.webp"
          alt="Students working with technology"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* LTC Logo */}
            <LTCLogo />

            {/* Main Headline */}
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering educational institutions with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                enterprise-grade data pipelines
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Transform your student information systems into actionable insights with seamless data access solutions.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 space-y-3 text-slate-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Data Pipeline Architecture</strong> - End-to-end ETL/ELT solutions that move data from source systems to your analytics platforms</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Secure API Development</strong> - RESTful APIs with enterprise-grade authentication and rate limiting</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Type-Safe Implementations</strong> - Production-ready solutions built with modern languages like Rust for performance and reliability</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex gap-4">
              <Button href="/docs/getting-started/installation">Get Started</Button>
              <Button href="/docs/api" variant="secondary">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
