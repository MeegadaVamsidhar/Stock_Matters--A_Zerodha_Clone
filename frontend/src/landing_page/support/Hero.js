import React from 'react'

function Hero() {
    return (
        <section className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#387ed1" }}>
            <div className='container p-3 mb-5'>
                <div className='row text-white mt-4'>
                    <div className='col-lg-6 mb-4'>
                        <h3 className='fs-3 fw-semibold'>Support Portal</h3>
                    </div>
                    <div className='col-lg-6 text-lg-end mb-4'>
                        <a href='#' className='fs-5 text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Track tickets</a>
                    </div>
                </div>

                <div className='row text-white'>
                    <div className='col-lg-7 mb-5'>
                        <h1 className='fs-4 mb-4 fw-normal'>Search for an answer or browse help topics to create a ticket</h1>
                        <input
                            type='text'
                            placeholder='Eg: how to activate F&O, why is my order getting rejected ...'
                            className='form-control mb-4 p-3 shadow-sm border-0'
                            style={{ fontSize: "16px", borderRadius: "5px" }}
                        />
                        <div className='d-flex flex-wrap gap-4 mt-3 fs-6'>
                            <a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Track account opening</a>
                            <a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Track segment activation</a>
                            <a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Intraday margins</a>
                            <a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Kite user manual</a>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <h1 className='fs-4 mb-4 fw-normal'>Featured</h1>
                        <ul className='ps-3' style={{ lineHeight: '2' }}>
                            <li className='mb-2'><a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Current Buybacks - September 2024</a></li>
                            <li className='mb-2'><a href='#' className='text-white text-decoration-none' style={{ borderBottom: '1px solid white' }}>Offer for sale (OFS) - September 2024</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;