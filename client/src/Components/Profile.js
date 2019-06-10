import React from 'react';


const Profile = ({ onRouteChange }) => {
    return (
        <nav className="navbar  navbar-light bg-primary ">
            <div className="navbar-nav" >
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <li><p onClick={() => onRouteChange('MyProfile')} className="nav-item nav-link dim black active pointer pull f4 fw6 ph0  mh0 pa0">My Profile</p></li>

                    <li><p onClick={() => onRouteChange('Search')} className="nav-item nav-link dim black active pointer pull f4 fw6 ph0  mh0 pa0">Search</p></li>
                    <li><p className="nav-item nav-link dim black active pointer pull f4 fw6 ph0  mh0 pa0">Rides</p></li>
                    <li><p onClick={() => onRouteChange('home')} className=" nav-item nav-link dim black active pointer pull f4 fw6 ph0  mh0 pa0">Log out</p></li>
                </nav>
            </div>
        </nav>



    );
}

export default Profile;