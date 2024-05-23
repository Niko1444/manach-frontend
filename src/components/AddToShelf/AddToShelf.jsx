import React from 'react'
import plus from '../../assets/+.svg'
import minus from '../../assets/-.svg'

const AddToShelf = () => {
	return (
		<div className='flex bg-green justify-between w-3/4 rounded-xl ml-4'>
			<button className='mx-2 my-1'><i class="fa fa-plus-circle text-offwhite"></i></button>
			<div className='text-offwhite my-1'>2</div>
			<button className='mx-2 my-1'><i class="fa fa-minus-circle text-offwhite"></i></button>
		</div>
	)
}

export default AddToShelf
