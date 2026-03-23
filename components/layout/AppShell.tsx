import {ReactNode} from 'react'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({children}: AppShellProps) {
  return <div className="min-h-screen bg-zinc-950 text-zinc-50">{children}</div>
}
