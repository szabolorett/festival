import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { ASSETS } from '../assets/figmaAssets'
import { loadProfile, saveProfile } from '../utils/profileStorage'
import './ProfilePage.css'

export default function ProfilePage() {
  const [profile, setProfile] = useState(loadProfile)
  const [notificationsOn, setNotificationsOn] = useState(true)
  const photoInputRef = useRef(null)

  useEffect(() => {
    saveProfile(profile)
  }, [profile])

  const updateField = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setProfile((prev) => ({ ...prev, photo: reader.result }))
      }
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  return (
    <AppShell bg="blue" footerTone="pink" footerActive="blue" activeTab="profile">
      <div className="profile-page">
        <header className="profile-header">
          <h1 className="profile-header__title font-display">Your profile</h1>
        </header>

        <button
          type="button"
          className="profile-avatar-wrap"
          onClick={() => photoInputRef.current?.click()}
          aria-label="Change profile picture"
        >
          <img src={profile.photo} alt="" className="profile-avatar" />
        </button>
        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handlePhotoChange}
        />

        <section className="profile-fields" aria-label="Account details">
          <ProfileField
            label="Name"
            value={profile.name}
            onSave={(value) => updateField('name', value)}
          />
          <ProfileField
            label="E-mail"
            value={profile.email}
            inputType="email"
            onSave={(value) => updateField('email', value)}
          />
          <ProfileField
            label="Phone"
            value={profile.phone}
            inputType="tel"
            onSave={(value) => updateField('phone', value)}
          />
        </section>

        <section className="profile-personal-id" aria-label="Personal ID">
          <span className="profile-personal-id__label">Personal ID</span>
          <span className="profile-personal-id__value">7264</span>
        </section>

        <section className="profile-settings" aria-label="Settings">
          <div className="profile-settings__notifications">
            <span className="profile-settings__heading">Notifications</span>
            <button
              type="button"
              className={`profile-toggle${notificationsOn ? ' profile-toggle--on' : ''}`}
              aria-pressed={notificationsOn}
              onClick={() => setNotificationsOn((v) => !v)}
            >
              <span className="profile-toggle__thumb" />
            </button>
          </div>
          <a href="#contact" className="profile-settings__link">
            Contact Us
          </a>
          <a href="#privacy" className="profile-settings__link">
            Privacy Policy
          </a>
        </section>

        <div className="profile-actions">
          <Link to="/login" className="profile-actions__btn">
            Log out
          </Link>
          <Link to="/signup" className="profile-actions__btn">
            Delete Account
          </Link>
        </div>
      </div>
    </AppShell>
  )
}

function ProfileField({ label, value, onSave, inputType = 'text' }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!editing) setDraft(value)
  }, [value, editing])

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [editing])

  const startEdit = () => {
    setDraft(value)
    setEditing(true)
  }

  const commit = () => {
    const next = draft.trim() || value
    onSave(next)
    setEditing(false)
  }

  const cancel = () => {
    setDraft(value)
    setEditing(false)
  }

  return (
    <div className="profile-field">
      <span className="profile-field__label">{label}</span>
      {editing ? (
        <div className="profile-field__value profile-field__value--editing">
          <input
            ref={inputRef}
            className="profile-field__input"
            type={inputType}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                commit()
              }
              if (e.key === 'Escape') {
                e.preventDefault()
                cancel()
              }
            }}
            aria-label={label}
          />
        </div>
      ) : (
        <button
          type="button"
          className="profile-field__value profile-field__value--clickable"
          onClick={startEdit}
          aria-label={`Edit ${label}`}
        >
          <span className="profile-field__text">{value}</span>
          <span className="profile-field__edit" aria-hidden="true">
            <img src={ASSETS.profileEditIcon} alt="" />
          </span>
        </button>
      )}
    </div>
  )
}
