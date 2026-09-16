import { Link } from 'react-router-dom'
import { Wallet, Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/app" className="flex items-center gap-2 text-[var(--primary)]">
          <Wallet size={24} />
          <span className="text-lg font-semibold hidden sm:inline">Семейный бюджет</span>
        </Link>
        
        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full hover:bg-[var(--muted-background)] text-[var(--muted)] transition-colors"
            aria-label="Уведомления"
          >
            <Bell size={20} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-[var(--muted-background)] text-[var(--muted)] transition-colors"
            aria-label="Профиль"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
