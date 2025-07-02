import { cn } from '../../../misc/utils/cn'

type DotDividerProps = {
  className?: string
  color?: string
}

export const DotDivider = ({ className = '', color = '#b7bbff' }: DotDividerProps) => {
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='9' height='4'><circle cx='2' cy='2' r='1.2' fill='${color}'/></svg>`,
  )

  return (
    <div
      className={cn(`h-1 w-full`, className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}
