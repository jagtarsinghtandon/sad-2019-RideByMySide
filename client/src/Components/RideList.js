import React from 'react';
import SearchedRidesHeader from './SearchRidesHeader';
import SearchedRidesBody from './SearchRidesBody';



// componentWillMount(); {
// //   var base64Flag = 'data:image/jpeg;base64,';

// //   // var fetchedRidesLength2 = fetchedRides.length;
// //   var imgstring=[]  
  
// //  var imageStr = this.arrayBufferToBase64(image)
// //       imgstring.push(base64Flag + imageStr)

    
// //     this.setState({
// //       img: imgstring
      
// //   })
// console.log(image)
// }

const RideList = ({ fetchedRides, fetchedRidesLength }) => {
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
                
              // {console.log(image)}
           
                />             
            );
          })
        }
      </div>
    );
  }
  
  export default RideList;