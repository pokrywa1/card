import { FireIcon } from '../../../../assets/icons/FireIcon'
import { ShieldIcon } from '../../../../assets/icons/ShieldIcon'

type ArticleCardStatsProps = {
  likesCount: number
  score: number
}

export const ArticleCardStats = ({ likesCount, score }: ArticleCardStatsProps) => (
  <div className="mt-2 grid grid-cols-2 text-sm">
    <StatItem
      icon={<FireIcon width={20} height={20} className="fill-secondary" />}
      value={likesCount}
      colorClass="text-secondary"
    />
    <StatItem
      icon={<ShieldIcon width={20} height={20} className="fill-primary" />}
      value={score}
      colorClass="text-primary"
    />
  </div>
)

type StatItemProps = {
  icon: React.ReactNode
  value: number
  colorClass: string
}

const StatItem = ({ icon, value, colorClass }: StatItemProps) => (
  <div className={`${colorClass} flex items-center gap-1`}>
    {icon}
    <span>{formatNumber(value)}</span>
  </div>
)

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('pl-PL').format(value)
}
