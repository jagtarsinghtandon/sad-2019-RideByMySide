import React, { Component } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import RideList from './Components/RideList';
import sample from './driving.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import './App.css';
import SearchedRidesBody from './Components/SearchRidesBody';




class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      searchedRides: [],
      source: '',
      dest: '',
      date_of_travel: '',
      hobbies: '',
      fetchedRides:[],
      img: '',
      imgstring: '', name:'', destination:'', person_id:'', ride_id:''
    };

  }


  onRouteChange = (route) => {
    
    this.setState({ route: route });
  }

     
  onRequestRide = (imgstring,  name, source, destination, date_of_travel, hobbies, person_id, ride_id) => {
    console.log("yeh beja request" +name, source, destination, date_of_travel, hobbies, person_id, ride_id)
    


    fetch('http://localhost:9000/checkrequestride', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      
          Logged_In_Person_Id : "9",   //Here you will put person_ID of the logged in user (DO CHANGE IT LATER)
          Ride_Id : ride_id
        })
  })
        
  .then((response) => {
    response.json()
    if(response.status === 200)
    alert("Ride already requested")
    else
    {
        
    fetch('http://localhost:9000/requestRide', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          Imgstring: imgstring,
          First_Name: name,
          Source: source,
          Destination: destination,
          Date_Of_Travel : date_of_travel,
          Hobbies : hobbies,
          Ride_Id : ride_id,
          Person_Id : person_id ,    
          Ride_Id : ride_id,
          Requested_Person_Id : "9"
         
        
      })
  })
  
  .then(response => response.json())
  .then(rideRequestdata => this.setState({ rideRequested: rideRequestdata.rideRequested}))
    
  alert('Congratulations, your ride has been Requested')
    }
})
        
        }
  
    
    onSubmitSearch = (source, dest, date_of_travel, hobbies) => {
      console.log("in submit" +source +dest+ date_of_travel + hobbies)
        
      
      fetch('http://localhost:9000/search', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              Source: source,
              Destination: dest,
              Date_Of_Travel : date_of_travel,
              Hobbies : hobbies
            
          })
      })

            .then(response => response.json())
          .then(ridedata => this.setState({ fetchedRides: ridedata.rides}))
            
            this.setState({ route: "SearchedRides" });
            
          
          }

  render() {
    const { route, fetchedRides, img, rides, imgstring, imageStr, rideRequested } = this.state;
    
    console.log("length dekh" +fetchedRides.fetchedRides);
    console.log("length dekh" +fetchedRides.length);
    console.log("photo" + img);
    
    console.log("photo" + imgstring + "cccc" + imageStr);

    console.log("yeh dal gaya ride request table mein"+rideRequested);
    var fetchedRidesLength = fetchedRides.length;
    
    return (

      <div className="App">
        <Navigation  onRouteChange={this.onRouteChange} />
        {route === 'Profile'
          ? <div>
            <Profile />


          </div>
          : (route === 'Login' ?
            <Login onRouteChange={this.onRouteChange} />

            : (route === 'Register' ?
              <Register onRouteChange={this.onRouteChange} />

              : (route === 'AboutUs' ?
                < AboutUs onRouteChange={this.onRouteChange} />

                : (route === 'ContactUs' ?
                  < ContactUs onRouteChange={this.onRouteChange} />

                  : (route === 'SearchedRides' ?
                  < RideList   fetchedRides={fetchedRides} fetchedRidesLength={fetchedRidesLength} 
                   
                  onRouteChange = {this.onRouteChange} onRequestRide={this.onRequestRide}   />

                  : (route === 'home',
                    <div>
                      <Search onRouteChange={this.onRouteChange} onSubmitSearch={this.onSubmitSearch}
                     />
                    </div>


                  )
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

        <footer className="pv4 ph3 ph5-ns tc">
          <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://www.facebook.com/" title="">
            <svg data-icon="facebook" viewBox="0 0 32 32" >
              <title>facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
            </svg>
          </a>
          <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://www.twitter.com/" title="">
            <svg data-icon="twitter" viewBox="0 0 32 32" >
              <title>twitter icon</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
            </svg>
          </a>
          <a className="link dim gray dib br-100 h2 w2 mr3 " href="https://www.github.com/" title="">
            <svg data-icon="github" viewBox="0 0 32 32" >
              <title>github icon</title>
              <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
            </svg>
          </a>
          <div className="mt4">
            <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Help</a>
            <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Send feedback</a>
            <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Privacy</a>
            <a href="#" className="f6 link dim gray dib">Terms</a>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
