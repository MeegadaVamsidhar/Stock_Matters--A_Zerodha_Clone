import React from 'react'

function Pricing() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row align-items-center'>
                <div className='col-lg-4 p-4'>
                    <h1 className='mb-4 fs-2 fw-bold'>Unbeatable pricing</h1>
                    <p className='text-muted mb-4 fs-6' style={{ lineHeight: '1.8' }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/pricing' className='fw-semibold' style={{ fontSize: "17px", color: '#387ed1', textDecoration: 'none' }}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-4 p-4' style={{ border: '1px solid #eee' }}>
                            <h1 className='mb-3 fs-2 fw-bold text-warning'>₹0</h1>
                            <p className='text-muted' style={{ fontSize: '14px' }}>Free account<br />opening</p>
                        </div>
                        <div className='col-4 p-4' style={{ border: '1px solid #eee' }}>
                            <h1 className='mb-3 fs-2 fw-bold text-warning'>₹0</h1>
                            <p className='text-muted' style={{ fontSize: '14px' }}>Free equity delivery<br />and direct mutual funds</p>
                        </div>
                        <div className='col-4 p-4' style={{ border: '1px solid #eee' }}>
                            <h1 className='mb-3 fs-2 fw-bold text-warning'>₹20</h1>
                            <p className='text-muted' style={{ fontSize: '14px' }}>Intraday and<br />F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;