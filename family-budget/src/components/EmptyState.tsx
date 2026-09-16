import { ReactNode } from 'react'
import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}

export default function EmptyState({ 
  icon, 
  title, 
  description, 
  action 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[var(--muted-background)] flex items-center justify-center mb-4 text-[var(--muted)]">
        {icon || <Inbox size={32} />}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && (
        <p className="text-[var(--muted)] mb-4 max-w-sm">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  )
}
