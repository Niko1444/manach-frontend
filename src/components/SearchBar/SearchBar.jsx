// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SearchBar = () => {
	const [state, setState] = useState({})
	return (
		<div className="w-[311px] h-[41px] relative"
		onClick={() => {
			setState({ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.25) inset'})

			setTimeout(() => {
				setState({ boxShadow: ' '})
			}, 200)
		}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" 
			width="35" 
			height="35" 
			viewBox="0 0 35 35" 
			fill="none">
  			<path d="M27.9378 25.5247L21.5059 19.0928C23.0544 17.0313 23.8903 14.522 23.8875 11.9438C23.8875 5.35801 18.5295 0 11.9438 0C5.35801 0 0 5.35801 0 11.9438C0 18.5295 5.35801 23.8875 11.9438 23.8875C14.522 23.8903 17.0313 23.0544 19.0928 21.5059L25.5247 27.9378C25.8503 28.2288 26.2749 28.3842 26.7115 28.372C27.148 28.3598 27.5633 28.1809 27.8721 27.8721C28.1809 27.5633 28.3598 27.148 28.372 26.7115C28.3842 26.2749 28.2288 25.8503 27.9378 25.5247ZM3.4125 11.9438C3.4125 10.2564 3.91285 8.607 4.85027 7.20404C5.7877 5.80108 7.1201 4.70761 8.67898 4.0619C10.2379 3.41619 11.9532 3.24725 13.6081 3.57643C15.263 3.90561 16.7831 4.71813 17.9763 5.91124C19.1694 7.10436 19.9819 8.62449 20.3111 10.2794C20.6403 11.9343 20.4713 13.6496 19.8256 15.2085C19.1799 16.7674 18.0864 18.0998 16.6835 19.0372C15.2805 19.9746 13.6311 20.475 11.9438 20.475C9.68195 20.4723 7.51357 19.5726 5.91424 17.9733C4.31491 16.3739 3.41521 14.2055 3.4125 11.9438Z" 
			fill="#485935"/>
		</svg>
		<div className="form-control">
      		<input type="text" placeholder="Search here" className="input input-bordered w-20 md:w-auto" />
    	</div>
		</div>
	)
}

export default SearchBar