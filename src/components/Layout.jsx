import Menu from './Menu'

function Layout({ children }) {
	return (
		<div className="flex flex-row items-center justify-center">
			<Menu />
			{children}
		</div>
	)
}

export default Layout
