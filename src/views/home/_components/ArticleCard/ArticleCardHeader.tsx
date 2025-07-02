type ArticleCardHeaderProps = {
  currentIndex: number
  totalCount: number
}

export const ArticleCardHeader = ({ currentIndex, totalCount }: ArticleCardHeaderProps) => (
  <header className="flex items-center gap-2">
    <div>
      <img src="/hologram.svg" alt="" />
    </div>
    <span
      className="text-primary-dark text-sm"
      aria-label={`Karta numer ${currentIndex} z ${totalCount}`}
    >
      {currentIndex} <span className="text-primary-ultra-light">/</span> {totalCount}
    </span>
  </header>
)
