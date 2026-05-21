import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { UserPointsProvider } from './context/UserPointsContext'
import LoadingPage from './pages/LoadingPage'
import AuthLandingPage from './pages/AuthLandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import EventsPage from './pages/EventsPage'
import DiscountsPage from './pages/DiscountsPage'
import ProfilePage from './pages/ProfilePage'
import ScanBinPage from './pages/ScanBinPage'
import MapPage from './pages/MapPage'
import './styles/app.css'

export default function App() {
  return (
    <div className="app-viewport">
      <UserPointsProvider>
        <Router>
          <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/auth" element={<AuthLandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/favourites" element={<EventsPage />} />
          <Route path="/discounts" element={<DiscountsPage />} />
          <Route path="/scan" element={<ScanBinPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </UserPointsProvider>
    </div>
  )
}
