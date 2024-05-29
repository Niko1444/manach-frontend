import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { postSignUp } from '../../redux/userReducer/userThunk'

const Signup = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			password: '',
			email: '',
			payment: '',
			phone: '',
		},
		validationSchema: yup.object().shape({
			name: yup.string().required('Name is required'),
			username: yup.string().required('Username is required'),
			password: yup
				.string()
				.required('Password is required')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					'8 characters, upper, number, and special case',
				),
			email: yup
				.string()
				.email('Invalid email address')
				.required('Email is required'),
			payment: yup
				.string()
				.required('Payment information is required')
				.matches(/^[a-zA-Z]+-\d+$/, 'Payment must be in the format word-123'),
			phone: yup
				.string()
				.required('Phone number is required')
				.matches(/^\d{9,10}$/, 'Phone number must be exactly 9 digits'),
		}),

		onSubmit: (values) => {
			const data = {
				full_name: values.name,
				address: '123 Govap',
				user_name: values.username,
				bank_account: values.payment,
				user_password: values.password,
				phone: values.phone,
				email: values.email,
			}
			dispatch(postSignUp(data))
			navigate('/auth/welcome')
		},
	})

	return (
		<div>
			<div className="flex h-[5rem]">
				<img
					className="mx-auto mr-4 rounded-full bg-offwhite shadow-md"
					style={{
						height: '5rem',
						width: '5rem',
					}}
					src="/src/assets/sumbol.png"
					alt=""
				/>
				<div className="h-fit w-full">
					<div
						style={{
							color: 'var(--green-dark1, #485935)',
							textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							fontSize: '2.75rem',
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
					<form onSubmit={formik.handleSubmit} className="form-login mt-4">
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
											name="name"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your name"
											onChange={formik.handleChange}
											value={formik.values.name}
										/>
									</label>
									{formik.errors.name && formik.touched.name && (
										<p className="text-red-500">{formik.errors.name}</p>
									)}
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
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											name="username"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your username"
											onChange={formik.handleChange}
											value={formik.values.username}
										/>
									</label>
									{formik.errors.username && formik.touched.username && (
										<p className="text-red-500">{formik.errors.username}</p>
									)}
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
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="password"
											name="password"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your password"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>
									</label>
									{formik.errors.password && formik.touched.password && (
										<p className="text-red-500">{formik.errors.password}</p>
									)}
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
										Email
									</span>
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="email"
											name="email"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
									</label>
									{formik.errors.email && formik.touched.email && (
										<p className="text-red-500">{formik.errors.email}</p>
									)}
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
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											name="payment"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your payment"
											onChange={formik.handleChange}
											value={formik.values.payment}
										/>
									</label>
									{formik.errors.payment && formik.touched.payment && (
										<p className="text-red-500">{formik.errors.payment}</p>
									)}
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
									<label className="input input-bordered flex items-center gap-2 rounded-xl !bg-offwhite px-8 py-2 text-center">
										<input
											type="text"
											name="phone"
											className="h-[2.5rem] grow text-center text-[1.5rem]"
											placeholder="Enter your phone"
											onChange={formik.handleChange}
											value={formik.values.phone}
										/>
									</label>
									{formik.errors.phone && formik.touched.phone && (
										<p className="text-red-500">{formik.errors.phone}</p>
									)}
								</div>
							</div>
						</div>

						<div className="mt-6 space-y-10 px-44">
							<button
								type="submit"
								className="rounded-xl bg-green_light1 px-12 py-3 text-[1.5rem] font-bold text-green_dark1"
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
