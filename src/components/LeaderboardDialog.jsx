import './WelcomeDialog.css'

export default function LeaderboardDialog({ onClose }) {
  return (
    <div
      className="welcome-dialog welcome-dialog--leaderboard"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leaderboard-dialog-title"
    >
      <div className="welcome-dialog__panel">
        <div className="welcome-dialog__content">
          <h2 id="leaderboard-dialog-title" className="welcome-dialog__title">
            What&apos;s the leaderboard about?
          </h2>
          <div className="welcome-dialog__body">
            <p>
              As a reward, after the festival ended, the person collecting most of the points over
              all gets two free tickets for next years BlåSol!
            </p>
            <p>The end of collection time is 7/06/2026 12.00 CET.</p>
          </div>
        </div>
        <div className="welcome-dialog__actions">
          <button type="button" className="welcome-dialog__cta" onClick={onClose}>
            collect!
          </button>
        </div>
      </div>
    </div>
  )
}
