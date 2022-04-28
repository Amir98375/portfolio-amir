import React, { useState } from 'react';
import Switch from 'react-switch';

export const Toggle = ({ themeToggler }) => {
    const [isDark, setIsDark] = useState(false);
    const handleChange = (e) => {
        setIsDark(e);
        themeToggler();
    };
    return (
        <div style={{ border: '1px solid #021f34', borderRadius: '20px' }}>
            <Switch
                handleDiameter={20}
                width={60}
                height={30}
                checked={isDark}
                onChange={handleChange}
                checkedIcon={<div style={{ padding: '2.5px' }}>🌙</div>}
                uncheckedIcon={<div style={{ padding: '2.5px' }}>🌞</div>}
                onColor='#fff'
                offColor='#fff'
                offHandleColor='#0556f3'
                onHandleColor='#00AAF2'
            />
        </div>
    );
};
