import React from 'react'

function Education() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 p-4 text-center'>
                    <img src='media/images/education.svg' alt='Education' style={{ width: "75%" }} />
                </div>
                <div className='col-lg-6 p-4 ps-lg-5'>
                    <h1 className='mb-4 fs-2 fw-bold'>Free and open market education</h1>

                    <p className='text-muted mb-4 fs-6' style={{ lineHeight: '1.8' }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='mb-5 d-block fw-semibold' style={{ fontSize: "17px", color: '#387ed1', textDecoration: 'none' }}>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className='text-muted mb-4 mt-5 fs-6' style={{ lineHeight: '1.8' }}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' className='fw-semibold' style={{ fontSize: "17px", color: '#387ed1', textDecoration: 'none' }}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;