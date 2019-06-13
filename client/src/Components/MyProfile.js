import React from 'react';

const MyProfile = ({first_name, last_name, email, dob, mobileno, hobbies, image, onRouteChange}) => {
   
    var imgstring = []

    var binary = '';
    var bytes = [].slice.call(new Uint8Array(image));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    var imageStr = window.btoa(binary);


    var base64Flag = 'data:image/jpeg;base64,';


    imgstring.push(base64Flag + imageStr)

        return(
            <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={imgstring} alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head black">
                                    <h5>
                                        {first_name +"  " +last_name}
                                    </h5>
                                    <h6>
                                        {email}
                                    </h6>
                                    <h7>
                                       Interested in: {hobbies}
                                     </h7>  
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                 
                </div>
                <div class="row">
                    <div class="col-md-4">
                      
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active white" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{first_name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{mobileno}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Date Of Birth</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{dob}</p>
                                            </div>
                                        </div>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
            </form>           
        </div>

           
        
        )};


export default MyProfile;