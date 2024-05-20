// Example for TopFruitBanana component
import React from 'react';

const TopFruitBanana = () => {
    return (
        <div
            style={{
                width: '392px',
                height: '400px',
                background: 'white',
                margin: '10px',
                borderRadius: 10,
                overflow: 'hidden',
                border: '1px #DEE1E6 solid',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '10px',
                display: 'inline-flex',
                cursor: 'pointer', // Add cursor pointer for better UX
            }}    
        >
            <img
                style={{ width: '392px', height: '240px' }}
                src="https://s3-alpha-sig.figma.com/img/462e/7ff6/a038206917e8366ec21f88b43f14b079?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rw2cO19BA245SQzhzIdtzGWBv6rQUTEVudEtWpCjTre49lvdCiJ2O1lGfduoq63EU8qf-sz35Slx3ZZ95BxZm1Pm7nRjstu1jea79gfi~~0wQ1wjmUbXMeHkIooGukXp4ctAyI8hq6Kk7tq8olx3AOZtTfrHF0q9lRutuNgt3UMWTNfWzyXI36vwUbWcu3s7sBgtflpEVhx1-XQrAN7y2rw34wjiA1xBmAZwg~dJDfooZBa8gPc1fqmDYBukJkTViV5~0PbjO-xIKNfarvZ4Zb70gQIKmKi5sxaAceEWwKSifS0CNM9gLOIfjazD1j4cJBmXmaktsrSvF0cgBHlgvQ__"
            />
            <div className="flex">
                <div
                    style={{
                        color: '#2C3721',
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        fontWeight: '700',
                        wordWrap: 'break-word',
                        paddingLeft: '15px',
                    }}
                >
                    Banana
                </div>
                <div className="p-[6px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M7.99945 1.56494C6.72674 1.56494 5.48258 1.94235 4.42437 2.64943C3.36613 3.35652 2.54134 4.36153 2.05429 5.53738C1.56724 6.71321 1.43981 8.00707 1.6881 9.25536C1.9364 10.5036 2.54927 11.6502 3.44922 12.5502C4.34919 13.4501 5.49578 14.063 6.74403 14.3113C7.99232 14.5596 9.28619 14.4322 10.462 13.9451C11.6379 13.458 12.6429 12.6333 13.35 11.575C14.0571 10.5168 14.4345 9.27265 14.4345 7.99994C14.4312 6.29427 13.7522 4.65942 12.5461 3.45333C11.34 2.24723 9.70512 1.56821 7.99945 1.56494ZM11.0623 6.87382L7.43641 10.3388C7.34265 10.427 7.21857 10.4757 7.08991 10.4749C7.02698 10.4758 6.96454 10.4643 6.90613 10.4409C6.84772 10.4176 6.79452 10.3828 6.74958 10.3388L4.93666 8.60632C4.88636 8.56246 4.84548 8.50887 4.8164 8.44877C4.78736 8.38871 4.77077 8.32337 4.76763 8.25671C4.76446 8.19005 4.77483 8.12346 4.79806 8.06089C4.82132 7.99836 4.85696 7.94114 4.90286 7.89272C4.9488 7.84428 5.00404 7.80567 5.06526 7.77914C5.12651 7.75261 5.19247 7.73871 5.25911 7.73874C5.32575 7.73874 5.39174 7.7527 5.45299 7.77926C5.51421 7.80581 5.56949 7.84439 5.6154 7.89272L7.09718 9.3322L10.3841 6.1257C10.4303 6.07738 10.4868 6.0388 10.548 6.01224C10.6093 5.98569 10.6753 5.97172 10.742 5.97172C10.8087 5.97172 10.8747 5.98569 10.9359 6.01224C10.9972 6.0388 11.0537 6.07738 11.0999 6.1257C11.1461 6.17408 11.1818 6.23131 11.205 6.29383C11.2282 6.3564 11.2386 6.42299 11.2354 6.48966C11.2323 6.55632 11.2157 6.62166 11.1866 6.68172C11.1576 6.74182 11.1167 6.79541 11.0664 6.83926L11.0623 6.87382Z"
                            fill="#93A267"
                        />
                    </svg>
                </div>
            </div>
            <div
                style={{
                    color: '#63724D',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    paddingLeft: '15px',
                }}
            >
                Banana from store
            </div>
        </div>
    );
};

export default TopFruitBanana;
