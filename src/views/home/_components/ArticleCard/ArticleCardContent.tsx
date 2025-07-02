import { DotDivider } from '../../../../components/common/special/DotDivider'
import { ArticleCardFooter } from './ArticleCardFooter'
import { ArticleCardStats } from './ArticleCardStats'

type ArticleCardContentProps = {
  title: string
  description: string
  likesCount: number
  score: number
  author: string
}

export const ArticleCardContent = ({
  title,
  description,
  likesCount,
  score,
  author,
}: ArticleCardContentProps) => (
  <div className="px-1 py-2">
    <div className="flex flex-col font-semibold">
      <h2 className="text-primary-dark" style={{ fontSize: 'var(--font-size-sm-plus)' }}>
        {title}
      </h2>
      <p
        className="text-primary-light font-medium uppercase"
        style={{ fontSize: 'var(--font-size-xs-plus)' }}
      >
        {description}
      </p>

      <ArticleCardStats likesCount={likesCount} score={score} />

      {/* <div
        className="border-primary my-3 border-dotted"
        style={{ borderWidth: 'var(--border-width-dotted)' }}
      /> */}

      <DotDivider className="my-4" />

      <ArticleCardFooter author={author} />
    </div>
  </div>
)
