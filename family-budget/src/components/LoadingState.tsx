import { Loader2 } from 'lucide-react'

interface LoadingStateProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function LoadingState({ 
  message = 'Загрузка...', 
  size = 'md' 
}: LoadingStateProps) {
  const sizes = {
    sm: { icon: 16, text: 'text-sm' },
    md: { icon: 24, text: 'text-base' },
    lg: { icon: 32, text: 'text-lg' },
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <Loader2 className="animate-spin text-[var(--primary)] mb-3" size={sizes[size].icon} />
      {message && (
        <p className={`${sizes[size].text} text-[var(--muted)]`}>{message}</p>
      )}
    </div>
  )
}
