import './BinHuntDialog.css'

export default function BinHuntDialog({ onClose }) {
  return (
    <div
      className="bin-hunt-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bin-hunt-dialog-title"
    >
      <div className="bin-hunt-dialog__panel">
        <div className="bin-hunt-dialog__content">
          <h2 id="bin-hunt-dialog-title" className="bin-hunt-dialog__title">
            Bin hunt - a minigame
          </h2>
          <div className="bin-hunt-dialog__body">
            <p className="bin-hunt-dialog__lead">Find all 10 artist bins, score 20% off!</p>
            <p>
              Local artists have designed 10 one-of-a-kind bins hidden around the festival. Spot
              one? Scan the QR code and it&apos;s yours. Collect all 10 and you&apos;ll unlock a
              20% discount on your next purchase.
            </p>
          </div>
        </div>
        <div className="bin-hunt-dialog__actions">
          <button type="button" className="bin-hunt-dialog__cta" onClick={onClose}>
            let&apos;s search!
          </button>
        </div>
      </div>
    </div>
  )
}
