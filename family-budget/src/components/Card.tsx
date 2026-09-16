import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles = 'rounded-xl overflow-hidden'
    
    const variants = {
      default: 'bg-[var(--card)] shadow-md',
      outlined: 'bg-[var(--card)] border border-[var(--border)]',
    }
    
    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card
