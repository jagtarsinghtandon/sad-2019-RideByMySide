import React from 'react';
import RideRequestsHeader from './RideRequestsHeader';
import RideRequestsBody from './RideRequestsBody';



const RideRequestsList = ({ fetchrequestrides, onRouteChange, onAcceptedRides, onRejectedRides }) => {
  return (
    <div >

      <RideRequestsHeader onRouteChange={onRouteChange}
      />
      {
        fetchrequestrides.map((file, i) => {
          return (
            <RideRequestsBody
              source={fetchrequestrides[i].SOURCE}
              destination={fetchrequestrides[i].DESTINATION}
              date_of_travel={fetchrequestrides[i].DATE_TIME_OF_RIDE}

              hobbies={fetchrequestrides[i].HOBBIES}

              image={fetchrequestrides[i].IMAGE.data}

              first_name={fetchrequestrides[i].FIRST_NAME}

              person_id={fetchrequestrides[i].PERSON_ID}
              
              ride_id={fetchrequestrides[i].ride_RIDE_ID}

              requested_person_id={fetchrequestrides[i].REQUESTED_PERSON_ID}

              onAcceptedRides={onAcceptedRides}

              
              onRejectedRides={onRejectedRides}
            />
          );
        })
      }
    </div>
  );
}

export default RideRequestsList;