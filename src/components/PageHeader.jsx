import InfoButton from './InfoButton'
import './PageHeader.css'

export default function PageHeader({
  title,
  tone = 'blue',
  align = 'left',
  showInfo = false,
  onInfoClick,
  infoIcon,
  children,
  className = '',
}) {
  return (
    <header
      className={[
        'page-header',
        `page-header--${tone}`,
        `page-header--${align}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {title && <h1 className="page-header__title font-display">{title}</h1>}
      {children}
      {showInfo && (
        <InfoButton className="page-header__info" onClick={onInfoClick} icon={infoIcon} />
      )}
    </header>
  )
}
