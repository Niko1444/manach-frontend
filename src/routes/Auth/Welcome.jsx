import { NavLink } from 'react-router-dom'

import LogInBtn from '../../components/LogIn/LogInBtn'
import SignUpBtn from '../../components/SignUp/SignUpBtn'

const Welcome = () => {
	return (
		<div>
			<div
				className="w-full"
				style={{
					color: 'var(--green-dark1, #485935)',
					fontSize: '3.125rem',
					fontWeight: 600,
				}}
			>
				Welcome to our Website !
			</div>
			<div>
				<NavLink
					to={'/about-us'}
					className={'rounded-xl border border-green_dark1 px-4 py-2'}
				>
					<span className="text-green_dark1">Back</span>
				</NavLink>
			</div>
			<div
				className="!bg-green_dark1 text-center align-middle"
				style={{
					width: '39.6875rem',
					height: '36.375rem',
					marginTop: '2rem',
					borderRadius: '0.935rem',
				}}
			>
				<div className="p-8 text-center">
					<img
						className="mx-auto rounded-full bg-offwhite"
						style={{
							height: '7.4375rem',
							width: '7.4375rem',
						}}
						src="/src/assets/sumbol.png"
						alt=""
					/>
					<span
						style={{
							color: 'var(--Offwhite, #FFF)',
						}}
					>
						<div
							style={{
								textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
								fontSize: '3.125rem',
								fontWeight: 800,
							}}
						>
							Manach
						</div>
						<span
							style={{
								fontSize: ' 0.875rem',
								fontWeight: 400,
							}}
						>
							Store Management App
						</span>
					</span>

					<div className="mt-10 space-y-10 px-44">
						<LogInBtn />

						<SignUpBtn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome
