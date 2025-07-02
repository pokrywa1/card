type ArticleCardFooterProps = {
  author: string
}

export const ArticleCardFooter = ({ author }: ArticleCardFooterProps) => (
  <footer>
    <p className="text-primary-light" style={{ fontSize: 'var(--font-size-xs-plus)' }}>
      by <cite className="text-primary-dark pl-0.5 not-italic">{author}</cite>
    </p>
  </footer>
)
