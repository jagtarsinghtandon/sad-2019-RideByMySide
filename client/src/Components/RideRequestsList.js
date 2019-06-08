import React from 'react';
import RideRequestsHeader from './RideRequestsHeader';
import RideRequestsBody from './RideRequestsBody';



const RideRequestsList = ({ fetchedRides, fetchedRidesLength }) => {
    return (
      <div >
                      <RideRequestsHeader
                length = {fetchedRidesLength}
                                   
                />
        {
          fetchedRides.map((file, i) => {
            return (
              <RideRequestsBody
                source={fetchedRides[i].SOURCE}
                destination={fetchedRides[i].DESTINATION}
                date_of_travel={fetchedRides[i].DATE_TIME_OF_RIDE}
                                   
                />             
            );
          })
        }
      </div>
    );
  }
  
  export default RideRequestsList;