import { useLocation } from 'react-router-dom'
import Menu from './Menu'

function Layout({ children }) {
	const location = useLocation()

	// Check if the current route path is "/about-us"
	const isAboutUsPage = location.pathname === '/about-us'

	// Render Menu only if it's not the "/about-us" page
	const renderMenu = !isAboutUsPage

	// Render div with flex properties only if it's not the "/about-us" page
	const renderFlexDiv = !isAboutUsPage ? (
		<div className="flex flex-row items-center justify-center">
			{renderMenu && <Menu />}
			{children}
		</div>
	) : (
		// Render only children without flex properties for "/about-us" page
		children
	)

	return renderFlexDiv
}

export default Layout