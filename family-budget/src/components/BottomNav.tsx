import { NavLink } from 'react-router-dom'
import { Home, Receipt, Target, BarChart3, Users } from 'lucide-react'

const navItems = [
  { path: '/app', icon: Home, label: 'Главная' },
  { path: '/app/transactions', icon: Receipt, label: 'Операции' },
  { path: '/app/goals', icon: Target, label: 'Цели' },
  { path: '/app/analytics', icon: BarChart3, label: 'Аналитика' },
  { path: '/app/family', icon: Users, label: 'Семья' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--card)] border-t border-[var(--border)] safe-area-bottom z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
