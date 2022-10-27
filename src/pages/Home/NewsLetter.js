import React from 'react';

const NewsLetter = () => {
    return (
        <>
            <div class="bgBodyPrimary">
                <div class="container px-5 lg:px-16 py-16 lg:py-24 mx-auto">
                    <div class="flex md:items-center flex-wrap w-full">
                        <div class="lg:w-1/2 w-full mx-auto">
                            <div className='text-center lg:text-left'>
                                <h3 class="text-2xl md:text-4xl font-medium title-font mb-2 textHeading uppercase">Join our newsLetter</h3>
                                <div class="h-1 w-1/3 bg-indigo-500 rounded mx-auto lg:ml-0"></div>
                                <p class="lg:w-1/2 w-full leading-relaxed textHeading py-6 text-base font-semibold">Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
                            </div>
                        </div>
                        <div class="lg:w-2/6 md:w-1/2 cardBgSecondary rounded-lg p-5 lg:p-7 flex flex-col mx-auto w-full mt-10 md:mt-0">
                            <div class="relative mb-4 ">
                                <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                            </div>
                            <button class="btn btn-primary capitalize text-lg font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewsLetter;