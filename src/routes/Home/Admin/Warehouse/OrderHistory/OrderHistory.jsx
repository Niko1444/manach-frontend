import React from 'react'

const OrderHistory = () => {
    const backgroundStyle = {
        width: '1000px',
        height: 'auto',
        borderRadius: '10px',
        border: '1px solid #D9D9D9',
        marginTop: '67px',
    }

    const boxContainer = {
        display: 'grid',
        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
    }

    const boxStyle = {
        width: '854px',
        height: '260px',
        borderRadius: '10px',
        background: '#C2C9AC',
        marginLeft: '73px',
        marginTop: '67px'
    }

    const lineStyle = {
        width: '218px',
        height: '0px',
        //transform: 'rotate(90deg)',
        //strokeWidth: '4px',
        stroke: '#93A268',
        marginLeft: '17px',
        marginTop: '21px'
    }

  return (
    <div style={backgroundStyle}>
        <div style={boxContainer}>
            <div style={boxStyle}>
                <div style={lineStyle}></div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistory