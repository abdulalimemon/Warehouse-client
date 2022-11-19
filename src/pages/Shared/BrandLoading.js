import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const BrandLoading = () => {
    return (
        <>
            <div className='hidden lg:flex justify-between'>
                <Skeleton width={270} height={100} />
                <Skeleton width={270} height={100} />
                <Skeleton width={270} height={100} />
            </div>
            <div className='hidden md:flex lg:hidden justify-between'>
                <Skeleton width={170} height={80} />
                <Skeleton width={170} height={80} />
                <Skeleton width={170} height={80} />
            </div>
            <div className='flex justify-between md:hidden'>
                <Skeleton width={70} height={70} />
                <Skeleton width={70} height={70} />
                <Skeleton width={70} height={70} />
            </div>
        </>
    );
};

export default BrandLoading;