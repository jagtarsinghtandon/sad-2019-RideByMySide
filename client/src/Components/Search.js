    import React, { Component } from 'react';
import { PropTypes } from 'react'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            dest: '',
            fetchedRides:[]

        }


        // this.onChange = this.onRouteChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)s

    }

    onSourceChange = (event) => {
        this.setState({ source: event.target.value })
    }

    onDestinationChange = (event) => {
        this.setState({ dest: event.target.value })
    }
  



    render() {
        const {fetchedRides, source, dest} = this.state;
        
        console.log(fetchedRides +"@@@@@@@" +source +dest );
        
        const { onRouteChange,onSubmitSearch } = this.props;
      
        return (
            
            <article class="br3 ph4 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">

                <div>

                    <legend className="f3 fw6 ph0 mh0">Find a Ride</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Source</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Search any City"
                            name="Source" id="Source" required value={this.state.email}
                            onChange={this.onSourceChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Destination</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Search any City"
                            name="Destination" id="Destination" required value={this.state.email}
                            onChange={this.onDestinationChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Interests</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Football, Movies, Books, etc."
                            name="Destination" id="Destination"
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Date</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="date"
                            name="Date" id="Date"
                        />
                    </div>
                    <div className="">
                        <input 
                            
                            onClick={() => onSubmitSearch(source,  dest)}

                            className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Search"
                        />

                    </div>

    
                </div>

            </article>



        );
    }
}


export default Search;

