import { Card } from '../../components/common/cards/Card'
import { ArticleCard } from './_components/ArticleCard/ArticleCard'

export const ViewHome = () => {
  return (
    <div className="flex gap-8">
      <ArticleCard
        currentIndex={13}
        totalCount={28}
        imageUrl="/card-image.png"
        title="Endless 🏖🍹 Summer!"
        description="LET’S THE PARTY STARTED 🌞"
        likesCount={74}
        score={12050}
        author="gloria-spritz"
      />

      <Card>Przykładowy tekst</Card>
    </div>
  )
}
