import type { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="rounded-default flex flex-col overflow-hidden bg-white/90 bg-[url('/card-background.png')] bg-cover bg-center bg-no-repeat p-2 bg-blend-overlay"
      style={{ transform: 'translateY(var(--spacing-translate-y-card))' }}
    >
      {children}
    </div>
  )
}

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <figure className="-mx-2 flex" style={{ maxHeight: 'var(--spacing-card-image-height)' }}>
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
    </figure>
  )
}

Card.Image = CardImage
