export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border-subtle bg-orbit-navy">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-text-dim">
          © {currentYear}{' '}
          <span className="text-text-muted font-medium">Rahmat Sigit Hidayat</span>
          . All rights reserved.
        </p>
        <a
          href="#hero"
          className="flex items-center gap-1.5 text-text-dim hover:text-electric-blue transition-colors duration-200"
        >
          Back to top
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
