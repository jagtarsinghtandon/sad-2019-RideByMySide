import React from 'react';
import MyProfile from './MyProfile';



const ProfileFetch = ({ profiles }) => {
    return (

      <div >
        {
          profiles.map((file, i) => {
            return (
              <MyProfile
                email={profiles[i].EMAIL}
                first_name={profiles[i].FIRST_NAME}
                last_name={profiles[i].LAST_NAME}
                />             
            );
          })
        }
      </div>
      
    );
  }
  
  export default ProfileFetch;