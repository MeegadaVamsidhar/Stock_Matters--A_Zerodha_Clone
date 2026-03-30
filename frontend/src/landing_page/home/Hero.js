import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center mt-5'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{ width: '65%', margin: '0 auto' }} />
                <h1 className='mt-5 fw-bold text-dark' style={{ fontSize: '2.75rem', letterSpacing: '-1px' }}>Invest in everything</h1>
                <p className='fs-5 mt-3' style={{ color: '#424242' }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div className='mt-4 mb-5'>
                    <a href='/signup' className='btn fs-5 px-5 py-2 fw-semibold' style={{ backgroundColor: '#387ed1', color: 'white', letterSpacing: '0.5px', borderRadius: '3px' }}>Sign up for free</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;