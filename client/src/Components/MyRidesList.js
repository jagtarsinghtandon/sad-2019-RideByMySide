import React from 'react';
import MyRidesHeader from './MyRidesHeader';
import MyRidesBody from './MyRidesBody';



const MyRidesList = ({ getmyrides, onRouteChange }) => {
  return (
    <div >
      <MyRidesHeader onRouteChange={onRouteChange} />
      {



        // getmyrides.map((file, i) => {
        //   return (
            <MyRidesBody
              source={getmyrides.SOURCE}
              destination={getmyrides.DESTINATION}
              date_of_travel={getmyrides.DATE_TIME_OF_RIDE}

              hobbies={getmyrides.HOBBIES}

              image={getmyrides.IMAGE.data}

              first_name={getmyrides.FIRST_NAME}

            />
        //   );
        // })
      }
    </div>
  );
}

export default MyRidesList;