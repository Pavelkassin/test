import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function InvitePage() {
  const { token } = useParams()
  
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Приглашение в семью</h1>
      <p className="text-[var(--muted)] mb-6">Вас пригласили присоединиться к семейному бюджету</p>
      
      <Card className="p-6 mb-6 text-left">
        <p className="text-sm text-[var(--muted)] mb-2">Токен приглашения:</p>
        <code className="block bg-[var(--muted-background)] px-3 py-2 rounded-lg text-sm break-all">
          {token}
        </code>
      </Card>
      
      <div className="space-y-3">
        <Link to="/register">
          <Button fullWidth>Принять приглашение</Button>
        </Link>
        <Link to="/login">
          <Button fullWidth variant="outline">Войти в существующий аккаунт</Button>
        </Link>
      </div>
    </div>
  )
}
