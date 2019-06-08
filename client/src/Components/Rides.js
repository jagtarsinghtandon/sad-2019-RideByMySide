import React from 'react';


const Rides = ({onRouteChange}) => {
    return(
            <div className="pack pt5">
        <div  style = {{display:'flex', justifyContent:'flex-end'}}>

                <div >
                    <input 
                        onClick = {() => onRouteChange('RideRequestsHeader')}
                        className="btn ph3 pv2 input-reset ba b--black bg-green pull grow pointer f6 dib" 
                        type="submit" 
                        value="Ride Requests" 
                    />
                </div>

            <div >
                <input 
                    onClick = {() => onRouteChange('AddRides')}
                    className="btn ph3 pv2 ba b--black bg-green grow pull pointer f6 dib" 
                    type="submit" 
                    value="Add a Ride" 
                />
            </div>

        </div>
        </div>

    )
}

export default Rides;