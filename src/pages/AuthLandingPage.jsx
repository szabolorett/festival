import { Link } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './AuthLandingPage.css'

export default function AuthLandingPage() {
  return (
    <div className="app-frame app-frame--ice app-frame--welcome">
      <div className="auth-landing">
        <div className="auth-landing__logo-wrap">
          <img
            src={ASSETS.logoRaised}
            alt="BLÅ SOL"
            className="auth-landing__logo"
            width={281}
            height={266}
          />
        </div>

        <h1 className="auth-landing__title font-display">Hi there!</h1>
        <p className="auth-landing__subtitle font-display">to continue,</p>

        <Link to="/signup" className="auth-landing__btn auth-landing__btn--signup font-display">
          SIGN UP
        </Link>

        <p className="auth-landing__or font-display">or</p>

        <Link to="/login" className="auth-landing__btn auth-landing__btn--login font-display">
          LOG IN
        </Link>
      </div>
    </div>
  )
}
