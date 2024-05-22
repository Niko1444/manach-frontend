import React, { useState } from 'react'
import durian from '../../../../assets/monthong durian 1.png'
import strawberry from '../../../../assets/strawberry.png'
import raspberry from '../../../../assets/raspberry.png'
import coconut from '../../../../assets/coconut.png'

const ReOrder = () => {
    const [showProductList, setShowProductList] = useState(false)

    const viewOrderStyle = {
        width: '976px',
        height: '141px',
        border: '1px solid #485935',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px'
    }

    const producListStyle = {
        color: '#485935', fontSize: '36px', fontWeight: 700, marginBottom: '30px'
    }

    const tableStyle = {
        width: 'auto',
        borderCollapse: 'collapse',
        textAlign: 'center',
    }

    const thStyle = {
        color: '#485935',
        fontWeight: 500,
        fontSize: '20px',
        border: '1px solid #485935',
        height: '50px',
    }

    const tdStyle = {
        color: '#485935',
        fontSize: '20px',
        border: '1px solid #485935',
        height: '100px',
        padding: '20px',
    }

    const innerBorderStyle = {
        borderLeft: '1.5px solid #CADBB7',
    }

    const handleViewOrderClick = () => {
        setShowProductList(prevState => !prevState)
    }

    return (
        <div>
            <div style={viewOrderStyle}>
                <div className='ml-[35px]' style={{ fontSize: '20px', fontWeight: 400 }}>No orders have been placed yet.</div>
                <div
                    className='ml-[440px] flex justify-center items-center font-semibold rounded-[18px]'
                    style={{
                        width: '150px',
                        height: '50px',
                        //opacity: 0.3,
                        color: '#fff',
                        background: showProductList ? '#9C9C9C' : '#485935',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={handleViewOrderClick}
                >
                    {showProductList ? 'Hide order' : 'View order'}
                </div>
            </div>

            {showProductList && (
                <>
                    <div style={producListStyle}>
                        Product List <br /> Increasing order
                    </div>

                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={{ ...thStyle, width: '10%' }}></th>
                                <th style={{ ...thStyle, ...innerBorderStyle, width: '20%' }}>
                                    Name
                                </th>
                                <th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>
                                    Quantity in stock
                                </th>
                                <th style={{ ...thStyle, ...innerBorderStyle, width: '15%' }}>
                                    Status
                                </th>
                                <th style={{ ...thStyle, ...innerBorderStyle, width: '13%' }}>
                                    Re-order
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td style={tdStyle}><img src={durian} style={{ maxWidth: '100%' }} /></td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Vietnamese Durian
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>0</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>Out of stock</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>$123</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}><img src={strawberry} style={{ maxWidth: '100%' }} /></td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Strawberry
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>0</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Out of stock
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>$420</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}><img src={raspberry} style={{ maxWidth: '100%' }} /></td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Raspberry
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>0</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Out of stock
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>$1450</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}><img src={coconut} style={{ maxWidth: '100%' }} /></td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    Green Siamese Coconut
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>0</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>Out of stock</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>$250</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default ReOrder
