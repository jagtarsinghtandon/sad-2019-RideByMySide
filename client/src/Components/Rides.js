import React from 'react';




const Rides = ({ onRouteChange, onFetchRequestedRides, onSubmitMyRides,onSubmitAcceptedRejected }) => {

    return (
        <div className="pack pt5 center">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


            <div >
                    <input
                        onClick={() => onRouteChange('AddRides')}
                        className="btn ph3 pv2 ba b--black bg-green grow pull pointer f6 dib"
                        type="submit"
                        value="Add a Ride"
                    />
                </div>



                <div >
                    <input
                        onClick={() => onSubmitMyRides()}
                        className="btn ph3 pv2 ba b--black bg-green grow pull pointer f6 dib"
                        type="submit"
                        value="My Rides"
                    />
                </div>

                <div >
                    <input
                        onClick={() => onFetchRequestedRides()}

                        className="btn ph3 pv2 input-reset ba b--black bg-green pull grow pointer f6 dib"
                        type="submit"
                        value="Ride Requests List"
                    />
                </div>

                

                <div >
                    <input
                        onClick={() => onSubmitAcceptedRejected()}
                        className="btn ph3 pv2 ba b--black bg-green grow pull pointer f6 dib"
                        type="submit"
                        value="Accepted/Rejected Rides"
                    />
                </div>

            </div>
        </div>

    )
}

export default Rides;