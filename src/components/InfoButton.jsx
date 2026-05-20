import { ASSETS } from '../assets/figmaAssets'
import './InfoButton.css'

export default function InfoButton({ className = '', onClick, icon = ASSETS.infoIcon }) {
  return (
    <button
      type="button"
      className={`info-btn${className ? ` ${className}` : ''}`}
      aria-label="More information"
      onClick={onClick}
    >
      <img src={icon} alt="" className="info-btn__icon" />
    </button>
  )
}
