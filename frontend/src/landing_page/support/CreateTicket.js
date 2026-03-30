import React from 'react'

function CreateTicket() {
    return (
        <div className='container p-5 mt-5 mb-5'>
            <div className='row p-3'>
                <h1 className='fs-3 mb-5 fw-normal text-muted' style={{ color: '#424242' }}>To create a ticket, select a relevant topic</h1>
                
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-solid fa-circle-plus me-2"></i> Account Opening</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Getting started</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Online</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Offline</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Charges</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Company, Partnership and HUF</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Non Resident Indian (NRI)</a>
                    </div>
                </div>

                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-solid fa-user me-2"></i> Your Stock Matters Account</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Login credentials</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Your Profile</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Account modification and segment addition</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>CMR & DP ID</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Nomination</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Transfer and conversion of shares</a>
                    </div>
                </div>

                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-solid fa-chart-simple me-2"></i> Trading and Markets</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Trading FAQs</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Kite</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Margins</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Product and order types</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Corporate actions</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Kite features</a>
                    </div>
                </div>

                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-solid fa-wallet me-2"></i> Funds</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Fund withdrawal</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Adding funds</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Adding bank accounts</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>eMandates</a>
                    </div>
                </div>

                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-brands fa-bitcoin me-2"></i> Console</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>IPO</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Portfolio</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Funds statement</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Profile</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Reports</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Referral program</a>
                    </div>
                </div>

                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-4 fs-5 fw-normal'><i className="fa-solid fa-coins me-2"></i> Coin</h4>
                    <div className='d-flex flex-column gap-2'>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Understanding mutual funds and Coin</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Coin app</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Coin web</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>Transactions and reports</a>
                        <a href='#' className='text-decoration-none' style={{ color: '#387ed1', fontSize: '15px' }}>National Pension Scheme (NPS)</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;