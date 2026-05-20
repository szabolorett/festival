import { useState } from 'react'
import AppShell from '../components/AppShell'
import PageHeader from '../components/PageHeader'
import { ASSETS } from '../assets/figmaAssets'
import './MapPage.css'

const MAP_BG_LOCAL = `${import.meta.env.BASE_URL}map-background.png`

const MAP_LABELS = [
  { text: 'VIP', className: 'map-label--vip map-label--lg' },
  { text: 'vidunderblå', className: 'map-label--vidunderbla map-label--sm map-label--center' },
  { lines: ['handicap', 'repos'], className: 'map-label--handicap map-label--sm map-label--center' },
  { text: 'lounge', className: 'map-label--lounge map-label--sm map-label--center' },
  { text: 'birkelunden', className: 'map-label--birkelunden map-label--sm' },
  { text: 'spise', className: 'map-label--spise map-label--sm map-label--center' },
  { text: 'dragonen', className: 'map-label--dragonen map-label--sm map-label--center' },
  { text: 'bar', className: 'map-label--bar map-label--sm map-label--center' },
  { lines: ['byfesten', 'telt'], className: 'map-label--byfesten map-label--sm map-label--center' },
  { text: 'wc', className: 'map-label--wc-left map-label--sm' },
  { text: 'wc', className: 'map-label--wc-mid map-label--sm' },
]

const MAP_BINS = [
  { id: 'bin-1', left: 192, top: 617 },
  { id: 'bin-2', left: 209, top: 539 },
  { id: 'bin-3', left: 322, top: 600 },
  { id: 'bin-4', left: 370, top: 506 },
  { id: 'bin-5', left: 286, top: 523 },
  { id: 'bin-6', left: 267, top: 415 },
  { id: 'bin-7', left: 340, top: 320 },
  { id: 'bin-8', left: 245, top: 294 },
  { id: 'bin-9', left: 166, top: 418 },
  { id: 'bin-10', left: 56, top: 322 },
  { id: 'bin-11', left: 206, top: 200 },
  { id: 'bin-12', left: 379, top: 128 },
]

export default function MapPage() {
  const [showBins, setShowBins] = useState(false)

  return (
    <AppShell bg="navy" footerTone="navy" activeTab="map" scrollClassName="app-scroll--map">
      <div className="map-page">
        <PageHeader title="map" tone="navy" align="center" />

        <div className="map-stage">
          <img
            src={ASSETS.mapBackground}
            alt=""
            className="map-stage__art"
            aria-hidden
            onError={(e) => {
              const img = e.currentTarget
              if (img.dataset.fallback) return
              img.dataset.fallback = 'local'
              img.src = MAP_BG_LOCAL
            }}
          />

          {MAP_LABELS.map((label) => (
            <p key={label.className} className={`map-label ${label.className}`}>
              {label.lines ? (
                label.lines.map((line) => <span key={line}>{line}</span>)
              ) : (
                label.text
              )}
            </p>
          ))}

          <div className="map-entrance" aria-label="Indgang">
            <img
              src={ASSETS.mapEntranceLogo}
              alt=""
              className="map-entrance__logo"
              aria-hidden
            />
            <img
              src={ASSETS.mapEntranceMarker}
              alt=""
              className="map-entrance__dot"
              aria-hidden
            />
            <p className="map-entrance__label">indgang</p>
          </div>

          {showBins &&
            MAP_BINS.map((bin) => (
              <img
                key={bin.id}
                src={ASSETS.mapBinMarker}
                alt=""
                className="map-bin-marker"
                style={{ left: `${bin.left}px`, top: `${bin.top}px` }}
                aria-hidden
              />
            ))}

          <button
            type="button"
            className={`map-sidebar${showBins ? ' map-sidebar--active' : ''}`}
            aria-label={showBins ? 'Hide bins on map' : 'Show bins on map'}
            aria-pressed={showBins}
            onClick={() => setShowBins((on) => !on)}
          >
            <img
              src={showBins ? ASSETS.mapTrashIconActive : ASSETS.mapTrashIcon}
              alt=""
              className="map-sidebar__icon"
            />
          </button>
        </div>
      </div>
    </AppShell>
  )
}
