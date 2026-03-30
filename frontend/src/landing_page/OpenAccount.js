import React from 'react'

function OpenAccount() {
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1 className='fs-2 mb-4 fw-bold'>Open a Stock Matters account</h1>
                <p className='text-muted fs-6 mb-5' style={{ color: '#424242' }}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div>
                    <a href='/signup' className='btn fs-5 px-5 py-2 fw-semibold' style={{ backgroundColor: '#387ed1', color: 'white', letterSpacing: '0.5px', borderRadius: '3px' }}>Sign up for free</a>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;