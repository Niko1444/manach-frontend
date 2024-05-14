// import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import NeedHelps from '../../components/needHelps/needHelps'

const AuthTemplate = () => {
	return (
		<div className="flex">
			<div
				className="relative h-screen w-[18.75rem]"
				style={{
					background: "url('/src/assets/menubg.png')",
				}}
			>
				<div className="absolute bottom-0">
					<NeedHelps />
				</div>
			</div>
			<div className="flex w-full items-center justify-center">
				<Outlet />
			</div>
		</div>
	)
}

export default AuthTemplate
