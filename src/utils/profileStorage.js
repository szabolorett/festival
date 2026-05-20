import { ASSETS } from '../assets/figmaAssets'

export const PROFILE_STORAGE_KEY = 'festival-profile'

export const DEFAULT_PROFILE = {
  name: 'Frida Amelia Larsen',
  email: 'fridaalarsen@gmail.com',
  phone: '+45 7283 9461',
  photo: ASSETS.profilePhoto2,
}

export function loadProfile() {
  try {
    const stored = localStorage.getItem(PROFILE_STORAGE_KEY)
    if (stored) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(stored) }
    }
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_PROFILE }
}

export function saveProfile(profile) {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
  } catch {
    /* ignore quota errors */
  }
}

export function getProfileFirstName() {
  const name = loadProfile().name?.trim() || ''
  const first = name.split(/\s+/)[0] || 'Frida'
  return first.charAt(0).toUpperCase() + first.slice(1)
}

export function loadProfilePhoto() {
  const photo = loadProfile().photo
  return photo || ASSETS.profilePhoto
}
