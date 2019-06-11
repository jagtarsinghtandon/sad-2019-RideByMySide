import React from 'react';


const Rides = ({onRouteChange}) => {
    return(
        <div>
            <div className="">
                <input 
                    onClick = {() => onRouteChange('RideRequests')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Ride Requests" 
                />
            </div>

        <div className="">
            <input 
            onClick = {() => onRouteChange('AddRides')}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Add a Ride" 
            />
        </div>

        
</div>
    )
}

export default Rides;