import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    

            return(

    // if (isSignedIn){
    // return(
    //     <nav style = {{display:'flex', justifyContent:'flex-end'}}>
    //         <p onClick={() => onRouteChange(' Logout')} className ='f3 link dim black underline pa3 pointer'> Logout</p>
    //     </nav>
    // );
    // }
    // else{
    //     return(
    //         <nav style = {{display:'flex', justifyContent:'flex-end'}}>
    //             <p onClick={() => onRouteChange('Login')} className ='f3 link dim black underline pa3 pointer'>Login</p>
    //             <p onClick={() => onRouteChange('Register')} className ='f3 link dim black underline pa3 pointer'>Register</p>
    //         </nav>
            

    //     );
    // }
    




<nav class="navbar  navbar-light bg-primary ">
  
 
    <div class="navbar-nav" >
    <nav style = {{display:'flex', justifyContent:'flex-end'}}>
      <li><a class="nav-item nav-link active  f3 fw6  ph0  mh0 pa0" href="home">RideByMySide </a></li>
      <li><a class="nav-item nav-link active" href="about us">About Us </a></li>
      <li><a class="nav-item nav-link active" href="contact us">Contact Us </a></li>
      </nav>
    </div>
    <div class="main-nav">
    <nav style = {{display:'flex', justifyContent:'flex-end'}}>
        
      <li ><p onClick={() => onRouteChange('Login')} className ='f3 link dim black pa0 pointer'>Login</p></li>
      <li ><p onClick={() => onRouteChange('Register')} className ='f3 link dim black  pa0 pointer'>Register</p></li>
    
      </nav>
      </div>
      
  
</nav>

         );
}


export default Navigation;