import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddToShelf from '../../../../../components/AddToShelf/AddToShelf';

Modal.setAppElement('#root'); // Add this line for accessibility

const StockAdjustment = () => {
    const [showProductList, setShowProductList] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [warehouseSummary, setWarehouseSummary] = useState({});
    const [shelfSummary, setShelfSummary] = useState({});
    const [shelfQuantities, setShelfQuantities] = useState({});

    const fetchData = () => {
        fetch('http://localhost:8080/warehouse/stock-adjust')
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Success') {
                    setProducts(data.content.getProducts);
                    setWarehouseSummary(data.content.warehouseSummary);
                    setShelfSummary(data.content.shelfSummary);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleQuantityChange = (productId, change) => {
        setShelfQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(0, (prevQuantities[productId] || 0) + change)
        }));
    };

    const submitShelfQuantities = () => {
        const payload = {
            products: Object.keys(shelfQuantities).map(productId => ({
                product_id: parseInt(productId),
                quantity: shelfQuantities[productId],
                shelf_id: 1 // Assuming shelf_id is 1, adjust if necessary
            }))
        };

        fetch('http://localhost:8080/warehouse/stock-adjust/add-shelf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Success') {
                    console.log('Success:', data);
                    fetchData(); // Refresh data after successful submission
                    setShelfQuantities({}); // Reset quantities to 0
                }
            })
            .catch(error => console.error('Error submitting data:', error));
    };

    const tableStyle = {
        width: 'auto',
        borderCollapse: 'collapse',
        textAlign: 'center',
        maxWidth: '91.5%',
    };

    const thStyle = {
        color: '#485935',
        fontWeight: 500,
        fontSize: '20px',
        border: '1px solid #485935',
        height: '50px',
    };

    const tdStyle = {
        color: '#485935',
        fontSize: '20px',
        border: '1px solid #485935',
        height: '100px',
        padding: '20px',
    };

    const innerBorderStyle = {
        borderLeft: '1.5px solid #CADBB7',
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="relative h-[156px] w-[978px]" style={{ margin: '30px' }}>
                <div className="absolute left-0 top-0 h-[156px] w-[978px] border" style={{ color: '#485935' }} />
                <div className="absolute left-[12px] top-[63px] h-20 w-[215px]">
                    <div className="absolute left-0 top-0 h-20 w-[215px] border" style={{ color: '#485935' }} />
                    <div className="text-xl absolute left-[13px] top-[10px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 400 }}>
                        Total Products
                    </div>
                    <div className="text-xl absolute left-[70px] top-[40px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 700 }}>
                        {warehouseSummary.warehouseTotalQuantity} kg
                    </div>
                </div>
                <div className="absolute left-[257px] top-[63px] h-20 w-[215px]">
                    <div className="absolute left-0 top-0 h-20 w-[215px] border" style={{ color: '#485935' }} />
                    <div className="text-xl absolute left-[15px] top-[10px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 400 }}>
                        Low-stock alerts
                    </div>
                    <div className="text-xl absolute left-[52px] top-[40px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 700 }}>
                        {warehouseSummary.lowStockWarehouseCount} products
                    </div>
                </div>
                <div className="absolute left-[506px] top-[63px] h-20 w-[215px]">
                    <div className="absolute left-0 top-0 h-20 w-[215px] border" style={{ color: '#485935' }} />
                    <div className="text-xl absolute left-[12px] top-[10px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 400 }}>
                        Total Products
                    </div>
                    <div className="text-xl absolute left-[57px] top-[40px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 700 }}>
                        {shelfSummary.shelfTotalQuantity} kg
                    </div>
                </div>
                <div className="absolute left-[751px] top-[63px] h-20 w-[215px]">
                    <div className="absolute left-0 top-0 h-20 w-[215px] border" style={{ color: '#485935' }} />
                    <div className="text-xl absolute left-[15px] top-[10px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 400 }}>
                        Low-stock alerts
                    </div>
                    <div className="text-xl absolute left-[73px] top-[40px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 700 }}>
                        {shelfSummary.lowStockShelfCount} products
                    </div>
                </div>
                <div className="absolute left-[489px] top-0 h-[0px] w-[156px] origin-top-left rotate-90" style={{ border: '0.5px solid #485935' }}></div>
                <div className="text-lg absolute left-[12px] top-[15px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 100 }}>
                    Warehouse Summary
                </div>
                <div className="text-lg absolute left-[506px] top-[15px] text-center font-['Poppins']" style={{ color: '#485935', fontWeight: 100 }}>
                    Shelf Summary
                </div>
            </div>

            <div className="my-8 mr-24 flex items-center justify-between">
                <div className="text-stone-700 text-4xl h-[65px] w-[273px] font-['Poppins']" style={{ color: '#485935', fontSize: '36px', fontWeight: 700 }}>
                    Shelf-display
                </div>
                <button className="rounded-2xl bg-green_dark1 px-6 py-4 text-[1.5rem] font-semibold text-offwhite" onClick={submitShelfQuantities}>
                    Add item(s) to shelf
                </button>
            </div>

            {showProductList && (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={{ ...thStyle, width: '8%' }}></th>
                            <th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>Name</th>
                            <th style={{ ...thStyle, ...innerBorderStyle, width: '20%' }}>Quantity in Warehouse</th>
                            <th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>Quantity Displayed</th>
                            <th style={{ ...thStyle, ...innerBorderStyle, width: '12%' }}>Add to shelf</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product.product_id}>
                                <td style={tdStyle}>
                                    <img src={product.product_img} style={{ maxWidth: '100%' }} alt={product.product_name} />
                                </td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>{product.product_name}</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>{product.warehouse_products[0]?.quantity}</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>{product.shelf_products[0]?.quantity}</td>
                                <td style={{ ...tdStyle, ...innerBorderStyle }}>
                                    <AddToShelf
                                        productId={product.product_id}
                                        quantity={shelfQuantities[product.product_id] || 0}
                                        onQuantityChange={handleQuantityChange}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add Item to Shelf"
            >
                {/* Modal content can go here */}
            </Modal>
        </div>
    );
};

export default StockAdjustment;
