import './WelcomeDialog.css'

const BODY = [
  'Turn your festival experience into something rewarding!',
  'Recycle cups, scan bins, earn points, unlock rewards, and join fun sustainable events, keep the festival clean whilst still having fun!',
  'You help us, we help you!',
  'In this app you can follow your personal points and keep track of your coupons and discounts. We also added a fun minigame, with of course, a reward at the end.',
  'Ready?',
]

export default function WelcomeDialog({ onClose }) {
  return (
    <div className="welcome-dialog" role="dialog" aria-modal="true" aria-labelledby="welcome-dialog-title">
      <div className="welcome-dialog__panel">
        <div className="welcome-dialog__content">
          <h2 id="welcome-dialog-title" className="welcome-dialog__title">
            Welcome to BlåSol!
          </h2>
          <div className="welcome-dialog__body">
            {BODY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="welcome-dialog__actions">
          <button type="button" className="welcome-dialog__cta" onClick={onClose}>
            let&apos;s start!
          </button>
        </div>
      </div>
    </div>
  )
}
