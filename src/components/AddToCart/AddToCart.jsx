import React, { useEffect, useState } from 'react'
import { cartLocal } from '../../service/cartLocal'
import axios from 'axios'

const AddToCart = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isPressed, setIsPressed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [detailPro, setDetailPro] = useState(null)

	useEffect(() => {
		axios({
			method: 'GET',
			url: `http://localhost:8080/store/category/${product?.category_id}/${product?.product_id}`,
		})
			.then((res) => {
				console.log('useEffect ~ res:', res.data.content)
				setDetailPro(res.data.content)
			})
			.catch((error) => {
				console.error('Error fetching product details:', error)
			})
	}, [product?.category_id, product?.product_id])

	const handleMouseEnter = () => {
		if (!isPressed && !isDisabled) {
			setIsHovered(true)
		}
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleMouseDown = () => {
		if (
			!isDisabled &&
			detailPro &&
			detailPro.shelf_id_shelves &&
			detailPro.shelf_id_shelves[0]
		) {
			setIsHovered(false)
			setIsPressed(true)

			const data = {
				category_id: product?.category_id,
				product_id: product?.product_id,
				product_name: product?.product_name,
				product_img: product?.product_img,
				product_condition: product?.product_condition,
				import_price: product?.import_price,
				selling_price: product?.selling_price,
				description: product?.description,
				instockquantity:
					detailPro.shelf_id_shelves[0]?.shelf_products?.quantity || 0,
				quantity: 1,
			}

			cartLocal.addToCart(data)
		} else {
			console.error('Product details are incomplete or missing.')
		}
	}

	return (
		<button
			className={`relative h-[40px] w-[135px] ${isDisabled ? 'opacity-50' : ''}`}
			onClick={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				borderRadius: '10px',
				overflow: 'visible',
				backgroundColor: isPressed
					? '#CADBB7' // Light green when pressed
					: isHovered && !isDisabled
						? '#CADBB7' // Light green on hover
						: '#485935', // Dark green by default
				boxShadow:
					isPressed && !isDisabled ? '4px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
			}}
			disabled={isDisabled}
		>
			<div
				className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-center"
				style={{
					color: isHovered && !isDisabled ? '#FFFFFF' : '#FFFFFF',
					fontWeight: '800',
					fontSize: '18px',
				}}
			>
				Add to cart
			</div>

			{isDisabled && (
				<div
					className="bg-gray-300 absolute left-0 top-0 h-full w-full rounded-[10px] opacity-50"
					style={{ pointerEvents: 'none' }}
				/>
			)}
		</button>
	)
}

export default AddToCart
