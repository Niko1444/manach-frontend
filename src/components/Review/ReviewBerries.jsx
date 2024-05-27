import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ripe from '../StateRipe/Ripe.jsx';
import Firm from '../StateRipe/Firm.jsx';
import UnRipe from '../StateRipe/UnRipe.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';

const ReviewBerries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);

  useEffect(() => {
    const urls = [
      'http://localhost:8080/store/category/5',
      'http://localhost:8080/store/category/6',
      'http://localhost:8080/store/category/7',
      'http://localhost:8080/store/category/9'
    ];

    axios
      .all(urls.map(url => axios.get(url)))
      .then(
        axios.spread((...responses) => {
          const combinedData = responses
            .map(response => response.data.content)
            .flat()
            .map(product => ({
              ...product,
              color: getProductConditionColor(product.product_condition),
            }));
          setProducts(combinedData);
        })
      )
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const getProductConditionColor = (condition) => {
    switch (condition) {
      case 'ripe':
        return '#F0716780';
      case 'firm':
        return '#FFD70380';
      case 'unripe':
        return '#89B90080';
      default:
        return '';
    }
  };

  const handleButtonClick = (condition) => {
    setSelectedCondition(condition);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredProducts = selectedCondition
    ? products.filter((product) => product.product_condition === selectedCondition)
    : products;

  const getConditionWord = (condition) => {
    switch (condition) {
      case 'ripe':
        return 'Ripe';
      case 'firm':
        return 'Firm';
      case 'unripe':
        return 'Unripe';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="flex gap-8 py-2 mb-5">
        <UnRipe
          onClick={() => handleButtonClick('unripe')}
          isSelected={selectedCondition === 'unripe'}
        />
        <Firm
          onClick={() => handleButtonClick('firm')}
          isSelected={selectedCondition === 'firm'}
        />
        <Ripe
          onClick={() => handleButtonClick('ripe')}
          isSelected={selectedCondition === 'ripe'}
        />
      </div>
      <div className={isModalOpen ? 'modal-open' : ''}>
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="mb-[20px]">
            <div
              style={{
                width: '733px',
                height: '313px',
                display: 'grid',
                gridTemplateColumns: '326px 1fr',
                background: '#FFF',
                borderRadius: '10px',
                boxShadow: '0px 15px 40px 0px #C2C9AC',
              }}
            >
              <div className="m-auto">
                <img src={product.product_img} alt={product.product_name} />
              </div>
              <div className="mt-[56px]">
                <div
                  style={{
                    color: '#485935',
                    fontSize: '22px',
                    fontWeight: '500',
                  }}
                >
                  {product.product_name}
                </div>
                <div className="mb-[19px] flex">
                  <i
                    className="fa fa-star"
                    style={{
                      color: '#CADBB7',
                      fontSize: '1.25rem',
                      marginRight: '10px',
                    }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{
                      color: '#CADBB7',
                      fontSize: '1.25rem',
                      marginRight: '10px',
                    }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{
                      color: '#CADBB7',
                      fontSize: '1.25rem',
                      marginRight: '10px',
                    }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{
                      color: '#CADBB7',
                      fontSize: '1.25rem',
                      marginRight: '10px',
                    }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{
                      color: '#CADBB7',
                      fontSize: '1.25rem',
                      marginRight: '18px',
                    }}
                  ></i>
                  <div
                    style={{
                      color: '#485935',
                      fontSize: '18px',
                      fontWeight: '300',
                    }}
                  >
                    (2400+ Reviews)
                  </div>
                </div>
                <div
                  className="h-fixed w-[379px]"
                  style={{ color: '#000', fontSize: '16px', fontWeight: '300' }}
                >
                  {product.description}
                </div>
                <div className="flex flex-col">
                  <div className="my-auto flex">
                    <div
                      className="mr-[19px]"
                      style={{
                        color: '#485935',
                        fontSize: '18px',
                        fontWeight: '700',
                      }}
                    >
                      Price:
                    </div>
                    <div
                      className="mr-[28px]"
                      style={{
                        color: '#485935',
                        fontSize: '18px',
                        fontWeight: '700',
                      }}
                    >
                      ${product.selling_price}/kg
                    </div>
                  </div>
                  <div className="my-auto flex">
                    {getConditionWord(product.product_condition) && (
                      <span
                        className="mr-2"
                        style={{
                          color: '#485935',
                          fontSize: '18px',
                          fontWeight: '700',
                        }}
                      >
                        Condition:
                      </span>
                    )}
                    {getConditionWord(product.product_condition) && (
                      <span
                        className="mr-2"
                        style={{
                          color: getProductConditionColor(product.product_condition),
                          fontSize: '18px',
                          fontWeight: '700',
                        }}
                      >
                        {getConditionWord(product.product_condition)}
                      </span>
                    )}
                  </div>                  
                </div>
                <div>
                    <AddToCart />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewBerries;
