import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5 text-center'>
                <h1 className='fs-2 fw-semibold' style={{ color: '#424242', lineHeight: '1.5' }}>We pioneered the discount broking model in India.<br />Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row p-5 mt-5 border-top' style={{ lineHeight: "1.8", fontSize: "16px", color: '#424242' }}>
                <div className='col-lg-6 p-4 pe-lg-5'>
                    <p className='mb-4'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Stock Matters, because we truly believe your investments and your future matter.</p>
                    <p className='mb-4'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.5+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-lg-6 p-4 ps-lg-5'>
                    <p className='mb-4'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className='mb-4'><a href='https://rainmatter.com/' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>blog</a> or see what the media is <a href='#' className='fw-semibold' style={{ color: '#387ed1', textDecoration: 'none' }}>saying about us</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;