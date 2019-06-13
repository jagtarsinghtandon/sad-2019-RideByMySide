import React from 'react';
import AcceptedRejectedRidesHeader from './AcceptedRejectedRidesHeader';
import AcceptedRejectedRidesBody from './AcceptedRejectedRidesBody';



const AcceptedRejectedList = ({ acceptedrejectedrides, onRouteChange }) => {
  return (
    <div >
      <AcceptedRejectedRidesHeader onRouteChange={onRouteChange} />
      {
         acceptedrejectedrides.map((file, i) => {
          return (
        <AcceptedRejectedRidesBody
          source={acceptedrejectedrides[i].SOURCE}
          destination={acceptedrejectedrides[i].DESTINATION}
          date_of_travel={acceptedrejectedrides[i].DATE_TIME_OF_RIDE}

          hobbies={acceptedrejectedrides[i].HOBBIES}

         image={acceptedrejectedrides[i].IMAGE.data}

          first_name={acceptedrejectedrides[i].FIRST_NAME}

          person_id={acceptedrejectedrides[i].PERSON_ID}
              
          ride_id={acceptedrejectedrides[i].ride_RIDE_ID}
          
          ride_status={acceptedrejectedrides[i].RIDE_STATUS}

          requested_person_id={acceptedrejectedrides.REQUESTED_PERSON_ID}
        />
        );
      })
      }
    </div>
  );
}

export default AcceptedRejectedList;