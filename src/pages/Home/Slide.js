import React from 'react';

const Slide = ({ slide }) => {
    const { subTitle, title, img } = slide;
    return (
        <>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="textHeadingStyle text-4xl md:text-5xl mb-4 font-bold">{title} </h2>
                    <p className="textHeading text-3xl lg:text-4xl mb-4 font-bold">{subTitle}</p>
                    <h4 className='textHeading mt-3 border-2 rounded-md py-4 px-6 text-xl border-primary font-semibold'>Available Now</h4>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img className="object-cover object-center rounded mx-auto" alt="hero" src={img} />
                </div>
            </div>
        </>
    );
};

export default Slide;