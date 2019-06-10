import React from 'react';
import RideRequestsHeader from './RideRequestsHeader';
import RideRequestsBody from './RideRequestsBody';



const RideRequestsList = ({  fetchrequestrides , onRouteChange,onAcceptedRides }) => {
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
                ride_id={fetchrequestrides[i].RIDE_ID}
                
                onAcceptedRides = {onAcceptedRides}                 
                />             
            );
          })
        }
      </div>
    );
  }
  
  export default RideRequestsList;