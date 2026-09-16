import { Outlet, Link } from 'react-router-dom'
import { Wallet } from 'lucide-react'

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[var(--primary)]">
            <Wallet size={28} />
            <span className="text-xl font-semibold">Семейный бюджет</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-6 text-center text-[var(--muted)] text-sm">
        <p>&copy; 2025 Семейный бюджет. Все права защищены.</p>
      </footer>
    </div>
  )
}
