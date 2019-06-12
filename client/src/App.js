import React, { Component } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import RideList from './Components/RideList';
import ProfileFetch from './Components/ProfileFetch';
import Rides from './Components/Rides';
import AddRides from './Components/AddRides';
import RideRequestsList from './Components/RideRequestsList';
import MyRidesList from './Components/MyRidesList';
import sample from './driving.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import './App.css';
import MyProfile from './Components/MyProfile';
import UpdateProfile from './Components/UpdateProfile';
import UpdateProfileFetch from './Components/UpdateProfileFetch';







class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      searchedRides: [],
      source: '',
      dest: '',
      email: '',
       password: '',
       logins:[],
      fetchedRides:[],
      profiles: [],
      first_name:'',
      last_name:'',
      dob:'',
      mobileno:'',
      hobbies:'',
      imgstring:'',
      rofile_in_first_name:'',
      date_of_travel: '',
      hobbies: '',
      fetchedRides: [],
      img: '',
      imgstring: '', name: '', destination: '', person_id: '', ride_id: '',
      date_of_travel: '',
      token: '',
      fetchrequestrides: [],
      getmyrides: []
    };

  }

  
  

  onRouteChange = (route) => {
    
    this.setState({ route: route });
  }


  onSubmitUpdate  = (first_name, last_name, email, dob, mobileno, hobbies, image) => 
{
  fetch('http://localhost:9000/updateprofile', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            First_Name: first_name,
            Last_Name: last_name,
            Email: email,
            Dob: dob,
            Mobileno: mobileno,
           Hobbies: hobbies,
           Image:image
         
      })
    })
    
    .then((response) => {
        response.json()
        if(response.status === 500)
        alert("Something went wrong")
        else
        {
            this.setState({ updateprofiles: response.updateprofile},console.log('success'))
        }
    })

}

  onAcceptedRides = (source,ride_accepted, destination, date_of_travel, image, first_name, hobbies, person_id, ride_id ) => {
    console.log("yeh kiya request accept" + source,ride_accepted, destination, date_of_travel, image, first_name, hobbies, person_id, ride_id)

console.log("yeh kiya request accept" +  person_id, ride_id)
    

    fetch('http://localhost:9000/acceptride', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        First_Name: this.state.logged_in_first_name,
        Requested_Person_Id: this.state.logged_in_person_id,
        Person_Id: person_id,
        Ride_Id: ride_id,
        Ride_Status: ride_accepted
        
      })
    })

      .then(response => response.json())
      .then(ridedata => this.setState({ getmyrides: ridedata.acceptride }))

      alert('You have accepted the ride!!')

  }

  onRejectedRides = (source,ride_rejected, destination, date_of_travel, image, first_name, hobbies, person_id, ride_id) => {
    console.log("yeh kiya request accept" + source,ride_rejected, destination, date_of_travel, image, first_name, hobbies, person_id, ride_id)

console.log("yeh kiya request accept" +  person_id, ride_id)
    

    fetch('http://localhost:9000/acceptride', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        First_Name: this.state.logged_in_first_name,
        Requested_Person_Id: this.state.logged_in_person_id,
        Person_Id: person_id,
        Ride_Id: ride_id,
        Ride_Status: ride_rejected
        
      })
    })

      .then(response => response.json())
      .then(ridedata => this.setState({ getmyrides: ridedata.acceptride }))

      alert('You have rejected the ride!!')

  }

  onFetchRequestedRides = () => {

    fetch('http://localhost:9000/fetchrequestedrides', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Person_Id: this.state.logged_in_person_id

      })
    })

      .then(response => response.json())
      .then(fetchridedata => this.setState({ fetchrequestrides: fetchridedata.fetchrequestrides }))

    this.setState({ route: "FetchedRequestedRides" });


  }





  onRequestRide = (imgstring, name, source, destination, date_of_travel, hobbies, person_id, ride_id) => {
    console.log("yeh beja request" + name, source, destination, date_of_travel, hobbies, person_id, ride_id)



    fetch('http://localhost:9000/checkrequestride', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.state.tokens
      },
      body: JSON.stringify({

        Logged_In_Person_Id: this.state.logged_in_person_id,   //Here you will put person_ID of the logged in user (DO CHANGE IT LATER)
        Ride_Id: ride_id
      })
    })

      .then((response) => {
        response.json()
        if (response.status === 200)
          alert("Ride already requested")
        else {

          fetch('http://localhost:9000/requestRide', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + this.state.tokens
            },
            body: JSON.stringify({
              Imgstring: imgstring,
              First_Name: this.state.logged_in_first_name,
              Source: source,
              Destination: destination,
              Date_Of_Travel: date_of_travel,
              Hobbies: hobbies,
              Ride_Id: ride_id,
              Person_Id: person_id,
              // Ride_Id: ride_id,
              Requested_Person_Id: this.state.logged_in_person_id


            })
          })

            .then(response => response.json())
            .then(rideRequestdata => this.setState({ rideRequested: rideRequestdata.riderequest }))

          alert('Congratulations, your ride has been Requested')
        }
      })

  }

  onSubmit = (email, password) => {
    console.log("in submit" + email + password)
    fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password

      })
    })



      .then((response) => {
        response.json()
          .then((logindata) => {
            let token = logindata.token
            this.setState({ tokens: token })

            console.log(token)
            if (response.status === 500)
              alert("invalid email or password")
            else {
              this.setState({ logins: response.logins }, console.log('success'))
              // this.setState({ logged_in_person_id: id })

              alert('Successfully logged in')

              fetch('http://localhost:9000/profile', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + token
                },
                body: JSON.stringify({
                  Email: email,
                  Password: password

                })
              })
                .then(response => response.json())
                .then((profiledata) => {

                  let name = profiledata.profile.FIRST_NAME
                  this.setState({ logged_in_first_name: name })
                  let id = profiledata.profile.PERSON_ID
                  this.setState({ logged_in_person_id: id })

                  this.setState({ profiles: profiledata.profile }, console.log("in submit"))





                  // this.setState({ tokens: token })
                  // this.setState({ logged_in_first_name: profiledata.FIRST_NAME })
                  // this.setState({ logged_in_person_id: profiledata.PERSON_ID })

                });

              this.setState({ route: "Profile" });

            }

          })
      })

  }







  onSubmitSearch = (source, dest, date_of_travel, hobbies, tokens) => {
    console.log("in submit" + source + dest + date_of_travel + hobbies)


    fetch('http://localhost:9000/search', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.state.tokens
      },
      body: JSON.stringify({
        Source: source,
        Destination: dest,
        Date_Of_Travel: date_of_travel

      })
    })

      .then(response => response.json())
      .then(ridedata =>
        this.setState({ fetchedRides: ridedata.searchedride }))

    this.setState({ route: "SearchedRides" });


  }

  render() {
    const { route, fetchedRides, getmyrides, tokens, profiles, imgstring, imageStr, rideRequested, profile_in_first_name,fetchrequestrides, logged_in_person_id, logged_in_first_name } = this.state;
    // var fetchedRidesLength = fetchedRides.length;



    // const logged_in_first_name =  profiles.FIRST_NAME

    // const logged_in_person_id =  profiles.PERSON_ID
    // console.log("length dekh" + fetchedRides.fetchedRides);
    // console.log("length dekh" + fetchedRides.length);
    console.log("photo" + tokens);

    console.log("profilessss" + logged_in_person_id + logged_in_first_name);

    console.log("vg43g5g5g35g" + profiles.FIRST_NAME)
    console.log("photo" + imgstring + "cccc" + imageStr);

    console.log("yeh dal gaya ride request table mein" + rideRequested);

    console.log("yeh kiya fetch data" + fetchrequestrides);
    console.log("yeh deekha fetch data" + getmyrides);
    console.log("fetch profile name" +profile_in_first_name);


    return (

      <div className="App">
        {(route === 'Profile'?
           <Profile onRouteChange={this.onRouteChange} />


          : (route === 'Login' ?
            <div>
              <Navigation onRouteChange={this.onRouteChange} />
              <Login onRouteChange={this.onRouteChange} onSubmit={this.onSubmit} />

            </div>

            : (route === 'Register' ?
              <div>
                <Navigation onRouteChange={this.onRouteChange} />
                <Register onRouteChange={this.onRouteChange} />
              </div>

              : (route === 'AboutUs' ?
                <div>
                  <Navigation onRouteChange={this.onRouteChange} />
                  < AboutUs onRouteChange={this.onRouteChange} />
                </div>

                : (route === 'ContactUs' ?
                  <div>
                    <Navigation onRouteChange={this.onRouteChange} />
                    < ContactUs onRouteChange={this.onRouteChange} />
                  </div>

                  : (route === 'SearchedRides' ?
                    <div>
                      <Profile onRouteChange={this.onRouteChange} />
                      < RideList fetchedRides={fetchedRides} 
                        onRouteChange={this.onRouteChange} onRequestRide={this.onRequestRide} />
                    </div>

                    : (route === 'Search' ?
                      <div>
                        <Profile onRouteChange={this.onRouteChange} />
                        <Search onRouteChange={this.onRouteChange} onSubmitSearch={this.onSubmitSearch} />
                      </div>


                      : (route === 'MyProfile' ?
                        <div>
                          <Profile onRouteChange={this.onRouteChange} />
                          <ProfileFetch profiles={profiles} onRouteChange={this.onRouteChange}/>
                        </div>

                        : (route === 'UpdateProfile'?
                        <div>
                        {/* <Profile onRouteChange={this.onRouteChange}></Profile> */}
                        {/* <UpdateProfile />  */}
                           {/* <MyProfile onRouteChange={this.onRouteChange}/>  */}
                          {/* <UpdateProfile onRouteChange={this.onRouteChange}  /> */}
                          {/* //<ProfileFetch  profiles={profiles} onRouteChange={this.onRouteChange}/>                         */}
                           <UpdateProfileFetch   profiles={profiles} onRouteChange={this.onRouteChange}  /> 
                        </div>

                        : (route === 'Rides' ?
                          <div>
                            <Profile onRouteChange={this.onRouteChange} />

                            < Rides onRouteChange={this.onRouteChange} onFetchRequestedRides={this.onFetchRequestedRides} />
                          </div>

                          : (route === 'FetchedRequestedRides' ?
                            <div>

                              <Profile onRouteChange={this.onRouteChange} />
                              < RideRequestsList fetchrequestrides={fetchrequestrides} onRouteChange={this.onRouteChange}
                               onAcceptedRides={this.onAcceptedRides} onRejectedRides={this.onRejectedRides} />
                            </div>


                            : (route === 'AddRides' ?
                              <div>
                                <Profile onRouteChange={this.onRouteChange} />

                                < AddRides onRouteChange={this.onRouteChange} />
                              </div>

                              : (route === 'AcceptedMyRides' ?
                                <div>

                                  <Profile onRouteChange={this.onRouteChange} />
                                  < MyRidesList getmyrides={getmyrides} onRouteChange={this.onRouteChange} />
                                </div>

                                : (route === 'home',
                                  <div>
                                    <Navigation onRouteChange={this.onRouteChange} />
                                  </div>


                                )
                              )
                            )
                          )
                        )
                      )
                    )
                    
                 
                  )
                  
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
          <div className="text pt6">
          <div class=" nav-item nav-link black active  f3 fw4 ph0 mh0 pa0">CARPPOOL <br />OF  <br />DIGITAL <br />AGE</div>
          </div>
        </div>

        <footer className="pv4 ph3 ph5-ns tc">
          <a className="link dim gray dib h2 w2 br-100 mr3 mt6 pt5" href="https://www.facebook.com/" title="">
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
            <p className="f6 link dim gray dib mr3  mr4-ns">Help</p>
            <p className="f6 link dim gray dib mr3 mr4-ns">Send feedback</p>
            <p className="f6 link dim gray dib mr3  mr4-ns">Privacy</p>
            <p className="f6 link dim gray dib ">Terms</p>
          </div>
        </footer>
      </div>
    );
  }

}

export default App;