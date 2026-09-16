import { AlertTriangle } from 'lucide-react'
import Button from './Button'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export default function ErrorState({ 
  message = 'Произошла ошибка', 
  onRetry 
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[var(--danger)]/10 flex items-center justify-center mb-4 text-[var(--danger)]">
        <AlertTriangle size={32} />
      </div>
      <h3 className="text-lg font-semibold mb-1">Ошибка</h3>
      <p className="text-[var(--muted)] mb-4 max-w-sm">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          Попробовать снова
        </Button>
      )}
    </div>
  )
}
