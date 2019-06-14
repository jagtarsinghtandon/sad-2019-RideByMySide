import React from 'react';
import './stylesheet.css';


const AcceptedRejectedRidesBody = ({source, destination, date_of_travel, image, first_name, hobbies,ride_status }) => {

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
            <table className="f6 w-100 ph0 mw8 center bg-white zoom" cellSpacing="100">
                <tbody className="lh-copy">
                    <tr className="stripe-dark">
                        <img className="br-100 pa1 ba b--black-10 h3 w3 changeBackground" source src={imgstring}>

                        </img>
                        <td className="pa3">{first_name}</td>

                        <td className="pa3">{source}</td>
                        <td className="pa3">{destination}</td>
                        <td className="pa3">{date_of_travel}</td>
                        <td className="pa3">{hobbies}</td>
                        <td className="pa3">{ride_status}</td>
                       

                    </tr>
                </tbody>
            </table>

        </div>


    );
}


export default AcceptedRejectedRidesBody;