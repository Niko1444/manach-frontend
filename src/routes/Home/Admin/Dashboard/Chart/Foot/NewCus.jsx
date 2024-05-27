import PropTypes from 'prop-types'
const NewCus = ({ customers }) => {
	return (
		<div className="relative h-full rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="flex justify-between p-4 py-8 pb-2 text-green_dark1">
				<span className="text-[1.125rem] font-bold">
					<span>New customers</span>
					<div className="text-[1.5rem] font-semibold text-green_dark1">
						{customers}
					</div>
				</span>
				<div>
					<i className="fa fa-users rounded-full border border-redpink_dark1 bg-redpink_dark1 p-2 leading-5 text-offwhite"></i>
				</div>
			</div>
			<div className="px-2">
				<div className="flex items-center space-x-2">
					<div className="flex items-center space-x-1 rounded-full bg-green_bright2 px-3 py-1 text-green_bright1">
						<i className="fa fa-arrow-down h-4 w-4"></i>
						<span className="text-[0.75rem]">25%</span>
					</div>
					<div className="text-[0.75rem] text-green_dark1">( in 7 days )</div>
				</div>
			</div>
		</div>
	)
}
NewCus.propTypes = {
	customers: PropTypes.number.isRequired, // Assuming customers is a number
}
export default NewCus
