import React from 'react';
import InventoryItem from './InventoryItem';

const Inventory = () => {
    return (
        <div>
            <div className='bgBodyPrimary'>
                <div className='container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-20'>
                    <div className='text-center pt-3 pb-10 md:pb-16'>
                        <h2 className='textHeading text-3xl font-bold'>Inventory</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>


                        <InventoryItem></InventoryItem>
                        <InventoryItem></InventoryItem>
                        <InventoryItem></InventoryItem>
                        <InventoryItem></InventoryItem>
                        <InventoryItem></InventoryItem>
                        <InventoryItem></InventoryItem>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;