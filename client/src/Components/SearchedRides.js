import React, { Component } from 'react';
import profile from './profile3.png';
import profile2 from './profile2.jpg';

class SearchedRides extends Component {
    constructor(props) { super(props) }

    render() {
        const { onRouteChange } = this.props;
        return (

            // <article class="br3 ph5 ba bg-white b--black-10  mv4 w-0 w-50-m w-25-l shadow-5 center push">
            <div 
            
            class="pa4 ">
                 <legend className="f3 fw6 ph0 mh0">Rides available</legend>

                <div class="overflow-auto pa5">
                    <table class="f6 w-100 ph4 mw8 center bg-white" cellspacing="2">
                        <thead>
                            <tr class="stripe-dark">
                                
                            <th class="fw6 tl pa3 bg-white right">Profile Picture</th>
                                <th class="fw6 tl pa3 bg-white right">Name</th>
                                <th class="fw6 tl pa3  bg-white right">   Source</th>
                                <th class="fw6 tl pa3 ma3 bg-white right">    Destintation</th>
                                <th class="fw6 tl pa3 bg-white right"> Date</th>
                            </tr>
                        </thead>
                        <tbody class="lh-copy">
                            <tr class="stripe-dark">
                                    <img class="br-100 pa1 ba b--black-10 h3 w3" source src={profile}>
                                    </img>
                                <td class="pa3">Hassan Johnson</td>
                                <td class="pa3">@hassan</td>
                                <td class="pa3">hassan@companywithalongdomain.co</td>
                                <td class="pa3">14419232532474</td>
                            </tr>
                            <tr class="stripe-dark">
                            <img class="br-100 pa1 ba b--black-10 h3 w3" source src={profile2}>
                                    </img>
                                <td class="pa3">Taral Hicks</td>
                                <td class="pa3">@hicks</td>
                                <td class="pa3">taral@companywithalongdomain.co</td>
                                <td class="pa3">72326219423551</td>
                            </tr>
                            <tr class="stripe-dark">
                                <td class="pa3">Tyrin Turner</td>
                                <td class="pa3">@tt</td>
                                <td class="pa3">ty@companywithalongdomain.co</td>
                                <td class="pa3">92325170324444</td>
                            </tr>
                            <tr class="stripe-dark">
                                <td class="pa3">Oliver Grant</td>
                                <td class="pa3">@oli</td>
                                <td class="pa3">oliverg@companywithalongdomain.co</td>
                                <td class="pa3">71165170352909</td>
                            </tr>
                            <tr class="stripe-dark">
                                <td class="pa3">Dean Blanc</td>
                                <td class="pa3">@deanblanc</td>
                                <td class="pa3">dean@companywithalongdomain.co</td>
                                <td class="pa3">71865178111909</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            //    </article>
        );

    }
}

export default SearchedRides;