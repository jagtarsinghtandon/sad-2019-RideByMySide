import React from 'react';


const RideRequests = () => {
    return(
<div  className=" ">
                       
                       <legend classNameName="f3 fw6 ph0 mh0">Requests</legend>

                      
                      
                      
                          <table className="f6 w-100 ph4 mw8 center bg-white" cellspacing="2">
                              <thead>
                                  <tr className="stripe-dark">
                                      
                                   <th className="fw6 tl pa3 ma3 bg-white right">Profile Picture</th>
                               <th className="fw6 tl pa3 bg-white right">Name</th>
                                    <th className="fw6 tl pa3  bg-white right">      Source</th>
                                       <th className="fw6 tl pa3 ma3 bg-white right">      Destintation</th>
                                       <th className="fw6 tl pa3 bg-white right">  Date of Travel</th>
                                   </tr>
                               </thead>
                           </table>
                      
                        </div>
    )
}

export default RideRequests;