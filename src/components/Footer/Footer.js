import React from 'react';
import './Footer.css';

const Footer = ({footerContent}) => {
    return <div className="footer p-3 bg-info">{footerContent}</div>
};

export default Footer;