type ArticleCardHeaderProps = {
  currentIndex: number
  totalCount: number
}

export const ArticleCardHeader = ({ currentIndex, totalCount }: ArticleCardHeaderProps) => (
  <header className="flex items-center gap-2">
    <div className="rounded-full bg-white/50 bg-[url('/hologram-background.jpg')] bg-[length:220%] bg-center bg-no-repeat p-1 bg-blend-overlay">
      <img src="/star.svg" alt="star" />
    </div>
    <span
      className="text-primary-dark text-sm"
      aria-label={`Karta numer ${currentIndex} z ${totalCount}`}
    >
      {currentIndex} <span className="text-primary-ultra-light">/</span> {totalCount}
    </span>
  </header>
)
