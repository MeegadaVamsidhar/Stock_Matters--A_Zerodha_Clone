import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center mb-5'>
                <h1 className='fs-1 fw-bold mb-4'>Pricing</h1>
                <h3 className='text-muted fs-5 mb-5' style={{ color: '#424242' }}>Free equity delivery and direct mutual funds. Flat ₹20 intraday and F&O.</h3>
            </div>
            <div className='row p-5 mt-5 text-center text-muted align-items-center'>
                <div className='col-4 p-4'>
                    <img src='/media/images/pricingMF.svg' alt='Free Delivery' style={{ width: '60%' }} className='mb-4' />
                    <h1 className='fs-4 fw-semibold mb-3'>Free equity delivery</h1>
                    <p className='fs-6' style={{ lineHeight: '1.8' }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='/media/images/intradayTrades.svg' alt='Intraday' style={{ width: '60%' }} className='mb-4' />
                    <h1 className='fs-4 fw-semibold mb-3'>Intraday and F&O trades</h1>
                    <p className='fs-6' style={{ lineHeight: '1.8' }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='/media/images/pricingMF.svg' alt='Mutual Funds' style={{ width: '60%' }} className='mb-4' />
                    <h1 className='fs-4 fw-semibold mb-3'>Free direct MF</h1>
                    <p className='fs-6' style={{ lineHeight: '1.8' }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;