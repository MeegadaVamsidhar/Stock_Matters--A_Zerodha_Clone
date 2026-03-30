import React from 'react'

function Stats() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row p-5'>
                <div className='col-lg-6 p-4'>
                    <h1 className='fs-2 mb-5 fw-bold'>Trust with confidence</h1>

                    <h2 className='fs-4 mb-3 fw-semibold'>Customer-first always</h2>
                    <p className='text-muted mb-5 fs-6' style={{ lineHeight: '1.8' }}>That's why 1.6+ crore customers trust Stock Matters with ~₹6 lakh crores worth of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4 mb-3 fw-semibold'>No spam or gimmicks</h2>
                    <p className='text-muted mb-5 fs-6' style={{ lineHeight: '1.8' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4 mb-3 fw-semibold'>The Stock Matters universe</h2>
                    <p className='text-muted mb-5 fs-6' style={{ lineHeight: '1.8' }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4 mb-3 fw-semibold'>Do better with money</h2>
                    <p className='text-muted mb-5 fs-6' style={{ lineHeight: '1.8' }}>With initiatives like <a href='#' style={{ color: '#387ed1', textDecoration: 'none' }}>Nudge</a> and <a href='#' style={{ color: '#387ed1', textDecoration: 'none' }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-6 p-4 text-center mt-3'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: "95%" }} />
                    <div className='mt-5 d-flex justify-content-center gap-4'>
                        <a href='/products' className='fw-semibold' style={{ fontSize: "17px", color: '#387ed1', textDecoration: 'none' }}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='#' className='fw-semibold' style={{ fontSize: "17px", color: '#387ed1', textDecoration: 'none' }}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;