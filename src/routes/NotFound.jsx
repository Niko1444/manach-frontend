
import Menu from '../components/Menu'
import Sort from '../components/Sort/Sort'
import Create from '../components/Create/Create'
import Review from '../components/Review/Review'

function NotFound() {
	return (
		<div className="flex h-full flex-grow flex-col items-center justify-center">
			<Sort/>
			<Create/>
			<Review/>
			<h2 className="text-3xl font-bold">Oops! 404</h2>
			<h1 className="text-5xl text-gray-600">Page not found</h1>
		</div>
	)
}

export default NotFound
