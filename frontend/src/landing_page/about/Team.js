import React from 'react'

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 border-top mb-5'>
                <h1 className='text-center fs-2 fw-semibold' style={{ color: '#424242' }}>People</h1>
            </div>
            <div className='row p-5' style={{ lineHeight: "1.8", fontSize: "16px", color: '#424242' }}>
                <div className='col-lg-6 px-4 text-center'>
                    <img src='/media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "55%" }} alt='Nithin Kamath' />
                    <h4 className='mt-5 fw-semibold' style={{ color: '#424242' }}>Nithin Kamath</h4>
                    <h6 className='text-muted fs-6 mb-4'>Founder, CEO</h6>
                </div>
                <div className='col-lg-6 px-4 ps-lg-5'>
                    <p className='mb-4'>Nithin bootstrapped and founded Stock Matters in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Stock Matters has changed the landscape of the Indian broking industry.</p>
                    <p className='mb-4'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='mb-4'>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>Homepage</a> / <a href='#' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>TradingQnA</a> / <a href='#' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;