import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryItem from '../../hooks/useInventoryItem' 
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const InventoryDetails = () => {
    const { InventoryId } = useParams();
    const [inventory] = useInventoryItem(InventoryId);
    const { _id, name, price, description, quantity, img, supplierName } = inventory;

    return (
        <>
            <Navbar></Navbar>
            <div className='bgBodyPrimary'>
                <div className='container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-20'>
                    <div className='text-center pt-3 pb-10 md:pb-16'>
                        <div className="card w-11/12 md:w-12/12 shadow-xl mx-auto cardBgPrimary rounded-md py-5 px-3">
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
                                <button className='w-full md:w-3/6 mx-auto h-14  rounded-md flex items-center justify-center cursor-pointer btn btn-primary font-medium text-lg capitalize'>Delivered</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default InventoryDetails;