import clsx from 'clsx'
import { DotsThree } from 'phosphor-react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'group flex items-center gap-2 rounded px-3 py-1 text-sm text-rotion-100 hover:bg-rotion-700 hover:text-rotion-50',
          {
            'bg-rotion-700': isActive,
          },
        )
      }}
    >
      <span className="flex-1 truncate">{children}</span>

      <div className="ml-auto flex h-full items-center text-rotion-100 group-hover:visible">
        <button className="rounded-sm px-px hover:bg-rotion-500">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </NavLink>
  )
}
