import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Import Pages
import Home from './routes/Home/Customer/HomePage/Home'
import Setting from './routes/Setting/Setting'
import Layout from './components/Layout'
import AboutUs from './routes/AboutUs/AboutUs'

// Import Not Found Page
import NotFound from './routes/NotFound'
import AuthTemplate from './routes/Auth/AuthTemplate'
import Welcome from './routes/Auth/Welcome'
import Login from './routes/Auth/Login'
import Signup from './routes/Auth/Signup'

// Import Customer Pages
import CusStore from './routes/Home/Customer/Store/CusStore'
import CusOrder from './routes/Home/Customer/Order/CusOrder'
import CustomerTemplate from './routes/Home/Customer/CustomerTemplate'
import CusCheckOut from './routes/Home/Customer/CheckOut/CusCheckOut'
import CusSetting from './routes/Home/Customer/Setting.jsx/CusSetting'
import BananaStore from './routes/Home/Customer/Store/BananaStore'
import MangoStore from './routes/Home/Customer/Store/MangoStore'
import PapayaStore from './routes/Home/Customer/Store/PapayaStore'
import CoconutStore from './routes/Home/Customer/Store/CoconutStore'
import BerriesStore from './routes/Home/Customer/Store/BerriesStore'
import DurianStore from './routes/Home/Customer/Store/DurianStore'
import PineappleStore from './routes/Home/Customer/Store/PineappleStore'

// Import Admin Pages
import AdminTemplate from './routes/Home/Admin/AdminTemplate'
import AHome from './routes/Home/Admin/Home/AHome'
import Dashboard from './routes/Home/Admin/Dashboard/Dashboard'
import ASetting from './routes/Home/Admin/Setting/ASetting'
import Warehouse from './routes/Home/Admin/Warehouse/Warehouse'
import AStore from './routes/Home/Admin/Store/AStore'
// import Loading from './components/Loading'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [count, setCount] = useState(0)

	return (
		<>
			{/* <Loading /> */}
			<Layout>
				<Routes>
					<Route index path="" element={<AboutUs />} />

					{/* All main pages */}
					<Route path="customer" element={<CustomerTemplate />}>
						<Route path="home" element={<Home />} />
						<Route path="store" element={<CusStore />} />
						<Route path="order" element={<CusOrder />} />
						<Route path="check-out" element={<CusCheckOut />} />
						<Route path="setting" element={<CusSetting />} />
						<Route path="logout" element={<></>} />
					</Route>

					<Route path="admin" element={<AdminTemplate />}>
						<Route path="home" element={<AHome />} />
						<Route path="store" element={<AStore />} />
						<Route path="warehouse" element={<Warehouse />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="setting" element={<ASetting />} />
						<Route path="logout" element={<></>} />
					</Route>

					{/* Auth */}
					<Route path="auth" element={<AuthTemplate />}>
						<Route path="welcome" element={<Welcome />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
					</Route>

					{/* About */}
					<Route path="/setting" element={<Setting />} />
					<Route path="/customer/store/banana-store" element={<BananaStore />} />
					<Route path="/customer/store/mango-store" element={<MangoStore />} />
					<Route path="/customer/store/durian-store" element={<DurianStore />} />
					<Route path="/customer/store/berries-store" element={<BerriesStore />} />
					<Route path="/customer/store/coconut-store" element={<CoconutStore />} />
					<Route path="/customer/store/papaya-store" element={<PapayaStore/>} />
					<Route path="/customer/store/pineapple-store" element={<PineappleStore />} />

					{/* Error pages */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</>
	)
}

export default App