import React,{Component} from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import sample from './driving.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import './App.css';
import Search from './Components/Search';

class App extends Component{
  constructor() {
  super();
  this.state = { 
  route : 'home',
  isSignedIn: false

  };
  
}


onRouteChange = (route) => {
  // if (route === 'Logout')
  // {
  //   this.setState({isSignedIn:false})
  // }
  // else if (route === 'Profile')
  // {
  //   this.setState({isSignedIn:true})
  // }
    this.setState({route: route}); 
}

render() 
{
  const { isSignedIn, route} = this.state;
  return (
   
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange} />
      { route === 'Profile'
      ? <div>
           <Profile />
           {/* <Search/> */}

        </div>
      : (route === 'Login' ?
          <Login onRouteChange={this.onRouteChange}/>
        
      : (route === 'Register'?
               <Register onRouteChange={this.onRouteChange}/>
        
       : (route === 'home',
          <div>
            <Search />
          </div> 
            
          )
        )
        )
       }
      

      
      <div >  
              <video className='videoTag' autoPlay loop muted resizeMode={"cover"}>
        <source src={sample} type='video/mp4' />
        </video>
        </div>
    </div>
  );
}
}
export default App;
