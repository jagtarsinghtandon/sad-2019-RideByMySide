import React from 'react';
import MyProfile from './MyProfile';




const ProfileFetch = ({ profiles,onRouteChange }) => {
    return (
      
      <div >
        {
          profiles.map((file, i) => {
            return (
              <MyProfile
                
                first_name={profiles[i].FIRST_NAME}
                last_name={profiles[i].LAST_NAME}
                email={profiles[i].EMAIL}
                dob={profiles[i].DOB}
                mobileno={profiles[i].CONTACT_NO}
                hobbies={profiles[i].HOBBIES}
                image={profiles[i].IMAGE.data}
                onRouteChange={onRouteChange}

                />  
                
                        
            );
          })
          
        }
      </div>
      
    );
  }
  
  export default ProfileFetch;