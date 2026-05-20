import AppShell from '../components/AppShell'
import DiscountCoupon from '../components/DiscountCoupon'
import './DiscountsPage.css'

const DISCOUNTS = [
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'unlocked' },
  { offer: '10% OFF', category: 'ALL DRINKS', state: 'unlocked' },
  { offer: '15% OFF', category: 'ALL merch', state: 'unlocked' },
  { offer: 'ONE', category: 'FREE BEER', state: 'unlocked', compact: true },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'locked' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'used' },
  { offer: '15% OFF', category: 'ALL DRINKS', state: 'used' },
]

export default function DiscountsPage() {
  return (
    <AppShell bg="blue" footerTone="pink" footerSlots="ice" activeTab="events">
      <header className="discounts-header">
        <h1 className="discounts-header__title font-display">DISCOUNTS</h1>
      </header>

      <div className="discounts-list">
        {DISCOUNTS.map((coupon, index) => (
          <DiscountCoupon key={`${coupon.offer}-${coupon.category}-${index}`} {...coupon} />
        ))}
      </div>
    </AppShell>
  )
}
