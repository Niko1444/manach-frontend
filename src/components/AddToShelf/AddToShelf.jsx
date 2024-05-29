import React from 'react'
import plus from '../../assets/+.svg'
import minus from '../../assets/-.svg'

const AddToShelf = ({ productId, quantity, onQuantityChange }) => {
	return (
		<div className="ml-4 flex w-3/4 justify-between rounded-xl bg-green">
			<button
				className="mx-2 my-1"
				onClick={() => onQuantityChange(productId, -1)}
			>
				<i className="fa fa-minus-circle text-offwhite"></i>
			</button>
			<div className="my-1 text-offwhite">{quantity}</div>
			<button
				className="mx-2 my-1"
				onClick={() => onQuantityChange(productId, 1)}
			>
				<i className="fa fa-plus-circle text-offwhite"></i>
			</button>
		</div>
	)
}

export default AddToShelf
