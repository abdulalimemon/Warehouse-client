import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const InventoryLoading = ({ cards }) => {
    return (
        Array(cards).fill(0).map((_, index) => <>
            <div key={index} className="card w-11/12 md:w-12/12 shadow-xl mx-auto rounded-md">
                <div className='pb-3'>
                    <Skeleton height={180}></Skeleton>
                </div>
                <div className="pb-5 pt-2 px-3 md:px-6">
                    <h2 className="pb-3"><Skeleton height={35} /></h2>
                    <p><Skeleton height={60} /></p>
                </div>
                <div className="pb-5 pt-2 px-3 md:px-6">
                    <div className='flex justify-between'>
                        <Skeleton width={70} />
                        <Skeleton width={70} />
                    </div>
                </div>
                <div className="pb-5 pt-2 px-3 md:px-6">
                    <Skeleton />
                </div>
                <div>
                    <Skeleton height={60} />
                </div>
            </div>
        </>)
    );
};

export default InventoryLoading;