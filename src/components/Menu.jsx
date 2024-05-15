// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NeedHelps from './needHelps/needHelps'

// NavItem
const NavItem = [
	{
		name: 'Home',
		link: '/customer/home',
	},
	{
		name: 'Store',
		link: '/customer/store',
	},
	{
		name: 'Order',
		link: '/customer/order',
	},
	{
		name: 'Checkout',
		link: '/customer/check-out',
	},
	{
		name: 'Setting',
		link: '/customer/setting',
	},
]

const Menu = () => {
	const location = useLocation()

	return (
		<div className="sticky flex h-screen w-full flex-col items-start justify-between bg-green_dark1">
			<div className="w-full">
				{NavItem.map((item, index) => (
					<Link
						key={index}
						to={item.link}
						className={`block p-4 ${
							location.pathname === item.link
								? 'no-hover text-white bg-green_light3'
								: 'text-offwhite'
						} ${
							location.pathname === item.link
								? ''
								: 'hover:bg-green_light3 hover:text-green_dark1'
						}`}
						style={{ width: '100%', transition: 'ease-in-out 0.3s' }}
					>
						{item.name}
					</Link>
				))}
			</div>
			<NeedHelps />
		</div>
	)
}

export default Menu
