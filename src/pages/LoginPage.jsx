import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    navigate('/home')
  }

  return (
    <div className="login-page">
      <Link to="/auth" className="login-page__logo-link">
        <img src={ASSETS.loginLogo} alt="BLÅ SOL" className="login-page__logo" />
      </Link>

      <h1 className="login-page__title font-display">LOG IN</h1>

      <p className="login-page__signup-prompt">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="login-page__signup-link">
          create one!
        </Link>
      </p>

      <form className="login-page__form" onSubmit={handleSubmit}>
        <div className="login-field login-field--email">
          <label htmlFor="login-email">E-mail address</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
        </div>

        <div className="login-field login-field--password">
          <label htmlFor="login-password">Password</label>
          <div className="login-field__input-row">
            <img src={ASSETS.loginLockIcon} alt="" className="login-field__lock" aria-hidden />
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
          </div>
        </div>

        <button type="submit" className="login-page__submit font-display">
          LOG IN
        </button>
      </form>

      <p className="login-page__divider font-display">or continue with</p>

      <div className="login-page__social">
        <button type="button" className="login-page__social-btn" aria-label="Continue with Apple">
          <img src={ASSETS.socialApple} alt="" />
        </button>
        <button type="button" className="login-page__social-btn" aria-label="Continue with Google">
          <img src={ASSETS.socialGoogle} alt="" />
        </button>
        <button type="button" className="login-page__social-btn" aria-label="Continue with Facebook">
          <img src={ASSETS.socialFacebook} alt="" />
        </button>
      </div>
    </div>
  )
}
