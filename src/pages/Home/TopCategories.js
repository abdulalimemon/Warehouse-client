import React from 'react';

const TopCategories = () => {
    return (
        <div className='bgBodySecondary'>
            <div className='container mx-auto py-8 lg:py-16 '>
                <div className='text-center pt-3 pb-10 md:pb-16'>
                    <h2 className='textHeading text-3xl font-bold'>Featured Category</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto p-5 cardBgPrimary">
                        <div className="items-center text-center pb-5 pt-2">
                            <h2 className="text-center text-2xl font-semibold pb-2 textHeading">Shoes!</h2>
                            <p className='text-md textHeading'>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure className='pt-3'>
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-md" />
                        </figure>
                    </div>

                    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto p-5 cardBgPrimary">
                        <div className="items-center text-center pb-5 pt-2">
                            <h2 className="text-center text-2xl font-semibold pb-2 textHeading">Shoes!</h2>
                            <p className='text-md textHeading'>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure className='pt-3'>
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-md" />
                        </figure>
                    </div>

                    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto p-5 cardBgPrimary">
                        <div className="items-center text-center pb-5 pt-2">
                            <h2 className="text-center text-2xl font-semibold pb-2 textHeading">Shoes!</h2>
                            <p className='text-md textHeading'>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure className='pt-3'>
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-md" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;