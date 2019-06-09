import React from 'react';


  
const Profile = ({onRouteChange}) => {
    return(
        <nav className="navbar  navbar-light bg-primary ">
          <nav style = {{display:'inline-block'}}></nav>
         <li><p  className = "f4 fw6 ph0  mh0 pa0">My Profile</p></li> 
         <li><p className = "f4 fw6 ph0  mh0 pa0">Message Box</p></li>
         <li><p className = "f4 fw6 ph0  mh0 pa0">Search</p></li> 
         <li><p onClick={() => onRouteChange('Rides')} className = "nav-item nav-link dim black active pull pointer f4 fw6 ph0  mh0 pa0">Rides</p></li>
         <li><p className = "f4 fw6 ph0  mh0 pa0">Log out</p></li>  
        </nav>
        

        
        
    );
}

export default Profile;