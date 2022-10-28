import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ inventory }) => {
    const { name, price, description, quantity, img, supplierName } = inventory;
    return (
        <div className="card w-11/12 md:w-12/12 shadow-xl mx-auto cardBgPrimary rounded-md">
            <figure className='w-full'>
                <img src={img} alt="Products" className="rounded-md" />
            </figure>
            <div className="items-center text-center pb-5 pt-2 px-3 md:px-6">
                <h2 className="text-center text-2xl font-semibold pb-2 textHeading">{name}</h2>
                <p className='text-md textHeading'>{description}</p>
            </div>
            <div className="flex justify-between items-center text-center pb-5 pt-2 px-3 md:px-6">
                <p className="text-md font-semibold textHeading">Price: ${price}</p>
                <p className='text-md textHeading'>Quantity :{quantity}</p>
            </div>
            <div className="flex justify-between items-center text-center pb-5 pt-2 px-3 md:px-6">
                <p className="text-md font-semibold textHeading">Supplier name : {supplierName}</p>
            </div>
            <div className="w-full">
                <Link className='w-full h-14 rounded-t-none rounded-b-md flex items-center justify-center cursor-pointer btn btn-primary font-medium text-lg capitalize' to=''>Stock Update</Link>
            </div>
        </div>
    );
};

export default InventoryItem;