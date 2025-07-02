import { HamburgerIcon } from '../../../assets/icons/HamburgerIcon'
import { cn } from '../../../misc/utils/cn'

type ActionIconProps = {
  onClick?: () => void
  icon?: React.ReactNode
} & React.ComponentProps<'button'>
export const ActionIcon = ({
  onClick,
  icon: Icon = <HamburgerIcon />,
  className,
  ...props
}: ActionIconProps) => {
  return (
    <button
      className={cn('border-line -mt-1 w-fit cursor-pointer border px-2 py-1.5', className)}
      style={{ borderRadius: 'var(--radius-sm)' }}
      onClick={onClick}
      {...props}
    >
      {Icon}
    </button>
  )
}
