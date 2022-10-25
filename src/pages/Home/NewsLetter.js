import React from 'react';

const NewsLetter = () => {
    return (
        <>
            <div class="text-gray-600 body-font">
                <div class="container px-5 lg:px-16 py-24 mx-auto">
                    <div class="flex md:items-center flex-wrap w-full">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0 mx-auto">
                            <div className='text-center lg:text-left'>
                                <h3 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">Join our newsLetter</h3>
                                <div class="h-1 w-1/3 bg-indigo-500 rounded mx-auto lg:ml-0"></div>
                                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 py-6">Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
                            </div>
                        </div>
                        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-7 flex flex-col mx-auto w-full mt-10 md:mt-0">
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-lg text-gray-600"><h2 className='mb-2 font-semibold'>Enter your email</h2></label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewsLetter;