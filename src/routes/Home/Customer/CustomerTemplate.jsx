import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const CustomerTemplate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default CustomerTemplate
