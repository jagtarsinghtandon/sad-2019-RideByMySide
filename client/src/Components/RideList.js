import React from 'react';
import SearchedRidesHeader from './SearchRidesHeader';
import SearchedRidesBody from './SearchRidesBody';



const RideList = ({ fetchedRides, fetchedRidesLength, onRequestRide, onRouteChange }) => {
  // console.log(image);
    return (
      <div >
                      <SearchedRidesHeader
                length = {fetchedRidesLength}
                                   
                />
        {
          fetchedRides.map((file, i) => {
            return (
              <SearchedRidesBody
                source={fetchedRides[i].SOURCE}
                destination={fetchedRides[i].DESTINATION}
                date_of_travel={fetchedRides[i].DATE_TIME_OF_RIDE}
                name={fetchedRides[i].FIRST_NAME}
                image={fetchedRides[i].IMAGE.data}
                hobbies={fetchedRides[i].HOBBIES}
                person_id={fetchedRides[i].PERSON_ID}
                ride_id={fetchedRides[i].RIDE_ID}
                
                
              // {console.log(image)}
           
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