import React, { Component } from 'react';
import SearchedRidesHeader from './SearchRidesHeader';
import SearchedRidesBody from './SearchRidesBody';



const RideList = ({ fetchedRides, fetchedRidesLength }) => {
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
                // length = {fetchedRidesLength}
                                   
                />             
            );
          })
        }
      </div>
    );
  }
  
  export default RideList;