// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const AddToCart = ({ productId }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [cart, setCart] = useState([]) // State to manage cart items

  const handleMouseEnter = () => {
    if (!isPressed && !isDisabled) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseDown = () => {
    if (!isDisabled) {
      setIsHovered(false)
      setIsPressed(true)
      fetchProductData(productId)
        .then(product => {
          // Add the product to the cart
          setCart(prevCart => [...prevCart, product])
          setIsPressed(false)
        })
        .catch(error => {
          console.error('Error adding product to cart:', error)
          setIsPressed(false)
        })
    }
  }

  const handleDisable = (disabled) => {
    setIsDisabled(disabled)
  }

  const fetchProductData = async (id) => {
    // Simulate fetching product data from an API
    const response = await fetch(`/api/products/${id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const product = await response.json()
    return product
  }

  return (
    <div
      className={`relative h-[40px] w-[135px] ${isDisabled ? 'opacity-50' : ''}`}
      onClick={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: '10px',
        overflow: 'visible',
        backgroundColor: isHovered && !isDisabled ? '#CADBB7' : '#485935',
        boxShadow:
          isPressed && !isDisabled
            ? '4px 4px 4px rgba(0, 0, 0, 0.25)'
            : 'none',
      }}
    >
      <div
        className="text-center absolute left-0 top-0 flex h-full w-full items-center justify-center"
        style={{
          color: isHovered && !isDisabled ? '#FFFFFF' : '#FFFFF',
          fontWeight: '800',
          fontSize: '18px',
        }}
      >
        Add to cart
      </div>

      {/* Disabled overlay (if disabled) */}
      {isDisabled && (
        <div
          className="bg-gray-300 absolute left-0 top-0 h-full w-full rounded-[10px] opacity-50"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </div>
  )
}

export default AddToCart
