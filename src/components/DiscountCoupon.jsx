import { ASSETS } from '../assets/figmaAssets'
import './DiscountCoupon.css'

const CORNERS = [
  ['tl', { top: 18, left: 0 }],
  ['tr', { top: 17, left: 360 }],
  ['bl', { top: 163, left: 0 }],
  ['br', { top: 163, left: 359 }],
]

const CORNERS_COMPACT = [
  ['tl', { top: 15, left: 0 }],
  ['tr', { top: 14, left: 360 }],
  ['bl', { top: 136, left: 0 }],
  ['br', { top: 136, left: 359 }],
]

const DOTS = [63, 83, 103, 123, 143]
const DOTS_COMPACT = [52, 69, 86, 103, 120]

export default function DiscountCoupon({
  offer,
  category,
  state = 'unlocked',
  compact = false,
}) {
  const locked = state === 'locked'
  const used = state === 'used'
  const corners = compact ? CORNERS_COMPACT : CORNERS
  const dots = compact ? DOTS_COMPACT : DOTS

  return (
    <article
      className={`discount-coupon discount-coupon--${state}${compact ? ' discount-coupon--compact' : ''}`}
    >
      <div className="discount-coupon__body">
        <div className="discount-coupon__fill" aria-hidden />

        {corners.map(([key, pos]) => (
          <img
            key={key}
            src={ASSETS.couponCorner}
            alt=""
            className={`discount-coupon__corner discount-coupon__corner--${key}`}
            style={{ top: pos.top, left: pos.left }}
            aria-hidden
          />
        ))}

        {dots.map((top) => (
          <img
            key={`l-${top}`}
            src={ASSETS.couponDot}
            alt=""
            className="discount-coupon__dot discount-coupon__dot--left"
            style={{ top }}
            aria-hidden
          />
        ))}

        {dots.map((top) => (
          <img
            key={`r-${top}`}
            src={ASSETS.couponDot}
            alt=""
            className="discount-coupon__dot discount-coupon__dot--right"
            style={{ top }}
            aria-hidden
          />
        ))}

        <div className="discount-coupon__frame" aria-hidden />

        <p className="discount-coupon__label">
          <span>DISCOUNT</span>
        </p>

        <img
          src={ASSETS.couponDivider}
          alt=""
          className="discount-coupon__divider discount-coupon__divider--left"
          aria-hidden
        />
        <img
          src={ASSETS.couponDivider}
          alt=""
          className="discount-coupon__divider discount-coupon__divider--right"
          aria-hidden
        />

        <p className="discount-coupon__offer">{offer}</p>

        <div className="discount-coupon__pill">
          <span className="discount-coupon__category font-display-sc">{category}</span>
        </div>

        <img src={ASSETS.couponInfoIcon} alt="" className="discount-coupon__info" aria-hidden />

        <div className="discount-coupon__barcode-wrap" aria-hidden>
          <img src={ASSETS.couponBarcode} alt="" className="discount-coupon__barcode-bg" />
          <img src={ASSETS.couponBarcodeData} alt="" className="discount-coupon__barcode-data" />
        </div>
      </div>

      {locked && (
        <img src={ASSETS.couponLock} alt="" className="discount-coupon__lock" aria-hidden />
      )}

      {used && (
        <div className="discount-coupon__used" aria-hidden>
          <span className="discount-coupon__used-band" />
          <span className="discount-coupon__used-text">USED used used used used</span>
        </div>
      )}
    </article>
  )
}
