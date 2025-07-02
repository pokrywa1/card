import { ActionIcon } from '../../../../components/common/buttons/ActionIcon'

type ArticleCardMenuButtonProps = {
  onClick?: () => void
}
export const ArticleCardMenuButton = ({ onClick }: ArticleCardMenuButtonProps) => (
  <ActionIcon onClick={onClick} />
)
