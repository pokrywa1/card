import { Card } from '../../../../components/common/cards/Card'
import { ArticleCardContent } from './ArticleCardContent'
import { ArticleCardHeader } from './ArticleCardHeader'
import { ArticleCardMenuButton } from './ArticleCardMenuButton'

type ArticleCardProps = {
  currentIndex: number
  totalCount: number

  imageUrl: string

  title: string
  description: string

  likesCount: number
  score: number

  author: string

  onActionIconClick?: () => void
}
export const ArticleCard = ({
  currentIndex,
  totalCount,
  imageUrl,

  title,
  description,

  likesCount,
  score,

  author,

  onActionIconClick,
}: ArticleCardProps) => {
  const handleActionIconClick = () => {
    if (onActionIconClick) {
      return onActionIconClick()
    }

    console.log('Zrob cos')
  }
  return (
    <article className="border-line rounded-default max-w-card-max-width mx-auto border px-5 pt-2 pb-4">
      <Card className="translate-y-translate-y-card">
        <div className="flex flex-col gap-2">
          <ArticleCardHeader currentIndex={currentIndex} totalCount={totalCount} />

          <Card.Image src={imageUrl} alt="Avatar" />

          <ArticleCardContent
            title={title}
            description={description}
            likesCount={likesCount}
            score={score}
            author={author}
          />
        </div>
      </Card>

      <ArticleCardMenuButton onClick={handleActionIconClick} />
    </article>
  )
}
