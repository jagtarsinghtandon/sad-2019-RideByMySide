import React from 'react';
import MyRidesHeader from './MyRidesHeader';
import MyRidesBody from './MyRidesBody';



const MyRidesList = ({ getmyrides, onRouteChange }) => {
  return (
    <div >
      <MyRidesHeader onRouteChange={onRouteChange} />
      {

        <MyRidesBody
          source={getmyrides.SOURCE}
          destination={getmyrides.DESTINATION}
          date_of_travel={getmyrides.DATE_TIME_OF_RIDE}

          hobbies={getmyrides.HOBBIES}

         // image={getmyrides.IMAGE.data}

          first_name={getmyrides.FIRST_NAME}

          person_id={getmyrides.PERSON_ID}
              
          ride_id={getmyrides.ride_RIDE_ID}

          requested_person_id={getmyrides.REQUESTED_PERSON_ID}
        />

      }
    </div>
  );
}

export default MyRidesList;