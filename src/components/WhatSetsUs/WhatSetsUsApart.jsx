import React from 'react'

const WhatSetsUsApart = () => {
	return (
		<div>
			<div
				style={{
					width: '100vw',
					height: '128vh',
					backgroundColor: '#485935',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: '170px',
				}}
			>
				<div
					style={{
						width: '528px',
						height: '106px',
						color: '#ECF5E1',
						fontSize: '48px',
						fontFamily: 'Poppins',
                        fontStyle: 'normal',
						fontWeight: '700',
						lineHeight: 'normal',
                        whiteSpace: 'normal',
                        paddingTop: '107px'
					}}
				>
					What sets us apart?
				</div>
                <div 
                    style={{
                        width: '700px',
                        height: '138px',  
                        color: '#CADBB7',
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        whiteSpace: 'normal',
                        paddingTop: '100px',
                    }}  
                    >
                    It's our constant dedication to sourcing from trusted suppliers who value quality as much as we do. Any fruit products in Manach has a specific origin, being gathered directly from farmers that value premium quality and sustainable farming methods.
                </div>
			    <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
                    paddingTop: '180px',
                    gridGap:'86px',
                    }}
                    >
                    <div className='m-auto h-fit w-full'>
                        <img src="/src/assets/pic_1.png" 
                        alt="" 
                        style={{
                            width: '300px',
                            height: '350px',
                            background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
                        }}/>
                    </div>
                    <div className='m-auto h-fit w-full'>
                        <img src="/src/assets/pic_2.png" 
                        alt="" 
                        style={{
                            width: '300px',
                            height: '350px',
                            background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
                        }}/>
                    </div>
                    <div className='m-auto h-fit w-full'>
                        <img src="/src/assets/pic_3.png" 
                        alt="" 
                        style={{
                            width: '300px',
                            height: '350px',
                            background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
                        }}/>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '86px',paddingLeft: '51.625rem',}}>
                <div
                style={{
                    width: '533px',
                    height: '60px',
                    color: '#485935',
                    fontFamily: 'Poppins',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontHeight: '700',
                    lineHeight: 'normal',
                    whiteSpace: 'nowrap',
                }}  
                >
                    What are you craving for?
                </div>
                <div
                style={{
                    width: '179px',
                    height: '36px',
                    color: '#485935',
                    fontFamily: 'Poppins',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    paddingTop: '27px',
                }}
                >   
                    Visit our store
                </div>
                    <div
                    style={{
                        width: '531px',
                        height: '164px',
                        color: '#485935',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        paddingTop: '60px',
                    }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div style={{ marginLeft: '12rem', paddingTop: '120px', }}>
                        <button
                            style={{
                                width: '186px',
                                height: '38px',
                                backgroundColor: '#93A267',      
                                fontColor: '#48593',
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: '500',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                        >
                            VISIT STORE
                        </button>
                    </div>
                    <div className='m-auto h-fit w-full'>
                    <img src="/src/assets/pic_4.png" 
                        alt="" 
                        style={{
                            position: 'absolute', top: '128vh', left: '0',
                            width: '50%',
                            height: '80vh',
                            background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
                        }}
                    />
                </div>
            </div>
		</div>
	)
}

export default WhatSetsUsApart