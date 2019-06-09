import React from 'react';


const SearchedRidesHeader = ({length}) => {
    return (    
                    <div  className=" ">
                        {(length <= 0 
                        ? 
                         <legend classNameName="f3 fw6 ph0 mh0">No Rides available</legend>
                        :
                        <legend classNameName="f3 fw6 ph0 mh0">Rides available</legend>
                        
                        )
                        }
                        
                            <table className="f6 w-100 ph4 mw8 center bg-white" cellspacing="2">
                                <thead>
                                    <tr className="stripe-dark">
                                        
                                     <th className="fw0 tl pr0 ma0 bg-white ">Profile Picture</th>
                                    <th className="fw0  bg-white ">Name</th>
                                      <th className="fw0 pr0 ma0  bg-white ">Source</th>
                                         <th className="fw0 pr0 ma3 bg-white ">Destintation</th>
                                         <th className="fw0 tl pr0 ma3 bg-white ">Date/Time of Travel  &  Hobbies</th>
                                         {/* <th className="fw0 tl pr0 ma3 bg-white ">Hobbies</th> */}
                                         <th className="fw0 tl pa3 bg-white right">       </th>
                                    
                                     </tr>
                                 </thead>
                             </table>
                        
                          </div>
              
                
    );
}


export default SearchedRidesHeader;