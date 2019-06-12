import React from 'react';
import MyRidesHeader from './MyRidesHeader';
import MyRidesBody from './MyRidesBody';



const MyRidesList = ({ getmyrides, onRouteChange }) => {
  return (
    <div >
      <MyRidesHeader onRouteChange={onRouteChange} />
      {
         getmyrides.map((file, i) => {
          return (
        <MyRidesBody
          source={getmyrides[i].SOURCE}
          destination={getmyrides[i].DESTINATION}
          date_of_travel={getmyrides[i].DATE_TIME_OF_RIDE}

          hobbies={getmyrides[i].HOBBIES}

         image={getmyrides[i].IMAGE.data}

          first_name={getmyrides[i].FIRST_NAME}

          person_id={getmyrides[i].PERSON_ID}
              
          ride_id={getmyrides[i].ride_RIDE_ID}

          requested_person_id={getmyrides.REQUESTED_PERSON_ID}
        />
        );
      })
      }
    </div>
  );
}

export default MyRidesList;