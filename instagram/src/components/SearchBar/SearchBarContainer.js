import React from 'react';
import cameraLogo from '../../assets/camera-logo.svg';
import igLogo from '../../assets/iglogo.png';
import './SearchBarContainer.css'

function SearchBarContainer(props) {
    return (
        <div className='search-bar-container'>
            <div className="logos"> 
                <img alt="camera logo" src={cameraLogo} className="camera-image" />
                <img alt="instagram logo" src={igLogo} className="logo-image" />
            </div>
            
            <input type="text" placeholder="🔍 Search" />

            <div className="social-container">
                <div className="social">
                    <i className="fa fa-compass" />
                </div>
                <div className="social">
                    <i className="fa fa-heart" />
                </div>
                <div className="social">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    )
};

export default SearchBarContainer;