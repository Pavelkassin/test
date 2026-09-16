import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Семейный бюджет</h1>
        <p className="text-[var(--muted)] mb-6">
          Приложение для управления семейным бюджетом. Планируйте расходы, ставьте цели и контролируйте финансы вместе.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/login">
            <Button fullWidth>Войти</Button>
          </Link>
          <Link to="/register">
            <Button fullWidth variant="outline">Зарегистрироваться</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
