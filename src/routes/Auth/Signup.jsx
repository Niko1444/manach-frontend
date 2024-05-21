import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [address, setAddress] = useState('')
	const [payment, setPayment] = useState('')
	const [phone, setPhone] = useState('')

	const handleLogin = () => {
		console.log('Name:', name)
		console.log('Username:', username)
		console.log('Password:', password)
		console.log('Address:', address)
		console.log('Payment:', payment)
		console.log('Phone:', phone)
	}

	return (
		<div>
			<div className="flex h-[6rem]">
				<img
					className="mx-auto mr-4 rounded-full bg-offwhite shadow-md"
					style={{
						height: '7rem',
						width: '7rem',
					}}
					src="/src/assets/sumbol.png"
					alt=""
				/>
				<div className="h-fit w-full">
					<div
						style={{
							color: 'var(--green-dark1, #485935)',
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
				</div>
			</div>
			<div>
				<div
					className="w-fit !bg-green_dark1 text-center align-middle"
					style={{
						width: '60rem',
						height: '36.375rem',
						marginTop: '1.5rem',
						borderRadius: '0.935rem',
					}}
				>
					<div className="p-6 text-left">
						<div>
							<NavLink
								to={'/auth/welcome'}
								className={'rounded-xl border border-offwhite px-4 py-2'}
							>
								<span className="text-offwhite">Back</span>
							</NavLink>
						</div>
					</div>

					<div
						style={{
							color: 'var(--Offwhite, #FFF)',
							textAlign: 'center',
							textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
							fontSize: '1.875rem',
							fontWeight: 700,
						}}
					>
						<span className="!w-[36.3125rem]">
							Fill in these information to create
							<br />
							your account!
						</span>
					</div>

					{/* Form input  */}
					<div className="form-login mt-4">
						<div className="flex text-left">
							<div className="mx-auto w-5/6 space-y-4">
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Name
									</span>
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your name"
											onChange={(e) => {
												setName(e.target.value)
											}}
										/>
									</label>
								</div>
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Username
									</span>
									<label className="input input-bordered  flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your username"
											onChange={(e) => {
												setUsername(e.target.value)
											}}
										/>
									</label>
								</div>
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Password
									</span>
									<label className="input input-bordered  flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your password"
											onChange={(e) => {
												setPassword(e.target.value)
											}}
										/>
									</label>
								</div>
							</div>
							<div className="mx-auto w-5/6 space-y-4">
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Address
									</span>
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your address"
											onChange={(e) => {
												setAddress(e.target.value)
											}}
										/>
									</label>
								</div>
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Payment
									</span>
									<label className="input input-bordered  flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your payment"
											onChange={(e) => {
												setPayment(e.target.value)
											}}
										/>
									</label>
								</div>
								<div className="mx-12 text-left">
									<span
										style={{
											color: 'var(--Offwhite, #FFF)',
											fontSize: '1.25rem',
											fontWeight: 600,
										}}
									>
										Phone
									</span>
									<label className="input input-bordered  flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your phone"
											onChange={(e) => {
												setPhone(e.target.value)
											}}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-10 space-y-10 px-44" onClick={handleLogin}>
						<NavLink className="rounded-xl bg-green_light1 px-12 py-3 text-[1.5rem] font-bold text-green_dark1">
							Create
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup
