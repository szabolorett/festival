import { Link } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './AuthLandingPage.css'

export default function AuthLandingPage() {
  return (
    <div className="auth-landing">
      <img src={ASSETS.logoWelcome} alt="BLÅ SOL" className="auth-landing__logo" />
      <h1 className="auth-landing__title font-display">Hi there!</h1>
      <p className="auth-landing__subtitle font-display">to continue,</p>
      <Link to="/signup" className="btn-pill btn-pill--pink btn-pill--lg auth-landing__btn">
        SIGN UP
      </Link>
      <p className="auth-landing__or font-display">or</p>
      <Link to="/login" className="btn-pill btn-pill--pink btn-pill--lg auth-landing__btn">
        LOG IN
      </Link>
    </div>
  )
}
