import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { Plus } from 'lucide-react'

export default function AppHomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold mb-1">Добрый день!</h1>
        <p className="text-[var(--muted)]">Вот обзор вашего семейного бюджета</p>
      </div>

      {/* Finance Summary Card */}
      <Card className="p-5">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <p className="text-sm text-[var(--muted)] mb-1">Доходы</p>
            <p className="text-lg font-semibold text-[var(--success)]">150 000 ₽</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)] mb-1">Расходы</p>
            <p className="text-lg font-semibold text-[var(--danger)]">82 450 ₽</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)] mb-1">Осталось</p>
            <p className="text-lg font-semibold">67 550 ₽</p>
          </div>
        </div>

        <ProgressBar
          value={82450}
          max={120000}
          label="Бюджет месяца"
          showValue
          variant="warning"
        />
        <p className="text-xs text-[var(--muted)] mt-2">
          82 450 / 120 000 ₽
        </p>
      </Card>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Категории</h2>
        <div className="grid grid-cols-2 gap-3">
          {['Продукты', 'Дом', 'Автомобиль', 'Развлечения'].map((category) => (
            <Card key={category} className="p-4 interactive">
              <p className="font-medium">{category}</p>
              <p className="text-sm text-[var(--muted)] mt-1">0 ₽</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Последние операции</h2>
        <Card className="divide-y divide-[var(--border)]">
          {[
            { name: 'Продукты', amount: -2450, type: 'expense' },
            { name: 'Зарплата', amount: 150000, type: 'income' },
            { name: 'Кафе', amount: -1250, type: 'expense' },
          ].map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <span className="font-medium">{transaction.name}</span>
              <span
                className={`font-semibold ${
                  transaction.amount > 0
                    ? 'text-[var(--success)]'
                    : 'text-[var(--danger)]'
                }`}
              >
                {transaction.amount > 0 ? '+' : ''}
                {transaction.amount.toLocaleString('ru-RU')} ₽
              </span>
            </div>
          ))}
        </Card>
      </div>

      {/* Add Transaction Button */}
      <Button className="w-full" size="lg">
        <Plus size={20} className="mr-2" />
        Добавить операцию
      </Button>
    </div>
  )
}
