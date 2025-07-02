import { HamburgerIcon } from '../../../assets/icons/HamburgerIcon'

type ActionIconProps = {
  onClick?: () => void
  icon?: React.ReactNode
}
export const ActionIcon = ({ onClick, icon: Icon = <HamburgerIcon /> }: ActionIconProps) => {
  return (
    <button
      className="border-line -mt-1 w-fit cursor-pointer border px-2 py-1.5"
      style={{ borderRadius: 'var(--radius-sm)' }}
      onClick={onClick}
    >
      {Icon}
    </button>
  )
}
