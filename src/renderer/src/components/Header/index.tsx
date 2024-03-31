import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { CaretDoubleRight, Code, TrashSimple } from 'phosphor-react'

import * as Breadcrumbs from './Breadcrumbs'

interface HeaderProps {
  isSidebarOpen: boolean
}

export function Header({ isSidebarOpen }: HeaderProps) {
  const isMacOS = process.platform === 'darwin'

  return (
    <div
      id="header"
      className={clsx(
        'duration-250 flex items-center gap-4 border-b border-rotion-600 px-6 py-[1.125rem] leading-tight transition-all region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen,
        },
      )}
    >
      <Collapsible.Trigger
        className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </Collapsible.Trigger>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="h-4 w-4 text-pink-500" />
            Estrutura técnica
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.HiddenItems />
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
        </Breadcrumbs.Root>

        <div className="inline-flex region-no-drag">
          <button className="inline-flex items-center gap-1 text-sm text-rotion-100 hover:text-rotion-50">
            <TrashSimple className="h-4 w-4" />
            Apagar
          </button>
        </div>
      </>
    </div>
  )
}
