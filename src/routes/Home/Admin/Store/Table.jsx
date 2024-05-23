import { useEffect, useState } from 'react'
import productList from './Data'

// eslint-disable-next-line react/prop-types
const Table = ({ type }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		if (type == 'all') {
			setData(productList)
		} else {
			const dataArr = productList?.filter((item) => item.type === type)
			setData(dataArr)
		}
	}, [type])

	const deleteProduct = (id) => {
		console.log('Table ~ deleteProduct ~ id:', id)
	}

	const showList = () => {
		return data?.map((item) => {
			return (
				<tr className="border-none text-center" key={item.id}>
					<td className="py-12">
						<img src={item.image} alt="" />
					</td>
					<td className="text-left">{item.name}</td>
					<td>{item.onself} kg</td>
					<td>{item.date}</td>
					<td>
						<button
							onClick={() => deleteProduct(item.id)}
							className="rounded-full bg-green_dark1 px-4 py-2 text-offwhite"
						>
							Delete
						</button>
					</td>
				</tr>
			)
		})
	}

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="text-center text-[1.25rem] text-green_dark1">
							<th className="text-left">PRODUCT</th>
							<th className="text-left">NAME</th>
							<th>ON SHELF</th>
							<th>DATE ON SHELF</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{showList()}</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
