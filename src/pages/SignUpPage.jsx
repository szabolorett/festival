import { Link, useNavigate } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './SignUpPage.css'

export default function SignUpPage() {
  const navigate = useNavigate()

  return (
    <div className="signup-page">
      <img
        src={ASSETS.signUpLogo}
        alt="BLÅ SOL"
        className="signup-page__logo"
        width={101.49}
        height={96}
      />

      <h1 className="signup-page__title font-display">SIGN UP</h1>

      <p className="signup-page__signin-prompt">
        Already have an account?{' '}
        <Link to="/login" className="signup-page__signin-link">
          log in
        </Link>
      </p>

      <form
        className="signup-page__form"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/home')
        }}
      >
        <div className="signup-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="signup-field">
          <label htmlFor="email">E-mail address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="signup-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+45" />
        </div>

        <div className="signup-field signup-field--password">
          <label htmlFor="password">Create password</label>
          <div className="signup-field__password-wrap">
            <img src={ASSETS.lockIcon} alt="" className="signup-field__lock" aria-hidden />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder=" "
            />
          </div>
        </div>

        <button type="submit" className="signup-page__submit font-display">
          SIGN UP
        </button>
      </form>

      <p className="signup-page__divider font-display">or continue with</p>

      <div className="signup-page__social">
        <button type="button" className="signup-page__social-btn" aria-label="Continue with Apple">
          <img src={ASSETS.socialApple} alt="" />
        </button>
        <button type="button" className="signup-page__social-btn" aria-label="Continue with Google">
          <img src={ASSETS.socialGoogle} alt="" />
        </button>
        <button type="button" className="signup-page__social-btn" aria-label="Continue with Facebook">
          <img src={ASSETS.socialFacebook} alt="" />
        </button>
      </div>
    </div>
  )
}
