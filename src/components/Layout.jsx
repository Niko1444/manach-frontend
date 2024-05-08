import { useLocation } from 'react-router-dom'
import Menu from './Menu'

function Layout({ children }) {
	const location = useLocation()

	// Check if the current route path is "/about-us"
	const isAboutUsPage = location.pathname === '/about-us'

	// Render Menu only if it's not the "/about-us" page
	const renderMenu = !isAboutUsPage

	return (
		<div className="flex flex-row items-center justify-center">
			{renderMenu && <Menu />}
			{children}
		</div>
	)
}

export default Layout
