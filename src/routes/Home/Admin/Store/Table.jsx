import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	delProductThunk,
	storeThunk,
} from '../../../../redux/storeAReducer/storeAThunk'

// eslint-disable-next-line react/prop-types
const Table = ({ type }) => {
	const [data, setData] = useState([])

	const dispatch = useDispatch()
	const { listProduct } = useSelector((state) => state.storeAReducer)

	useEffect(() => {
		dispatch(storeThunk())
	}, [dispatch])

	useEffect(() => {
		if (type == 'all') {
			setData(listProduct)
		} else {
			const dataArr = listProduct?.filter(
				(item) => item.product_condition === type,
			)
			setData(dataArr)
		}
	}, [type, listProduct])
	const deleteProduct = (id) => {
		const data = {
			product_id: id,
		}
		dispatch(delProductThunk(data))
			.then(() => {
				dispatch(storeThunk())
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const showList = () => {
		return data?.map((item) => {
			return (
				<tr className="border-none text-center" key={item.product_id}>
					<td className="py-8">
						<img
							src={item.product_img}
							className="mx-auto h-[4rem] w-fit"
							alt=""
						/>
					</td>
					<td className="text-left text-[1.25rem] font-bold text-green_dark2">
						{item.product_name}
					</td>
					<td className="text-[1.125rem] text-green_dark2">
						{item.selling_price} $
					</td>
					<td className="text-[1.125rem] text-green_dark2">
						{item.import_price} $
					</td>
					<td className="text-[1.125rem] text-green_dark2">
						{item?.shelf_products[0].quantity} kg
					</td>
					<td className="text-[1.125rem] text-green_dark2">
						{item.product_condition}
					</td>
					<td>
						<button
							onClick={() => deleteProduct(item.product_id)}
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
							<th>PRODUCT</th>
							<th className="text-left">NAME</th>
							<th>SELLING PRICE</th>
							<th>IMPORT PRICE</th>
							<th>ON SHELF</th>
							<th>STATUS</th>
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
