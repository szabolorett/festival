import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './LoadingPage.css'

const RISE_START_MS = 700
const RECOLOR_AFTER_RISE_MS = 1100
const NAV_AFTER_RISE_MS = 2500

export default function LoadingPage() {
  const navigate = useNavigate()
  const [risen, setRisen] = useState(false)
  const [recolor, setRecolor] = useState(false)
  const timersRef = useRef([])
  const finishedRef = useRef(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const goToAuth = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    clearTimers()
    navigate('/auth')
  }, [clearTimers, navigate])

  const scheduleFlow = useCallback(
    (riseStart = RISE_START_MS) => {
      clearTimers()
      setRisen(false)
      setRecolor(false)

      timersRef.current.push(
        setTimeout(() => setRisen(true), riseStart),
        setTimeout(() => setRecolor(true), riseStart + RECOLOR_AFTER_RISE_MS),
        setTimeout(goToAuth, riseStart + NAV_AFTER_RISE_MS),
      )
    },
    [clearTimers, goToAuth],
  )

  useEffect(() => {
    scheduleFlow()
    return clearTimers
  }, [scheduleFlow, clearTimers])

  const handleActivate = () => {
    if (finishedRef.current) return
    if (!risen) {
      scheduleFlow(0)
      return
    }
    goToAuth()
  }

  const pageClass = [
    'loading-page',
    risen ? 'loading-page--risen' : '',
    recolor ? 'loading-page--recolor' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const Wrapper = 'div'

  return (
    <Wrapper
      className={pageClass}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleActivate()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Loading. Tap to continue."
    >
      <img
        src={risen ? ASSETS.logoRaised : ASSETS.logo}
        alt="BLÅ SOL"
        className="loading-page__logo"
      />
      <p className="loading-page__hint">Tap to continue</p>
    </Wrapper>
  )
}
