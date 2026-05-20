import './BinFlipCard.css'

export default function BinFlipCard({ image, artist, artwork, bio, flipped, onToggle }) {
  return (
    <button
      type="button"
      className={`bin-flip${flipped ? ' bin-flip--flipped' : ''}`}
      onClick={onToggle}
      aria-pressed={flipped}
      aria-label={flipped ? `Hide info for ${artist}` : `Show artist info for ${artist}`}
    >
      <div className="bin-flip__inner">
        <div className="bin-flip__face bin-flip__face--front">
          <img src={image} alt="" className="bin-flip__photo" />
        </div>
        <div className="bin-flip__face bin-flip__face--back">
          <p className="bin-flip__artist">{artist}</p>
          <p className="bin-flip__artwork">{artwork}</p>
          <p className="bin-flip__bio">{bio}</p>
        </div>
      </div>
    </button>
  )
}
