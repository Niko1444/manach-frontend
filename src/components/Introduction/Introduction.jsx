import React from 'react'

const Introduction = () => {
    return (
        <div className='relative'>
            <div className='h-full w-full inset-0 bg-cover bg-center'>
                <img src="src/assets/fruits.png" 
                alt=""               
                />
            </div>
            <div className='absolute'
                style={{
                    top: '314px',
                    right: '201px',
                    display: 'flex',
                    flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
                    backgroundColor: '#FFF',
                    width: '738px',
                    height: '571px',
                    border: '1px solid black',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 2px 0px rgba(23, 26, 31, 0.12), 0px 4px 9px 0px rgba(23, 26, 31, 0.11)',
                }}
            >
                <div
                    style={{
                        width: '197px',
                        height: '68px',
                        textAlign: 'center',
                        color: '#2C3721',
                        fontFamily: 'Poppins',
                        fontSize: '48px',
                        fontWeight: '400',
                        lineHeight: '68px',
                        wordWrap: 'break-word',
                        marginTop: '18px',
                    }}
                >
                    Manach
                </div>
                <div
                    style={{
                        width: '666px',
                        height: '112px',
                        color: '#485935',
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        wordWrap: 'break-word',
                    }}
                >
                At Manach, we believe everyone should indulge in fresh fruits. 
                From our premium selection to our exceptional service, 
                embracing healthy eating has never been easier—or more delightful! 
                Step into our store and experience the freshness and nourishment of clean fruits today!
                </div>
                <div
                    style={{
                        width: '193px',
                        height: '36px',
                        color: '#2C3721',
                        fontFamily: 'Poppins',
                        fontSize: '24px',
                        fontWeight: '700',
                        lineHeight: '36px',
                        wordWrap: 'break-word',
                        marginLeft: '-475px',
                        marginTop: '16px',
                    }}
                >
                    What's Manach
                </div>
                <div
                    style={{
                        width: '666px',
                        height: '252px',
                        color: '#485935',
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        wordWrap: 'break-word',
                    }}
                >
                Manach is your premier online destination for clean, fresh fruits sourced from a variety of local and international suppliers, 
                with a special emphasis on supporting rural farmers in Vietnam. We prioritize sourcing from local farmers, 
                ensuring that our fruits are not only of the highest quality but also ethically and sustainably produced. 
                Our diverse selection of clean fruits guarantees both quality and affordability, making healthy eating accessible to all. 
                Join us in our mission to promote wellness and support local communities through every delicious bite of our handpicked fruits.
                </div>
                <div style={{justifyContent: 'center', alignItems: 'center',}}>
					<button
						style={{
							width: '219px',
							height: '52px',
							backgroundColor: '#485935',
							color: '#FFF',
							fontFamily: 'Inter',
							fontSize: '20px',
							fontWeight: '400',
							border: 'none',
							borderRadius: '26px',
							cursor: 'pointer',
						}}
					>
						Shopping Now
					</button>
				</div>
            </div>
        </div>
    )
}

export default Introduction