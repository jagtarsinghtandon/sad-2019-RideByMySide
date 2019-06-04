import React, { Component } from 'react';
import profile from './profile3.png';
import profile2 from './profile2.jpg';


const SearchedRidesHeader = ({length}) => {
    return (    
                    <div  class=" ">
                        {(length <= 0 
                        ? 
                         <legend className="f3 fw6 ph0 mh0">No Rides available</legend>
                        :
                        <legend className="f3 fw6 ph0 mh0">Rides available</legend>
                        
                        )
                        }
                        
                            <table class="f6 w-100 ph4 mw8 center bg-white" cellspacing="2">
                                <thead>
                                    <tr class="stripe-dark">
                                        
                                     <th class="fw6 tl pa3 ma3 bg-white right">Profile Picture</th>
                                 <th class="fw6 tl pa3 bg-white right">Name</th>
                                      <th class="fw6 tl pa3  bg-white right">      Source</th>
                                         <th class="fw6 tl pa3 ma3 bg-white right">      Destintation</th>
                                         <th class="fw6 tl pa3 bg-white right">  Date of Travel</th>
                                     </tr>
                                 </thead>
                             </table>
                        
                          </div>
              
                
    );
}


export default SearchedRidesHeader;