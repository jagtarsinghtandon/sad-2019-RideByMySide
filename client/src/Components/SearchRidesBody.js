import React, { Component } from 'react';
import profile from './profile3.png';
import profile2 from './profile2.jpg';


const SearchedRidesBody = ({source, destination, date_of_travel}) => {
    return (    
                    <div  class="pa0 ">
                            <table class="f6 w-100 ph0 mw8 center bg-white" cellspacing="100">
                                <tbody class="lh-copy">
                                    <tr class="stripe-dark">
                                             <img class="br-100 pa1 ba b--black-10 h3 w3" source src={profile}>
                                             </img>
                                          <td class="pa3">Kathy Durant</td> 
                                        
                                         <td class="pa3">{source}</td>
                                         <td class="pa3">{destination}</td>
                                         <td class="pa3">{date_of_travel}</td>
                                         
                                     </tr>
                                 </tbody>
                             </table>
                        
                          </div>
         
                
    );
}


export default SearchedRidesBody;