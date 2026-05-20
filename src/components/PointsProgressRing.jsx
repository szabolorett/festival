import { useMemo, useState } from 'react'
import { ASSETS } from '../assets/figmaAssets'
import './PointsProgressRing.css'

const SIZE = 342
const END_RADIUS = 25
const STROKE = END_RADIUS * 2
const RADIUS = (SIZE - STROKE) / 2
const CENTER = SIZE / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Figma layers: POINTS (base ring) + pink arc overlay.
 * Center: Image7 (176:1856) — photo tap toggles personal ID (#7267).
 */
export default function PointsProgressRing({
  points,
  maxPoints,
  photoSrc = ASSETS.profilePhoto,
  personalId = '#7267',
  photoAlt = 'Your profile',
}) {
  const [showId, setShowId] = useState(false)
  const progress = useMemo(
    () => Math.min(Math.max(points / maxPoints, 0), 1),
    [points, maxPoints],
  )
  const dashOffset = CIRCUMFERENCE * (1 - progress)

  return (
    <div className="points-progress-ring">
      <img src={ASSETS.pointsRing} alt="" className="points-progress-ring__track" aria-hidden />

      <svg
        className="points-progress-ring__svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden
      >
        <circle
          className="points-progress-ring__progress"
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--pink)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform={`rotate(90 ${CENTER} ${CENTER})`}
        />
      </svg>

      <button
        type="button"
        className={`points-progress-ring__pfp${showId ? ' points-progress-ring__pfp--id' : ''}`}
        onClick={() => setShowId((v) => !v)}
        aria-pressed={showId}
        aria-label={showId ? 'Show profile photo' : `Show personal ID ${personalId}`}
      >
        <span className="points-progress-ring__pfp-frame">
          <img src={photoSrc} alt={photoAlt} className="points-progress-ring__pfp-img" />
          {showId && (
            <>
              <span className="points-progress-ring__pfp-overlay" aria-hidden />
              <span className="points-progress-ring__pfp-id font-display">{personalId}</span>
            </>
          )}
        </span>
      </button>
    </div>
  )
}
