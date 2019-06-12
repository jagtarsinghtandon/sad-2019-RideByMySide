import React from 'react';
import MyProfile from './MyProfile';



const ProfileFetch = ({ profiles }) => {
  return (

    <div >
      {
       
            <MyProfile
            
              email={profiles.EMAIL}
              first_name={profiles.FIRST_NAME}
              last_name={profiles.LAST_NAME}
              person_id={profiles.PERSON_ID}

            />
         
      }
    </div>

  );
}

export default ProfileFetch;