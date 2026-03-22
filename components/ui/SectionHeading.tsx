interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      <div className="flex items-center gap-3 mt-3">
        <span className="block w-10 h-[3px] rounded-full bg-electric-blue" />
        <span className="block w-3 h-[3px] rounded-full bg-electric-blue/40" />
      </div>
      {subtitle && (
        <p className="mt-4 text-text-muted text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}
