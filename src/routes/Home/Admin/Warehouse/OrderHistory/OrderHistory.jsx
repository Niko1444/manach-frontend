import React from 'react';

const OrderHistory = () => {
  const backgroundStyle = {
    width: '1000px',
    height: 'auto',
    borderRadius: '10px',
    border: '1px solid #D9D9D9',
    marginTop: '67px',
    marginLeft: '62px',
    padding: '60px 0',
  };

  const boxSuccessStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '854px',
    height: '260px',
    borderRadius: '10px',
    background: '#C2C9AC',
    margin: '0 auto 25px',
  };

  const boxFailStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '854px',
    height: '260px',
    borderRadius: '10px',
    background: '#F0716780',
    margin: '0 auto 25px',
  };

  const orderTitleStyle = {
    color: '#485935',
    fontSize: '24px',
    fontWeight: '600',
    marginTop: '35px',
    marginLeft: '35px',
  };

  const contentSuccessStyle = {
    color: '#485935',
    fontSize: '20px',
    fontWeight: '400',
    marginTop: '15px',
    marginLeft: '35px',
  };

  const contentFailStyle = {
    color: '#485935',
    fontSize: '20px',
    fontWeight: '400',
    marginTop: '15px',
    marginLeft: '35px',
  };

  const totalStyle = {
    color: '#485935',
    fontSize: '24px',
    fontWeight: '600',
    marginRight: '40px',
  };

  const orderSuccessData = [
    {
      orderNo: '001',
      timeDate: '11:01 - 11/11/2023',
      quantity: 40,
      deliveryStatus: 'Successfully Delivered',
      dateOfArrival: '12/11/2023',
      supplierName: 'ABCD Supplier',
      supplierId: 'SS12356',
      total: '$1000',
    },
    {
      orderNo: '003',
      timeDate: '12:01 - 12/11/2023',
      quantity: 30,
      deliveryStatus: 'Pending',
      dateOfArrival: '13/11/2023',
      supplierName: 'EFGH Supplier',
      supplierId: 'SS12357',
      total: '$800',
    },
  ];

  const orderFailData = [
    {
      orderNo: '002',
      timeDate: '13:01 - 13/11/2023',
      quantity: 50,
      deliveryStatus: 'Delivery Failed',
      dateOfArrival: '14/11/2023',
      supplierName: 'IJKL Supplier',
      supplierId: 'SS12358',
      total: '$1200',
    },
    {
      orderNo: '004',
      timeDate: '14:01 - 14/11/2023',
      quantity: 20,
      deliveryStatus: 'Delivery Failed',
      dateOfArrival: '15/11/2023',
      supplierName: 'MNOP Supplier',
      supplierId: 'SS12359',
      total: '$500',
    },
  ];

  const combinedOrderData = [...orderSuccessData, ...orderFailData].sort((a, b) => a.orderNo.localeCompare(b.orderNo));

  const renderOrderBox = (order) => {
    const isFailed = order.deliveryStatus === 'Delivery Failed';
    return (
      <div style={isFailed ? boxFailStyle : boxSuccessStyle} key={order.orderNo}>
        <div style={orderTitleStyle}>Order no. {order.orderNo}</div>
        <div style={{ display: 'flex' }}>
          <div style={isFailed ? contentFailStyle : contentSuccessStyle}>
            Time & Date: {order.timeDate} <br />
            Quantity: {order.quantity} <br />
            Delivery Status: {order.deliveryStatus} <br />
            Date of Arrival: {order.dateOfArrival}
          </div>
          <div style={isFailed ? contentFailStyle : contentSuccessStyle}>
            Supplier name: {order.supplierName} <br />
            Supplier ID: {order.supplierId}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={totalStyle}>Total: {order.total}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={backgroundStyle}>
      {combinedOrderData.map((order) => renderOrderBox(order))}
    </div>
  );
};

export default OrderHistory;
