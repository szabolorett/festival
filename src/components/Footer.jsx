import { NavLink } from 'react-router-dom'
import { ASSETS } from '../assets/figmaAssets'
import './Footer.css'

const TABS = [
  { id: 'events', to: '/events', icon: ASSETS.iconSunrise, label: 'Events' },
  { id: 'map', to: '/map', icon: ASSETS.iconMap, label: 'Map' },
  { id: 'home', to: '/home', logo: true, label: 'Home' },
  { id: 'scan', to: '/scan', icon: ASSETS.iconDice, label: 'Bin hunt' },
  { id: 'profile', to: '/profile', icon: ASSETS.iconSettings, label: 'Profile' },
]

export default function Footer({
  activeTab,
  tone = 'pink',
  slots = 'default',
  activeStyle = 'ice',
  highlightCenter = false,
}) {
  const invertedSlots = activeStyle === 'navy' && tone === 'pink'
  const blueActive = activeStyle === 'blue' && tone === 'pink'

  return (
    <nav
      className={[
        `app-footer app-footer--${tone}`,
        invertedSlots ? ' app-footer--inverted-active' : '',
        blueActive ? ' app-footer--active-blue' : '',
        highlightCenter ? ' app-footer--highlight-center' : '',
      ]
        .filter(Boolean)
        .join('')}
      aria-label="Main"
    >
      {TABS.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.to}
          end={tab.id === 'home'}
          className={({ isActive }) => {
            const on = isActive || activeTab === tab.id
            const allIce = slots === 'ice'
            return [
              'app-footer__slot',
              on && !allIce ? 'app-footer__slot--active' : '',
              allIce ? 'app-footer__slot--ice' : '',
              tab.logo ? 'app-footer__slot--logo' : '',
              tab.id === 'scan' ? 'app-footer__slot--scan' : '',
            ]
              .filter(Boolean)
              .join(' ')
          }}
        >
          {tab.logo ? (
            <img src={ASSETS.footerLogo} alt="" className="app-footer__logo" />
          ) : (
            <img src={tab.icon} alt="" className="app-footer__icon" />
          )}
          <span className="sr-only">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
