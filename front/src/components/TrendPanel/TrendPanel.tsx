import './TrendPanel.scss'

const rightArrow = (
	<svg
		viewBox="0 0 16 16"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		className="style-scope yt-icon"
	>
		<g mirror-in-rtl className="style-scope yt-icon">
			<path
				d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
				className="style-scope yt-icon"
			/>
		</g>
	</svg>
)
const leftArrow = (
	<svg
		viewBox="0 0 16 16"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		className="style-scope yt-icon"
	>
		<g mirror-in-rtl className="style-scope yt-icon">
			<path
				d="M10.15,13.35L4.79,8l5.35-5.35l0.71,0.71L6.21,8l4.65,4.65L10.15,13.35z"
				className="style-scope yt-icon"
			/>
		</g>
	</svg>
)

const TrendPanel = () => {
	return (
		<div className="trend__wrapper">
			<div className="left__arrow">
				<div className="wrapper">
					<div className="arrows">{leftArrow}</div>
				</div>
			</div>

			<div className="trend__item active-trend">All</div>
			<div className="trend__item">Music</div>

			<div className="right__arrow">
				<div className="wrapper">
					<div className="arrows">{rightArrow}</div>
				</div>
			</div>
		</div>
	)
}

export default TrendPanel
