import React from 'react';
// import Tilt from 'react-tilt';


const Search = ({ onRouteChange }) => {
    return (
        <article class="br3 ph4 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 right ml3">
 
        <div>
        {/* <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Source</span>
            </div>
            <input type="text" class=".br4 w-20" placeholder="Search any City" aria-label="Username" aria-describedby="basic-addon1" />
            
        </div>
        <br></br>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Destination</span>
            </div>
            <input type="text" class=".br4 w-20" placeholder="Search any City" aria-label="Username" aria-describedby="basic-addon1" />

        </div> */}
        <legend className="f3 fw6 ph0 mh0">Find a Ride</legend>
             
        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Source</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="text" placeholder="Search any City"
                                name="Source"  id="Source"
                            />
                        </div>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Destination</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="text" placeholder="Search any City"
                                name="Destination"  id="Destination"
                            />
                        </div>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Interests</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="text" placeholder="Football, Movies, Books, etc."
                                name="Destination"  id="Destination"
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Date</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="date" 
                                name="Date"  id="Date"
                            />
                        </div>
                        <div className="">
              <input
                onClick={() => onRouteChange('Search')}
                className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Search"
              />
            </div>
                        
        </div>
        
        </article>
    );
}

export default Search;