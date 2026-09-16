import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import InvitePage from '../pages/InvitePage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import AppHomePage from '../pages/AppHomePage'
import TransactionsPage from '../pages/TransactionsPage'
import GoalsPage from '../pages/GoalsPage'
import AnalyticsPage from '../pages/AnalyticsPage'
import FamilyPage from '../pages/FamilyPage'
import SettingsPage from '../pages/SettingsPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* Auth Layout Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/invite/:token" element={<InvitePage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          
          {/* App Layout Routes */}
          <Route element={<AppLayout />}>
            <Route path="/app" element={<AppHomePage />} />
            <Route path="/app/transactions" element={<TransactionsPage />} />
            <Route path="/app/goals" element={<GoalsPage />} />
            <Route path="/app/analytics" element={<AnalyticsPage />} />
            <Route path="/app/family" element={<FamilyPage />} />
            <Route path="/app/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
