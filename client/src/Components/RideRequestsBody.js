import React from 'react';
import profile from './profile3.png';


const RideRequestsBody = ({source, destination, date_of_travel}) => {
    return (    
                    <div  className="pa0 ">
                            <table className="f6 w-100 ph0 mw8 center bg-white" cellSpacing="100">
                                <tbody className="lh-copy">
                                    <tr className="stripe-dark">
                                             <img className="br-100 pa1 ba b--black-10 h3 w3" source src={profile}>
                                             </img>
                                          <td className="pa3">Kathy Durant</td> 
                                        
                                         <td className="pa3">{source}</td>
                                         <td className="pa3">{destination}</td>
                                         <td className="pa3">{date_of_travel}</td>
                                         <td>{Action}
                                         <div >
                                        <input  class="btn bg-primary" value="Accept"/>
                                        <input  class="btn bg-primary" value="Reject"/>
                                        </div>
                                         </td>
                                     </tr>
                                 </tbody>
                             </table>
                        
                          </div>
         
                
    );  
}


export default RideRequestsBody;