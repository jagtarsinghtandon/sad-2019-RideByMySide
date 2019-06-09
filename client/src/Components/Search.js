    import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            dest: '',
            date_of_travel : '',
            hobbies:'',
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

    
    onDateChange = (event) => {
        this.setState({ date_of_travel: event.target.value })
    }
    onHobbiesChange = (event) => {
        this.setState({ hobbies: event.target.value })
    }
  



    render() {
        const {fetchedRides, source, dest, date_of_travel, hobbies} = this.state;
        
        console.log(fetchedRides +"@@@@@@@" +source +dest );
        
        const { onSubmitSearch } = this.props;
      
        return (
            
            <article className="br3 ph4 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">

                <div>

                    <legend className="f3 fw6 ph0 mh0">Find a Ride</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Source</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Search any City"
                            name="Source" id="Source" 
                            onChange={this.onSourceChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Destination</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Search any City"
                            name="Destination" id="Destination" 
                            onChange={this.onDestinationChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Interests/Hobbies</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Football, Movies, Books, etc."
                            name="Destination" id="Destination"
                            onChange={this.onHobbiesChange}
                            
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Date & Time</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="datetime-local"

                            
                            name="Date" id="Date"
                            onChange={this.onDateChange}
                        />
                    </div>
                    <div className="">
                        <input 
                            
                            onClick={() => onSubmitSearch(source,  dest, date_of_travel, hobbies)}

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

