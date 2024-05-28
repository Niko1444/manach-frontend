import React from 'react';
import banana from '../../assets/banana.png'
import bigstraw from '../../assets/bigstraw.png'

const TopFruitExplore = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, 
      }}
    >
      <div
        style={{
          width: '590px',
          height: '680px',
          background: 'white',
          borderRadius: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <div
          style={{
            color: '#485935',
            fontSize: 24,
            fontFamily: 'Poppins',
            fontWeight: '600',
            wordWrap: 'break-word',
            width: '100%',
          }}
        >
          Top Fruit of the Day
          <hr
            style={{
              borderTop: '3px solid black',
              width: '90%',
              marginTop: '10px',
            }}
          />
        </div>
        <div>
          <div className="flex">
            <img className='my-auto'
              style={{
                width: '20%',
                height: '20%',
              }}
              src={bigstraw}
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 22,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Strawberry
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Cavendish Banana
              </div>
            </div>
          </div>
          <div
            style={{
              color: '#485935',
              fontSize: 24,
              fontFamily: 'Poppins',
              fontWeight: '600',
              wordWrap: 'break-word',
              width: '100%',
            }}
          >
            Top Fruit of the Week
            <hr
              style={{
                borderTop: '3px solid black',
                width: '90%',
                marginTop: '10px',
              }}
            />
          </div>
          <div className="flex">
            <img className='my-auto'
              style={{
                width: '20%',
                height: '20%',
              }}
              src={banana}
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 22,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Cavendish Banana
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Red Spanish Pineapple
              </div>
            </div>
          </div>
          <div
            style={{
              color: '#485935',
              fontSize: 24,
              fontFamily: 'Poppins',
              fontWeight: '600',
              wordWrap: 'break-word',
              width: '100%',
            }}
          >
            Top Fruit of the Month
            <hr
              style={{
                borderTop: '3px solid black',
                width: '90%',
                marginTop: '10px',
              }}
            />
          </div>
          <div className="flex">
            <img className='my-auto'
              style={{
                width: '20%',
                height: '20%',
              }}
              src={banana}
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 22,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Cavendish Banana
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Red Spanish Pineapple
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            left: '80%',
          }}
        >
          <div
            style={{
              width: 103,
              height: 52.27,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: 15,
              border: '1px #485935 solid',
              cursor: 'pointer',
            }}
            onClick={onClose}
          />
          <div
            style={{
              width: 62,
              height: 32,
              left: 20,
              top: 10,
              position: 'absolute',
              textAlign: 'center',
              color: '#485935',
              fontSize: 21,
              fontFamily: 'Poppins',
              fontWeight: '300',
              wordWrap: 'break-word',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFruitExplore;
