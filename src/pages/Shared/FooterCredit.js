import React from 'react';

const FooterCredit = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="bg-slate-600">
            <div className="footer items-center px-5 py-10 md:px-0 container mx-auto">
                <p className='font-semibold text-lg'>Copyright © {year} - All right reserved</p>
            </div>
        </div>
    );
};

export default FooterCredit;