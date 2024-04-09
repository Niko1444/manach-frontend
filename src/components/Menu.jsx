import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// NavItem
const NavItem = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Store',
		link: '/store',
	},
	{
		name: 'Warehouse',
		link: '/contact',
	},
	{
		name: 'Setting',
		link: '/setting',
	},
	{
		name: 'Logout',
		link: '/logout',
	},
]

const Menu = () => {
	const location = useLocation()

	return (
		<div className="flex h-screen w-60 flex-col items-start justify-start bg-gray-200">
			{NavItem.map((item, index) => (
				<Link
					key={index}
					to={item.link}
					className={`block p-4 ${
						location.pathname === item.link
							? 'bg-gray-400 text-white'
							: 'text-gray-800'
					} hover:bg-gray-300 hover:text-gray-900`}
					style={{ width: '100%' }}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}

export default Menu
