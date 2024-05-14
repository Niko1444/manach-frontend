import { useLocation } from 'react-router-dom'
import Menu from './Menu'

const notMenu = [
	'/auth/login',
	'/auth/signup',
	'/auth',
	'/auth/welcome',
	'/about-us',
]

function Layout({ children }) {
	const location = useLocation()

	const isAuthPage = notMenu.includes(location.pathname)
	const renderMenu = !isAuthPage

	const renderFlexDiv = !isAuthPage ? (
		<div className="flex flex-row items-center">
			{renderMenu && <Menu />}
			{children}
		</div>
	) : (
		// Chỉ render children mà không có thuộc tính flex cho trang xác thực và "/about-us"
		children
	)

	return renderFlexDiv
}

export default Layout
