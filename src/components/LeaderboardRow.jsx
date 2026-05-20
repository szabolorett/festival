import './LeaderboardRow.css'

export default function LeaderboardRow({ avatar, name, progress }) {
  return (
    <li className="leaderboard-row">
      <img src={avatar} alt="" className="leaderboard-row__avatar" />
      <div className="leaderboard-row__body">
        <span className="leaderboard-row__name">{name}</span>
        <div className="leaderboard-row__track">
          <div className="leaderboard-row__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </li>
  )
}
