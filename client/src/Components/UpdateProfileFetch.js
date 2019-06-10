import React from 'react';
import UpdateProfile from './UpdateProfile';




const UpdateProfileFetch = ({ profiles }) => {
    return (
      
      <div >
        {
          profiles.map((file, i) => {
            return (
              <UpdateProfile
                
                first_name={profiles[i].FIRST_NAME}
                last_name={profiles[i].LAST_NAME}
                email={profiles[i].EMAIL}
                dob={profiles[i].DOB}
                mobileno={profiles[i].CONTACT_NO}
                hobbies={profiles[i].HOBBIES}
                image={profiles[i].IMAGE.data}
                
                />  
                
                        
            );
          })
          
        }
      </div>
      
    );
  }
  
  export default UpdateProfileFetch;