import { NavLink } from 'react-router-dom'
import { Home, Receipt, Target, BarChart3, Users, Settings } from 'lucide-react'

const navItems = [
  { path: '/app', icon: Home, label: 'Главная' },
  { path: '/app/transactions', icon: Receipt, label: 'Операции' },
  { path: '/app/goals', icon: Target, label: 'Цели' },
  { path: '/app/analytics', icon: BarChart3, label: 'Аналитика' },
  { path: '/app/family', icon: Users, label: 'Семья' },
]

export default function Sidebar() {
  return (
    <nav className="p-4">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--muted-background)]'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      
      {/* Settings at bottom */}
      <div className="mt-8 pt-4 border-t border-[var(--border)]">
        <NavLink
          to="/app/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-[var(--muted-background)]'
            }`
          }
        >
          <Settings size={20} />
          <span className="font-medium">Настройки</span>
        </NavLink>
      </div>
    </nav>
  )
}
