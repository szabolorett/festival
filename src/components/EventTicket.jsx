import { ASSETS } from '../assets/figmaAssets'
import './EventTicket.css'

function HeartIcon({ filled }) {
  return (
    <svg
      className="event-ticket__heart-svg"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M11.48 19.74 2.2 10.46a5.48 5.48 0 0 1 0-7.75 5.48 5.48 0 0 1 7.75 0L11.48 4.24l1.53-1.53a5.48 5.48 0 0 1 7.75 7.75l-9.28 9.28Z"
        fill={filled ? 'var(--pink)' : 'transparent'}
        stroke="var(--pink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function EventTicket({
  time,
  title,
  tagline,
  isFavourite = false,
  onToggleFavourite,
}) {
  const [lineOne, lineTwo] = title

  return (
    <article className="event-ticket">
      <div className="event-ticket__panel" aria-hidden />

      <img
        src={ASSETS.eventPerforation}
        alt=""
        className="event-ticket__perforation"
        aria-hidden
      />

      <img src={ASSETS.eventCardLogo} alt="" className="event-ticket__brand" />

      <p className="event-ticket__time">{time}</p>

      <h2 className="event-ticket__title font-display">
        <span>{lineOne}</span>
        <span>{lineTwo}</span>
      </h2>

      <button
        type="button"
        className={`event-ticket__like${isFavourite ? ' event-ticket__like--active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavourite?.()
        }}
        aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        aria-pressed={isFavourite}
      >
        <HeartIcon filled={isFavourite} />
      </button>

      <div className="event-ticket__tagline-wrap">
        <div className="event-ticket__tagline-rotate">
          <div className="event-ticket__tagline">
            {tagline.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
