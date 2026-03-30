import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center p-3'>
                <div className='col-lg-6 p-4 text-center'>
                    <img src={imageURL} alt={productName} style={{ width: '85%' }} />
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 p-4'>
                    <h1 className='fs-2 fw-semibold mb-3' style={{ color: '#424242' }}>{productName}</h1>
                    <p className='fs-6 mb-4' style={{ color: '#424242', lineHeight: '1.8' }}>{productDescription}</p>
                    <div className='mb-4 d-flex gap-5'>
                        <a href={tryDemo} className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none', fontSize: '1.1rem' }}>
                            Try Demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href={learnMore} className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none', fontSize: '1.1rem' }}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className='mt-3 d-flex gap-3'>
                        <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg' alt='googlePlay' /></a>
                        <a href={appStore}><img src='/media/images/appStoreBadge.svg' alt='appStore' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;