import React from 'react';


const MyRidesHeader = ({onRouteChange}) => {
    return(
        <div>
             <div className="back pt3">
                         <input 
                              onClick={() => onRouteChange('Rides')}
                             className="btn ph3 pv2 ba b--black bg-green grow  pointer f6 dib" 
                             type="submit" 
                             value="Back" 
                         />
                     </div>

                <div >
                       
                       <legend className="f3 fw6 ph0 mh0">MyRides</legend>

                          <table className="f6 w-100 ph4 mw8 center bg-white" cellSpacing="2">
                              <thead>
                                  <tr className="stripe-dark">
                                      
                                   <th className="fw6 tl pa3 ma3 bg-white right">Profile Picture</th>
                               <th className="fw6 tl pa3 bg-white right">Name</th>
                                    <th className="fw6 tl pa3  bg-white right">      Source</th>
                                       <th className="fw6 tl pa3 ma3 bg-white right">      Destintation</th>
                                       <th className="fw6 tl pa3 bg-white right">  Date of Travel</th>
                                       <th className="fw6 tl pa3 bg-white right"> Hobbies</th>                                       
                                   </tr>
                               </thead>
                           </table>
                          
                </div>
                        
        </div>
    )
}

export default MyRidesHeader;