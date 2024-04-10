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
		<div className="bg-green_dark1 flex h-screen w-60 flex-col items-start justify-start">
			{NavItem.map((item, index) => (
				<Link
					key={index}
					to={item.link}
					className={`block p-4 ${
						location.pathname === item.link
							? 'bg-green_light3 no-hover text-white'
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
	)
}

export default Menu
