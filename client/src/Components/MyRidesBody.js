import React from 'react';
import './stylesheet.css';


const MyRidesBody = ({ source, destination, date_of_travel, image, first_name, hobbies }) => {


    return (
        <div className="pa0 ">
            <table className="f6 w-100 ph0 mw8 center bg-white" cellSpacing="100">
                <tbody className="lh-copy">
                    <tr className="stripe-dark">
                        <img className="br-100 pa1 ba b--black-10 h3 w3 changeBackground" source src={image}>

                        </img>
                        <td className="pa3">{first_name}</td>

                        <td className="pa3">{source}</td>
                        <td className="pa3">{destination}</td>
                        <td className="pa3">{date_of_travel}</td>
                        <td className="pa3">{hobbies}</td>

                        <td className="pa3">Ride Request Accepted</td>

                    </tr>
                </tbody>
            </table>

        </div>


    );
}


export default MyRidesBody;