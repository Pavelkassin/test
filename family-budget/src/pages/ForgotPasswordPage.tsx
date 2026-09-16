import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

export default function ForgotPasswordPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Восстановление пароля</h1>
      <p className="text-[var(--muted)] mb-6">Введите email для восстановления доступа</p>
      
      <form className="space-y-4">
        <Input 
          type="email" 
          label="Email" 
          placeholder="you@example.com"
          required
        />
        
        <Button type="submit" fullWidth>Отправить инструкцию</Button>
      </form>
      
      <p className="mt-6 text-center text-sm">
        <Link to="/login" className="text-[var(--primary)] hover:underline">
          Вернуться ко входу
        </Link>
      </p>
    </div>
  )
}
