import React,{Component} from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import sample from './driving.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import './App.css';



class App extends Component{
  constructor() {
  super();
  this.state = { 
  route : 'home',
  

  };
  
}


onRouteChange = (route) => {
  
    this.setState({route: route}); 
}

render() 
{
  const { route} = this.state;
  return (
   
    <div className="App">
      <Navigation  onRouteChange = {this.onRouteChange} />
      { route === 'Profile'
      ? <div>
           <Profile />
          

        </div>
      : (route === 'Login' ?
          <Login onRouteChange={this.onRouteChange}/>
        
      : (route === 'Register'?
               <Register onRouteChange={this.onRouteChange}/>

       : (route === 'AboutUs'?
                 < AboutUs onRouteChange={this.onRouteChange}/>

      : (route === 'ContactUs'?
                 < ContactUs onRouteChange={this.onRouteChange}/>      
        
       : (route === 'home',
          <div>
            <Search onRouteChange={this.onRouteChange}/>
          </div> 
            
          
       
        )
      )
      )
      )
      )
      
       }
      

      
      <div >  
              <video className='videoTag' autoPlay loop muted resizemode={"cover"}>
        <source src={sample} type='video/mp4' />
        </video>
        </div>
    </div>
  );
}
}
export default App;
