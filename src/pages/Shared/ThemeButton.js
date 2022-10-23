import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../App';

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='textHeading text-base font-semibold'>Dark Mode</h2>
            </div>
            <div className='flex justify-between items-center textHeading text-base font-semibold'>
                <label className='mr-3 textHeading text-base font-semibold'>{theme === 'light' ? 'Off' : 'On'}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} height={20}></ReactSwitch>
            </div>

        </div>
    );
};

export default ThemeButton;