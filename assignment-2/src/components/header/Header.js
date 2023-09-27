import React, { useState } from "react";
import avartar from '../../assets/user-avatar.svg';
import './Header.css';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    }

    return (
        <header>
            <h1>Bookstore</h1>

            <div className="profile">
                <div className='dark-mode-toggle'>
                    <div className={`toggle-switch ${darkMode ? 'on' : 'off'}`}
                        onClick={() => toggleDarkMode()}>
                        <div className="slider"></div>
                    </div>
                    <span>{`${darkMode ? 'Light' : 'Dark'}`} Mode</span>
                </div>
                <div class="avatar">
                    <img src={avartar} alt="avatar" class="avatar-img" />
                </div>
                <span>John Doe</span>
            </div>

        </header>
    );
}

export default Header;
