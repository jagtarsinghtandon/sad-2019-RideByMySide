import React from 'react';
import './stylesheet.css';


const SearchedRidesBody = ({ source, destination, date_of_travel, image, name, hobbies, person_id, ride_id, requested_person_id, onRequestRide, onRouteChange }) => {


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
            <table className="f6 w-100 ph0 mw8 center bg-white zoom" cellSpacing="200">
                <tbody className="lh-copy">
                    <tr className="stripe-dark">

                        <img className="br-100 pa2 ba b--black-10 h3 w3 changeBackground" source src={imgstring}
                            onClick={() => onRouteChange('Profile')}    >
                        </img>

                        <td className="pa3 mr fw0 ">{name}</td>

                        <td className="pa3">{source}</td>
                        <td className="pa3">{destination}</td>
                        <td className="pa3">{date_of_travel}</td>
                        <td className="pa3">{hobbies}</td>

                        <div >
                            <input

                                onClick={() => onRequestRide(imgstring, name, source, destination, date_of_travel, hobbies, person_id, ride_id, requested_person_id)}
                                className="btn bg-green grow pull pointer"
                                type="submit"
                                value="Request this ride"

                            />
                        </div>


                    </tr>
                </tbody>
            </table>

        </div>


    );
}


export default SearchedRidesBody;