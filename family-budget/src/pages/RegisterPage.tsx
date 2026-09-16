import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

export default function RegisterPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Регистрация</h1>
      <p className="text-[var(--muted)] mb-6">Создайте новый аккаунт</p>
      
      <form className="space-y-4">
        <Input 
          type="text" 
          label="Имя" 
          placeholder="Иван"
          required
        />
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
        
        <Button type="submit" fullWidth>Зарегистрироваться</Button>
      </form>
      
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="text-[var(--primary)] hover:underline">
          Войти
        </Link>
      </p>
    </div>
  )
}
