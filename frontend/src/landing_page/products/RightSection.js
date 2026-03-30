import React from 'react'

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center p-3'>
                <div className='col-lg-5 p-4 pe-lg-5'>
                    <h1 className='fs-2 fw-semibold mb-3' style={{ color: '#424242' }}>{productName}</h1>
                    <p className='fs-6 mb-4' style={{ color: '#424242', lineHeight: '1.8' }}>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={learnMore} className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none', fontSize: '1.1rem' }}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6 p-4 text-center'>
                    <img src={imageURL} alt={productName} style={{ width: '85%' }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;