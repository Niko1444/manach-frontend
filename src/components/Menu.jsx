// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NeedHelps from './needHelps/needHelps'

// NavItem
const NavItemCustomer = [
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
	{
		name: 'Logout',
		link: '/customer/logout',
	},
]
const NavItemAdminn = [
	{
		name: 'Home',
		link: '/admin/home',
		icon: 'home',
	},
	{
		name: 'Store',
		link: '/admin/store',
		icon: 'shopping-cart',
	},
	{
		name: 'Warehouse',
		link: '/admin/warehouse',
		icon: 'warehouse',
	},
	{
		name: 'Dashboard',
		link: '/admin/dashboard',
		icon: 'tag',
	},
	{
		name: 'Setting',
		link: '/admin/setting',
		icon: 'cog',
	},
	{
		name: 'Logout',
		link: '/admin/logout',
		icon: 'sign-out-alt',
	},
]

const Menu = () => {
	const location = useLocation()
	const inforUser = 1

	return (
		<div className="sticky flex h-screen w-full flex-col items-start justify-between bg-green_dark1">
			<div className="flex items-center p-2">
				<img
					src="/src/assets/sumbol.png"
					className="h-[5rem] w-[5rem] rounded-full bg-offwhite"
					alt=""
				/>
				<div className="ml-4">
					<span className="text-[1.875rem] font-extrabold text-offwhite">
						Manach
					</span>
				</div>
			</div>
			{inforUser ? (
				<div className="flex space-x-4 px-4">
					<img
						src="/src/assets/userAvtG.jpg"
						className="h-[3rem] w-[3rem] rounded-full"
						alt=""
					/>
					<div className="h-fit text-offwhite opacity-70">
						<div className="text-[1.25rem]">Nhat Minh</div>
						<span className="text-[0.7rem]">Administrator</span>
					</div>
				</div>
			) : null}
			<div className="w-full">
				{NavItemAdminn.map((item, index) => (
					<Link
						key={index}
						to={item.link}
						className={`block space-x-4 p-4 ${
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
						<i className={`fa fa-${item.icon} mr-4`}></i>
						{item.name}
					</Link>
				))}
			</div>
			<NeedHelps />
		</div>
	)
}

export default Menu
