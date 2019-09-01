import React from 'react';
import './Header.css';

const Header = ({headerContent}) => {
    return <h1 className="header bg-primary mb-5">{headerContent}</h1>
};

export default Header;