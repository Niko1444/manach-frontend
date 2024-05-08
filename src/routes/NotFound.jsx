import CartBtn from '../components/Cart btn/CartBtn'
import LogIn from '../components/LogIn/LogIn'
import Menu from '../components/Menu'
import SignUp from '../components/SignUp/SignUp'




function NotFound() {
	return (
		<div className="flex h-full flex-grow flex-col items-center justify-center">	
			<h2 className="text-3xl font-bold">Oops! 404</h2>
			<h1 className="text-5xl text-gray-600">Page not found</h1>
		</div>
	)
}

export default NotFound
