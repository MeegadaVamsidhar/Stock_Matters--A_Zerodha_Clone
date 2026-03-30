import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row text-center mt-5'>
                <h1 className='fs-2 fw-semibold mb-3' style={{ color: '#424242' }}>The Stock Matters Universe</h1>
                <p className='mb-5 fs-6' style={{ color: '#424242' }}>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/Stock MattersFundhouse.png' alt='Fundhouse' style={{ width: "50%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Asset management.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/sensibullLogo.svg' alt='Sensibull' style={{ width: "60%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Options trading platform.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/goldenpiLogo.png' alt='GoldenPi' style={{ width: "50%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Bonds and trading platform.</p>
                </div>

                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/streakLogo.png' alt='Streak' style={{ width: "50%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Algo & strategy platform.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/smallcaseLogo.png' alt='Smallcase' style={{ width: "55%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Thematic investment platform.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-4 mt-4'>
                    <img src='media/images/dittoLogo.png' alt='Ditto' style={{ width: "40%" }} />
                    <p className='text-muted mt-3' style={{ fontSize: '0.9rem' }}>Insurance</p>
                </div>
                
                <div className='mt-5 mb-5'>
                    <button className='btn fs-5 px-5 py-2 fw-semibold mt-4' style={{ width: "auto", margin: "0 auto", backgroundColor: '#387ed1', color: 'white', letterSpacing: '0.5px', borderRadius: '3px' }} onClick={() => window.location.href = '/signup'}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;