import React from 'react';
import FreshBox from '../../assets/FreshBox.png'
import TienGiangSL from '../../assets/TienGiangSL.png'
import DDNF from '../../assets/DDNF.png'

const NewSupplier = ({ onClose }) => {
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
          width: '700px',
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
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight: '600',
            wordWrap: 'break-word',
            width: '100%',
          }}
        >
          New Suppliers
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
            <img
              style={{
                width: '25%',
                height: '25%',
                borderRadius: '15px',
                marginTop: '20px',
              }}
              src={FreshBox}
            />
            <div
              style={{
                width: '70%',
                height: '70%',
                marginLeft: '30px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  wordWrap: 'break-word',
                  width: '100%',
                }}
              >
                Fresh Box
              </div>

              <div
                style={{
                  color: '#485935',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                Fresh Box is a new provider that specializes on high-quality
                banana products.
              </div>
            </div>
          </div>
          <hr
            style={{
              borderTop: '3px solid black',
              width: '90%',
              marginTop: '10px',
            }}
          />
          <div className="flex">
            <img
              style={{
                width: '25%',
                height: '25%',
                borderRadius: '15px',
                marginTop: '20px',
              }}
              src={TienGiangSL}
            />
            <div
              style={{
                width: '70%',
                height: '70%',
                marginLeft: '30px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  wordWrap: 'break-word',
                  width: '100%',
                }}
              >
                TienGiangSL
              </div>

              <div
                style={{
                  color: '#485935',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                TienGiangSL, a renowned local supplier <br /> in Vietnam, is a
                rural brand cultivated by local farmers known for its tropical
                fruits.
              </div>
            </div>
          </div>
          <hr
            style={{
              borderTop: '3px solid black',
              width: '90%',
              marginTop: '10px',
            }}
          />
          <div className="flex">
            <img
              style={{
                width: '25%',
                height: '25%',
                borderRadius: '15px',
                marginTop: '20px',
              }}
              src={DDNF}
            />
            <div
              style={{
                width: '70%',
                height: '70%',
                marginLeft: '30px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  wordWrap: 'break-word',
                  width: '100%',
                }}
              >
                DDNF
              </div>

              <div
                style={{
                  color: '#485935',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                DDNF, a new brand by young people, promotes variety and
                encourages fruit consumption among children by linking it to
                various fruit sources.
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
    </div>
  );
};

export default NewSupplier;
