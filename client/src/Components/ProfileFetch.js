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
              dob={profiles.DOB}
              mobileno={profiles.CONTACT_NO}
              hobbies={profiles.HOBBIES}
              image={profiles.IMAGE.data}

            />
         
      }
    </div>

  );
}

export default ProfileFetch;