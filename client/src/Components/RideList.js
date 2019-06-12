import React from 'react';
import SearchedRidesHeader from './SearchRidesHeader';
import SearchedRidesBody from './SearchRidesBody';



const RideList = ({ fetchedRides, onRequestRide, onRouteChange }) => {
  return (
    <div >
      <SearchedRidesHeader

      />
      {
       
          
       fetchedRides.map((file, i) => {
        return (
          <SearchedRidesBody
            source={fetchedRides[i].SOURCE}
            destination={fetchedRides[i].DESTINATION}
            date_of_travel={fetchedRides[i].DATE_TIME_OF_RIDE}
            name={fetchedRides[i].Person.FIRST_NAME}
            image={fetchedRides[i].Person.IMAGE.data}
            hobbies={fetchedRides[i].Person.HOBBIES}
            person_id={fetchedRides[i].person_PERSON_ID}
            ride_id={fetchedRides[i].RIDE_ID}
            requested_person_id={fetchedRides[i].REQUESTED_PERSON_ID}
            
       
          onRequestRide = {onRequestRide}
          
          onRouteChange = {onRouteChange}
            />             
        );
      })
      }
    </div>
  );
}

export default RideList;