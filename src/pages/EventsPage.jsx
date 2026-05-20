import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppShell from '../components/AppShell'
import EventTicket from '../components/EventTicket'
import { ASSETS } from '../assets/figmaAssets'
import './EventsPage.css'

const FAVOURITES_STORAGE_KEY = 'festival-event-favourites'

function loadFavourites() {
  try {
    const stored = localStorage.getItem(FAVOURITES_STORAGE_KEY)
    return stored ? new Set(JSON.parse(stored)) : new Set()
  } catch {
    return new Set()
  }
}

const EVENTS = [
  { id: 'tarp-wallet', time: '11:00 - Chill zone', title: ['Tarp', 'wallet'], tagline: ['Turn waste', 'into something', 'useful'] },
  { id: 'coil-basket', time: '12:30 - Bla sol stage', title: ['Coil', 'basket'], tagline: ['Reweave', 'the', 'throwaway'] },
  { id: 'bottle-carrier', time: '13:15 - Thor stage', title: ['Bottle', 'carrier'], tagline: ['Carry your', 'cup, not', 'waste'] },
  { id: 'recycled-jewelry', time: '14:30 - Bla valley', title: ['Recycled', 'jewelry'], tagline: ['Small scraps,', 'bold', 'style'] },
  { id: 'festival-charm-bar', time: '16:00 - Byens stage', title: ['Festival', 'charm bar'], tagline: ['Personalise', 'your festival', 'look'] },
  { id: 'patchwork-banner', time: '16:30 - Sparekassen stage', title: ['Patchwork', 'banner'], tagline: ['Stitch your', 'mark onto', 'the festival'] },
  { id: 'bottle-cap-mosaic', time: '12:00 - Food yard', title: ['Bottle cap', 'mosaic'], tagline: ['Build art', 'piece by', 'piece'] },
  { id: 'tent-fabric-fashion', time: '14:00 - Chill zone', title: ['Tent fabric', 'fashion'], tagline: ['Festival fashion', 'from fabric', 'waste'] },
  { id: 'junk-to-jiggle', time: '17:00 - Bla valley', title: ['Junk to', 'jiggle'], tagline: ['Let waste', 'make', 'music'] },
]

export default function EventsPage() {
  const { pathname } = useLocation()
  const filter = pathname.endsWith('/favourites') ? 'fav' : 'all'
  const [favourites, setFavourites] = useState(loadFavourites)

  const toggleFavourite = (id) => {
    setFavourites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify([...next]))
      return next
    })
  }

  const visibleEvents =
    filter === 'fav' ? EVENTS.filter((ev) => favourites.has(ev.id)) : EVENTS

  return (
    <AppShell bg="ice" footerTone="pink" footerActive="navy" activeTab="events">
      <header className="events-header">
        <h1 className="events-header__title font-display">events</h1>
      </header>

      <div className="events-filters">
        <div className="events-filters__chip events-filters__chip--filter">
          <img src={ASSETS.filterIcon} alt="" className="events-filters__filter-icon" aria-hidden />
          <span>Filtered by:</span>
        </div>

        <Link
          to="/events"
          className={`events-filters__chip events-filters__chip--all${filter === 'all' ? ' events-filters__chip--all-active' : ''}`}
        >
          All events
        </Link>

        <Link
          to="/events/favourites"
          className={`events-filters__chip events-filters__chip--fav${filter === 'fav' ? ' events-filters__chip--fav-active' : ''}`}
        >
          Favourites
        </Link>
      </div>

      <div
        className={`events-list${filter === 'fav' && visibleEvents.length === 0 ? ' events-list--empty' : ''}`}
      >
        {filter === 'fav' && visibleEvents.length === 0 ? (
          <p className="events-empty font-display">
            You have not liked
            <br />
            anything yet
          </p>
        ) : (
          visibleEvents.map((ev) => (
            <EventTicket
              key={ev.id}
              {...ev}
              isFavourite={favourites.has(ev.id)}
              onToggleFavourite={() => toggleFavourite(ev.id)}
            />
          ))
        )}
      </div>
    </AppShell>
  )
}
