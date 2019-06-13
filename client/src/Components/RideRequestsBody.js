import React from 'react';
import './stylesheet.css';


const RideRequestsBody = ({ source, destination, date_of_travel, image, first_name, hobbies, person_id, ride_id, requested_person_id, onAcceptedRides, ride_accepted, ride_rejected, onRejectedRides }) => {
    console.log("person id dekha" + person_id + ride_id)
    var ride_accepted = "accepted"

    var ride_rejected = "rejected"


    var imgstring = []

    var binary = '';
    var bytes = [].slice.call(new Uint8Array(image));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    var imageStr = window.btoa(binary);


    var base64Flag = 'data:image/jpeg;base64,';


    imgstring.push(base64Flag + imageStr)
    console.log(imgstring)


    return (
        <div className="pa0 ">
            <table className="f6 w-100 ph0 mw8 center bg-white" cellSpacing="100">
                <tbody className="lh-copy">
                    <tr className="stripe-dark">
                        <img className="br-100 pa1 ba b--black-10 h3 w3 changeBackground" source src={imgstring}>

                        </img>
                        <td className="pa3">{first_name}</td>

                        <td className="pa3">{source}</td>
                        <td className="pa3">{destination}</td>
                        <td className="pa3">{date_of_travel}</td>

                        <td className="pa3">{hobbies}</td>
                        <td>
                            <div >
                                <input
                                    className="btn bg-green grow pull pointer "
                                    value="Accept"
                                    type="submit"
                                    onClick={() => onAcceptedRides(source, destination, ride_accepted, date_of_travel, imgstring, first_name, hobbies, person_id, ride_id, requested_person_id)}
                                />
                                <input
                                    className="btn bg-red grow pull pointer "
                                    value="Reject"
                                    type="submit"
                                    onClick={() => onRejectedRides(source, destination, ride_rejected, date_of_travel, imgstring, first_name, hobbies, person_id, ride_id, requested_person_id)}


                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


    );
}


export default RideRequestsBody;