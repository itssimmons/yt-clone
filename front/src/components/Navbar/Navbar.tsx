import { Link } from 'react-router-dom'

import MenuIcon from '../Icons/MenuIcon/MenuIcon'
import CreateMenuIcon from '../Icons/CreateMenuIcon/CreateMenuIcon'
import AppsYtIcon from '../Icons/AppsYtIcon/AppsYtIcon'
import NotiIcon from '../Icons/NotiIcon/NotiIcon'
import STTIcon from '../Icons/STTIcon/STTIcon'

import logo from '../../assets/icon.png'
import profile from '../../assets/profile-pic.jpg'

import './Navbar.scss'
import '../Icons/Icons.scss'

const SearchIcon = (
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		className="style-scope yt-icon"
		id="search-icon"
	>
		<g className="style-scope yt-icon">
			<path
				d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
				className="style-scope yt-icon"
			/>
		</g>
	</svg>
)

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container">
				<ul className="ul__nav">
					<li className="nav__item">
						<MenuIcon />

						<Link className="logo__wrapper" to="/">
							<img src={logo} alt="" className="logo" />
							<span>COPY</span>
						</Link>
					</li>
					<li className="nav__item">
						<form className="search__wrapper">
							<input className="input__search" type="text" placeholder="Search" />
							<button className="btn btn__buscar" type="submit">
								{SearchIcon}
							</button>
						</form>
						<STTIcon />
					</li>
					<li className="nav__item">
						<Link className="nav__link" to="/new-video">
							<CreateMenuIcon />
						</Link>
						<AppsYtIcon />
						<NotiIcon />
						<img src={profile} alt="" className="profile"/>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
