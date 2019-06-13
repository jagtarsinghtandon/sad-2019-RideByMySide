import React from 'react';
import UpdateProfile from './UpdateProfile';




const UpdateProfileFetch = ({ profiles, onSubmitUpdate, profiles_first }) => {
  return (

    <div >
      {

        <UpdateProfile

          first_name={profiles.FIRST_NAME}
          last_name={profiles.LAST_NAME}
          email={profiles.EMAIL}
          dob={profiles.DOB}
          mobileno={profiles.CONTACT_NO}
          hobbies={profiles.HOBBIES}
          image={profiles.IMAGE.data}

          onSubmitUpdate={onSubmitUpdate}
          profiles_first={profiles_first}

        />




      }
    </div>

  );
}

export default UpdateProfileFetch;