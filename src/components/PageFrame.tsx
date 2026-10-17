import type { ReactNode } from 'react'

type PageFrameProps = {
  title: string
  titleClassName?: string
  children?: ReactNode
}

export default function PageFrame({
  title,
  titleClassName,
  children,
}: PageFrameProps) {
  return (
    <main className="page">
      <section className="card">
        <svg
          className="mark"
          viewBox="0 0 64 40"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M32 33c.2-10 6.4-18.2 18-23.5-1.4 9.4-6.4 17-18 23.5Z" />
          <path d="M32 33c-.2-10-6.4-18.2-18-23.5 1.4 9.4 6.4 17 18 23.5Z" />
          <path className="stem" d="M32 35.5V16" />
        </svg>
        <p className="eyebrow">Bia e Daniel</p>
        <h1 className={titleClassName}>{title}</h1>
        {children}
      </section>
    </main>
  )
}
