import React from 'react';
import monitor from '../../assets/category/monitor.png';
import mouse from '../../assets/category/mouse.png';
import computer from '../../assets/category/computer.png';
import cpu from '../../assets/category/cpu.png';
import graphicsCard from '../../assets/category/graphics-card.png';
import headphone from '../../assets/category/headphone.png';
import keyboard from '../../assets/category/keyboard.png';
import laptop from '../../assets/category/laptop.png';



const TopCategories = () => {
    const Categories = [
        {
            "id": 111,
            "title": "Monitor",
            "img": monitor
        },
        {
            "id": 112,
            "title": "Mouse" ,
            "img": mouse
        },
        {
            "id": 113,
            "title": "Computer",
            "img": computer
        },
        {
            "id": 114,
            "title": "Cpu",
            "img": cpu
        },
        {
            "id": 115,
            "title": "Graphics Card",
            "img": graphicsCard
        },
        {
            "id": 116,
            "title": "Headphone",
            "img": headphone
        },
        {
            "id": 117,
            "title": "Keyboard",
            "img": keyboard
        },
        {
            "id": 118,
            "title": "Laptop",
            "img": laptop
        }
    ]
    return (
        <div className='bgBodySecondary'>
            <div className='container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-20'>
                <div className='text-center pt-3 pb-10 md:pb-16'>
                    <h2 className='textHeading text-3xl font-bold'>Featured Category</h2>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 px-4'>
                    {
                        Categories.map((category) => <>
                            <div key={category.id} className="card w-11/12 shadow-xl mx-auto p-5 cardBgPrimary">
                                <div className="items-center text-center pb-5 pt-2">
                                    <h2 className="text-center text-lg md:text-xl font-semibold pb-2 textHeading">{category.title}</h2>
                                </div>
                                <figure className='md:pt-2'>
                                    <img src={category.img} alt="Category" className="rounded-md w-14 lg:w-24" />
                                </figure>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCategories;