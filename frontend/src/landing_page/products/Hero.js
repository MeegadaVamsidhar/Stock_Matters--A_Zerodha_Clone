import React from 'react'

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='row text-center p-5 mt-5'>
                <h1 className='fs-1 fw-bold mb-3' style={{ color: '#424242' }}>Technology</h1>
                <h3 className='fs-5 mt-2 mb-4' style={{ color: '#424242' }}>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-2 mb-5 fs-6'>Check out our <a href='#' className='mx-1 fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>investment offerings <i className="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    )
}

export default Hero;