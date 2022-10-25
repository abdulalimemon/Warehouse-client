import React from 'react';

const InventoryItem = () => {
    return (
        <div className="card w-11/12 bg-base-100 shadow-xl mx-auto p-5 cardBgPrimary">
            <div className="items-center text-center pb-5 pt-2">
                <h2 className="text-center text-2xl font-semibold pb-2 textHeading">Shoes!</h2>
                <p className='text-md textHeading'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure className='pt-3'>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-md" />
            </figure>
        </div>
    );
};

export default InventoryItem;