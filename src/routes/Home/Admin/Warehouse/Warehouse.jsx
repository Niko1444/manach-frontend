//import SearchBar from '../../../../components/SearchBar/SearchBar'
//import DecreasingSorted from './Inventory/DecreasingSorted'
//import IncreasingSorted from './Inventory/IncreasingSorted'
//import Inventory from './Inventory/Inventory'
//import SortingByFruit from './Inventory/SortByFruit'

import React, { useState } from 'react'
import ReOrder from './ReOrder'

const Warehouse = () => {
    const [activeTab, setActiveTab] = useState('Inventory')

    const headerContainerStyle = {
        color: '#485935',
        fontSize: 26,
        fontFamily: 'Poppins',
        fontWeight: '800',
        wordWrap: 'break-word',
        margin: '63px 0 0 50px',
        width: '75%',
    }
    const infoBoxContainerStyle = {
        display: 'flex',
        width: '100%',
        margin: '60px 0 0 60px',
        gap: '50px',
        marginBottom: '40px',
    }

    const infoBoxStyle = {
        width: '208px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #485935',
        borderRadius: '18px',
        backgroundColor: 'white',
        color: '#485935',
        fontSize: '20px',
        fontWeight: '600',
        cursor: 'pointer',
    }

    const titleStyle = {
        fontSize: '22px',
        marginBottom: '5px',
    }

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px',
        overflowX: 'hidden', // Ensures horizontal scroll bar is hidden
        width: 'calc(100% - 50px)' // Ensure it fits within the parent container
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'Inventory':
                return <div style={contentStyle}>Inventory Content</div>
            case 'Re-order':
                return <div style={contentStyle}>
					<ReOrder/>
                </div>
            case 'Stock adjustment':
                return <div style={contentStyle}>Stock adjustment Content</div>
            case 'Order history':
                return <div style={contentStyle}>Order history Content</div>
            default:
                return null
        }
    }

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div style={headerContainerStyle}>
                <div style={{ color: '#485935', fontSize: '26px', fontWeight: 900 }}>
                    Warehouse Management
                </div>
                <div style={{ color: '#93A267', fontSize: '18px', fontStyle: 'italic', fontWeight: 400 }}>
                    From top brands
                </div>
            </div>

            <div style={infoBoxContainerStyle}>
                <div style={infoBoxStyle} onClick={() => setActiveTab('Inventory')}>
                    <div style={titleStyle}>Inventory</div>
                </div>
                <div style={infoBoxStyle} onClick={() => setActiveTab('Re-order')}>
                    <div style={titleStyle}>Re-order</div>
                </div>
                <div style={infoBoxStyle} onClick={() => setActiveTab('Stock adjustment')}>
                    <div style={titleStyle}>Stock adjustment</div>
                </div>
                <div style={infoBoxStyle} onClick={() => setActiveTab('Order history')}>
                    <div style={titleStyle}>Order history</div>
                </div>
            </div>

            {renderContent()}
        </div>
    )
}

export default Warehouse
