import React from 'react';
import './MailFooter.css';

const MailFooter = () => {
    return (
        <div className='mail'>
            <h1 className="mailTitle">Mail Title</h1>
            <span className="mailDesc">Mail Description</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Your Email'/>
                <button className="getNewsMail">Get News</button>
            </div>
        </div>
    );
};

export default MailFooter;