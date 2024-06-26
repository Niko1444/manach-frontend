import { Doughnut } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const WarehouseAct = ({ incoming, outgoing }) => {
	return (
		<div className="relative rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>

			<div className="p-4">
				<span className="text-[1.125rem] font-bold">Warehouse Activities</span>
			</div>

			<div className="mb-5 p-4">
				<div className="relative">
					<Doughnut
						className=""
						data={{
							labels: [],
							datasets: [
								{
									label: '',
									data: [incoming, outgoing],
									backgroundColor: ['#A0D900', '#F07167'],
								},
							],
						}}
						options={{
							cutout: '70%', // Adjust this value to change the thickness
							circumference: 180, // Display only half the doughnut
							rotation: -90, // Rotate the chart to start from the top
							plugins: {
								legend: {
									display: true, // Show legend if needed
								},
							},
							maintainAspectRatio: false,
						}}
					/>
					<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-center">
						<p className="text-[1rem] text-green_dark1">Space used</p>
						<span className="text-[2.5rem] font-bold text-green_dark2">
							{((incoming / (incoming + outgoing)) * 100).toFixed(2)}%
						</span>
					</div>
				</div>
			</div>

			<div className="flex justify-between px-4">
				<div className="flex space-x-1 align-middle text-green_dark1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
					>
						<g opacity="0.2">
							<path
								d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
								fill="#A0D900"
							/>
						</g>
						<path
							d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25Z"
							fill="#A0D900"
						/>
						<path
							d="M14.6251 9.37465C14.4262 9.37466 14.2355 9.45368 14.0948 9.59433C13.9542 9.73498 13.8751 9.92574 13.8751 10.1247V12.814L9.90546 8.84433C9.76478 8.70383 9.57406 8.62494 9.37524 8.625C9.17641 8.62506 8.98575 8.70407 8.84515 8.84467C8.70456 8.98526 8.62555 9.17592 8.62549 9.37475C8.62543 9.57358 8.70432 9.76429 8.84482 9.90497L12.8145 13.8747H10.1251C9.92623 13.8747 9.73546 13.9537 9.59481 14.0943C9.45416 14.235 9.37514 14.4257 9.37514 14.6247C9.37514 14.8236 9.45416 15.0143 9.59481 15.155C9.73546 15.2956 9.92623 15.3747 10.1251 15.3747L14.6251 15.3747C14.8241 15.3746 15.0148 15.2956 15.1555 15.155C15.2961 15.0143 15.3751 14.8236 15.3751 14.6247L15.3751 10.1247C15.3751 9.92574 15.2961 9.73498 15.1555 9.59433C15.0148 9.45368 14.8241 9.37466 14.6251 9.37465Z"
							fill="#A0D900"
						/>
					</svg>
					<div className="text-[0.875rem]">Incoming: {incoming}</div>
				</div>
				<div className="flex space-x-1 align-middle text-green_dark1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
					>
						<g opacity="0.2">
							<path
								d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
								fill="#F07167"
							/>
						</g>
						<path
							d="M18.8942 5.10571C17.2992 3.51068 15.2005 2.51806 12.9556 2.29696C10.7108 2.07587 8.45873 2.63998 6.58317 3.89319C4.70762 5.1464 3.32463 7.01115 2.66983 9.16973C2.01504 11.3283 2.12895 13.6472 2.99218 15.7312C3.8554 17.8152 5.41452 19.5354 7.40388 20.5987C9.39324 21.662 11.6897 22.0027 13.9021 21.5626C16.1145 21.1226 18.1058 19.929 19.5368 18.1853C20.9678 16.4416 21.75 14.2557 21.75 12C21.7488 9.41438 20.7217 6.93487 18.8942 5.10571ZM17.8336 17.8336C16.6801 18.9861 15.2107 19.7707 13.6114 20.0882C12.012 20.4058 10.3544 20.242 8.84804 19.6177C7.34172 18.9933 6.05431 17.9364 5.14856 16.5805C4.24282 15.2246 3.75939 13.6306 3.75939 12C3.75939 10.3694 4.24282 8.77541 5.14856 7.41951C6.05431 6.06362 7.34172 5.00669 8.84804 4.38233C10.3544 3.75797 12.012 3.59421 13.6114 3.91176C15.2107 4.2293 16.6801 5.01389 17.8336 6.16635C19.3785 7.71475 20.2461 9.81272 20.2461 12C20.2461 14.1873 19.3785 16.2852 17.8336 17.8336Z"
							fill="#F07167"
						/>
						<path
							d="M14.6248 8.625L10.1248 8.625C9.92592 8.625 9.73515 8.70402 9.5945 8.84467C9.45385 8.98532 9.37483 9.17609 9.37483 9.375C9.37483 9.57391 9.45385 9.76468 9.5945 9.90533C9.73515 10.046 9.92592 10.125 10.1248 10.125L12.8142 10.125L8.84451 14.0947C8.7748 14.1643 8.71948 14.247 8.68174 14.338C8.64399 14.429 8.62454 14.5266 8.62451 14.6251C8.62448 14.7236 8.64387 14.8212 8.68156 14.9122C8.71925 15.0033 8.77451 15.086 8.84418 15.1557C8.91385 15.2253 8.99656 15.2806 9.0876 15.3183C9.17863 15.356 9.2762 15.3753 9.37473 15.3753C9.47326 15.3753 9.57082 15.3558 9.66183 15.3181C9.75284 15.2803 9.83552 15.225 9.90515 15.1553L13.8748 11.1856V13.875C13.8748 14.0739 13.9538 14.2647 14.0945 14.4053C14.2352 14.546 14.4259 14.625 14.6248 14.625C14.8237 14.625 15.0145 14.546 15.1552 14.4053C15.2958 14.2647 15.3748 14.0739 15.3748 13.875V9.375C15.3748 9.17609 15.2958 8.98532 15.1552 8.84467C15.0145 8.70402 14.8237 8.625 14.6248 8.625Z"
							fill="#F07167"
						/>
					</svg>

					<div className="text-[0.875rem]">Outgoing: {outgoing}</div>
				</div>
			</div>

			<div className="space-y-4 p-2 text-green_dark1">
				<span className="text-[1.125rem] font-bold">Inventory Snapshot</span>
				<div className="space-y-4 rounded-lg border border-grey_light1 bg-[#FAFAFB] px-8 py-4">
					<div className="flex justify-between text-[0.875rem] text-green_dark1">
						<span>Inventory</span>
						<div className="font-bold">1,200 products</div>
					</div>
					<div className="flex justify-between text-[0.875rem] text-redpink_dark1">
						<span>Low stock alert</span>
						<div className="font-bold">Honey Mango</div>
					</div>
				</div>
			</div>
		</div>
	)
}
WarehouseAct.propTypes = {
	incoming: PropTypes.number.isRequired,
	outgoing: PropTypes.number.isRequired,
}

export default WarehouseAct
