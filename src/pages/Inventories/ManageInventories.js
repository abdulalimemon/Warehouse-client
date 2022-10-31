import React from 'react';
import useInventory from '../../hooks/useInventory';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const ManageInventories = () => {
    const [inventorys] = useInventory();
 
    return (
        <>
            <Navbar></Navbar>
            <div className=''>
                <div className='container mx-auto py-10 px-4'>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full table-compact">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Supplier Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>

                            {
                                inventorys.map(inventory => <>
                                    <tbody inventory={inventory} key={inventory._id}>
                                        <tr>
                                            <th>{inventory.length}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={inventory.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{inventory.name}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {inventory.supplierName}
                                            </td>
                                            <td>
                                                {inventory.price}
                                            </td>
                                            <td>{inventory.quantity}</td>
                                            <th>
                                                <button className="btn btn-primary">details</button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default ManageInventories;