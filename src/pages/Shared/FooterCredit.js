import React from 'react';

const FooterCredit = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bgNav'>
            <div className="items-center px-5 py-5 md:px-0 container mx-auto">
                
                <p className='font-semibold text-lg text-center textHeading'>Copyright © {year} - All right reserved.</p>
            </div>
        </div>
    );
};

export default FooterCredit;