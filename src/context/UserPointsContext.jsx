import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export const MAX_COLLECTED_POINTS = 470
export const DEFAULT_POINTS = Math.round(MAX_COLLECTED_POINTS * 0.35)

const UserPointsContext = createContext(null)

export function UserPointsProvider({ children }) {
  const [points, setPoints] = useState(DEFAULT_POINTS)

  const addPoints = useCallback((amount) => {
    if (amount <= 0) return
    setPoints((prev) => Math.min(prev + amount, MAX_COLLECTED_POINTS))
  }, [])

  const value = useMemo(
    () => ({
      points,
      maxPoints: MAX_COLLECTED_POINTS,
      setPoints,
      addPoints,
    }),
    [points, addPoints],
  )

  return <UserPointsContext.Provider value={value}>{children}</UserPointsContext.Provider>
}

export function useUserPoints() {
  const ctx = useContext(UserPointsContext)
  if (!ctx) {
    throw new Error('useUserPoints must be used within UserPointsProvider')
  }
  return ctx
}
