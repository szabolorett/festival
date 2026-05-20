import { useRef, useState } from 'react'
import AppShell from '../components/AppShell'
import BinFlipCard from '../components/BinFlipCard'
import BinHuntDialog from '../components/BinHuntDialog'
import PageHeader from '../components/PageHeader'
import { ASSETS } from '../assets/figmaAssets'
import './ScanBinPage.css'

/**
 * Figma 43:442 — 10 cards: 4 discovered bins + 6 “?” tiles
 * R1: bin | ?   R2: ? | ?   R3: ? | bin
 * R4: bin | ?   R5: ? | bin
 */
const GRID_CARDS = [
  {
    type: 'photo',
    image: ASSETS.scanBinPhoto1,
    artist: 'Sofie Kronborg',
    artwork: 'Dot Garden',
    bio: 'Painted hundreds of hand-placed dots in UV-reactive green — a love letter to Copenhagen street mosaics.',
  },
  { type: 'card' },
  { type: 'card' },
  { type: 'card' },
  { type: 'card' },
  {
    type: 'photo',
    image: ASSETS.scanBinPhoto2,
    artist: 'Jonas Havskov',
    artwork: 'Deep Current',
    bio: 'Marine illustrator who wrapped this bin in a neon seahorse drifting through kelp and festival lights.',
  },
  {
    type: 'photo',
    image: ASSETS.scanBinPhoto3,
    artist: 'Ella Palm',
    artwork: 'Greetings from the Valley',
    bio: 'Retro postcard typography meets desert pink — Ella’s bin is a cheeky nod to classic festival merch.',
  },
  { type: 'card' },
  { type: 'card' },
  {
    type: 'photo',
    image: ASSETS.scanBinPhoto4,
    artist: 'Rune Volt',
    artwork: 'Playground',
    bio: 'Abstract shapes and candy-bright wheels — Rune builds playful sculptures that beg to be photographed.',
  },
]

export default function ScanBinPage() {
  const cameraInputRef = useRef(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [flipped, setFlipped] = useState({})

  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <AppShell bg="blue" footerTone="navy" footerActive="blue" activeTab="scan">
      <div className="scan-bin-page">
        <PageHeader
          className="scan-bin-page__header"
          title="bin hunt"
          tone="navy"
          align="center"
          showInfo
          infoIcon={ASSETS.scanInfoIcon}
          onInfoClick={() => setInfoOpen(true)}
        />

        <div className="scan-bin-page__scroll">
          <div className="bin-grid-wrap">
            {infoOpen && <BinHuntDialog onClose={() => setInfoOpen(false)} />}
            <div className="bin-grid">
              {GRID_CARDS.map((item, index) =>
                item.type === 'photo' ? (
                  <BinFlipCard
                    key={index}
                    image={item.image}
                    artist={item.artist}
                    artwork={item.artwork}
                    bio={item.bio}
                    flipped={Boolean(flipped[index])}
                    onToggle={() => toggleFlip(index)}
                  />
                ) : (
                  <div key={index} className="bin-grid__cell" aria-hidden="true">
                    <img src={ASSETS.scanBinCard} alt="" className="bin-grid__card" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="bin-camera-rail">
          <button
            type="button"
            className="bin-camera"
            aria-label="Open camera"
            onClick={() => cameraInputRef.current?.click()}
          >
            <img src={ASSETS.cameraBtn} alt="" className="bin-camera__bg" />
            <img src={ASSETS.scanCameraIcon} alt="" className="bin-camera__icon" />
          </button>
        </div>

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="sr-only"
          onChange={(event) => {
            event.target.value = ''
          }}
        />
      </div>
    </AppShell>
  )
}
