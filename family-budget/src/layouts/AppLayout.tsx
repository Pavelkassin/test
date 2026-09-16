import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Sidebar from '../components/Sidebar'

export default function AppLayout() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Always visible */}
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop only */}
        {isDesktop && (
          <aside className="w-64 border-r border-[var(--border)] bg-[var(--card)] flex-shrink-0">
            <Sidebar />
          </aside>
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-4">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Bottom Navigation - Mobile only */}
      {!isDesktop && <BottomNav />}
    </div>
  )
}
