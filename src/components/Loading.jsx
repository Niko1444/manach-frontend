import Lottie from 'lottie-react'
import { useSelector } from 'react-redux'
import waiting_animation from '../../src/assets/Animation_1.json'

const Loading = () => {
	const { isLoading } = useSelector((state) => state.loadingReducer)
	return (
		<div
			className={`bg-black text-white fixed h-screen w-screen ${
				isLoading ? '' : 'hidden'
			} left-0 top-0 z-50 `}
			style={{ backgroundColor: '#fdfcf0' }}
		>
			<div className="flex h-full w-full items-center justify-center ">
				<div className="w-1/4">
					<Lottie animationData={waiting_animation} />
				</div>
			</div>
		</div>
	)
}

export default Loading
