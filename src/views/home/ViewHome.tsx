import { ArticleCard } from './_components/ArticleCard/ArticleCard'

export const ViewHome = () => {
  return (
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
  )
}
