import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

export default function LoginPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Вход</h1>
      <p className="text-[var(--muted)] mb-6">Войдите в свой аккаунт</p>
      
      <form className="space-y-4">
        <Input 
          type="email" 
          label="Email" 
          placeholder="you@example.com"
          required
        />
        <Input 
          type="password" 
          label="Пароль" 
          placeholder="••••••••"
          required
        />
        
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm text-[var(--primary)] hover:underline">
            Забыли пароль?
          </Link>
        </div>
        
        <Button type="submit" fullWidth>Войти</Button>
      </form>
      
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        Нет аккаунта?{' '}
        <Link to="/register" className="text-[var(--primary)] hover:underline">
          Зарегистрироваться
        </Link>
      </p>
    </div>
  )
}
