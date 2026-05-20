import Footer from './Footer'
import './AppShell.css'

export default function AppShell({
  children,
  bg = 'blue',
  footerTone = 'pink',
  footerSlots = 'default',
  footerActive = 'ice',
  activeTab,
  showFooter = true,
  scrollClassName = '',
  highlightCenter = false,
}) {
  const scrollClass = [
    'app-scroll',
    showFooter ? '' : 'app-scroll--no-footer',
    scrollClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={`app-frame app-frame--${bg}`}>
      <main className={scrollClass}>
        {children}
      </main>
      {showFooter && (
        <Footer
          tone={footerTone}
          slots={footerSlots}
          activeStyle={footerActive}
          activeTab={activeTab}
          highlightCenter={highlightCenter}
        />
      )}
    </div>
  )
}
