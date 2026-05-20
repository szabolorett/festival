import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppShell from '../components/AppShell'
import PageHeader from '../components/PageHeader'
import InfoButton from '../components/InfoButton'
import LeaderboardRow from '../components/LeaderboardRow'
import PointsProgressRing from '../components/PointsProgressRing'
import WelcomeDialog from '../components/WelcomeDialog'
import LeaderboardDialog from '../components/LeaderboardDialog'
import { useUserPoints } from '../context/UserPointsContext'
import { ASSETS } from '../assets/figmaAssets'
import { getProfileFirstName, loadProfilePhoto } from '../utils/profileStorage'
import './MainPage.css'

const DANISH_NICKNAMES = [
  'mads',
  'freja',
  'mulle',
  'tinne',
  'bassen',
  'pelle',
  'mik',
  'trunte',
  'noller',
  'sussi',
]

function pickRandomLeaders() {
  const names = [...DANISH_NICKNAMES].sort(() => Math.random() - 0.5).slice(0, 3)
  const progresses = [85, 75, 60]
  const avatars = [ASSETS.avatar1, ASSETS.avatar2, ASSETS.avatar3]
  return names.map((name, index) => ({
    name,
    progress: progresses[index],
    avatar: avatars[index],
  }))
}

export default function MainPage() {
  const { points, maxPoints } = useUserPoints()
  const location = useLocation()
  const [welcomeOpen, setWelcomeOpen] = useState(false)
  const [leaderboardOpen, setLeaderboardOpen] = useState(false)
  const [firstName, setFirstName] = useState(getProfileFirstName)
  const [profilePhoto, setProfilePhoto] = useState(loadProfilePhoto)
  const [leaders] = useState(pickRandomLeaders)

  useEffect(() => {
    setFirstName(getProfileFirstName())
    setProfilePhoto(loadProfilePhoto())
  }, [location.pathname, location.key])

  const openWelcome = () => {
    setLeaderboardOpen(false)
    setWelcomeOpen(true)
  }

  const openLeaderboard = () => {
    setWelcomeOpen(false)
    setLeaderboardOpen(true)
  }

  return (
    <AppShell bg="blue" footerTone="pink" activeTab="home" highlightCenter>
      <div className="main-page">
        <PageHeader
          title={`Hej ${firstName},`}
          tone="blue"
          showInfo
          onInfoClick={openWelcome}
        />

        {welcomeOpen && <WelcomeDialog onClose={() => setWelcomeOpen(false)} />}
        {leaderboardOpen && <LeaderboardDialog onClose={() => setLeaderboardOpen(false)} />}

        <section className="main-hero">
          <PointsProgressRing
            points={points}
            maxPoints={maxPoints}
            photoSrc={profilePhoto}
          />
        </section>

        <section className="main-points">
          <p className="main-points__label">You have collected</p>
          <p className="main-points__value">
            <span className="main-points__number">{points}</span> points so far
          </p>
          <Link to="/discounts" className="main-points__cta" aria-label="View your discounts">
            use them
            <img src={ASSETS.arrowIcon} alt="" className="main-points__arrow" />
          </Link>
        </section>

        <section className="main-leaderboard">
          <div className="main-leaderboard__head">
            <h2 className="main-leaderboard__title">leaderboard</h2>
            <InfoButton className="main-leaderboard__info" onClick={openLeaderboard} />
          </div>
          <ul className="main-leaderboard__list">
            {leaders.map((row, index) => (
              <LeaderboardRow key={`${row.name}-${index}`} {...row} />
            ))}
          </ul>
        </section>
      </div>
    </AppShell>
  )
}
