import React, { Component } from 'react';
//import SearchedRides from './SearchedRides';


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            dest: '',
            rides: []

        }
        // this.onChange = this.onRouteChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)

    }
    onSourceChange = (event) => {
        this.setState({ source: event.target.value })
    }

    onDestinationChange = (event) => {
        this.setState({ dest: event.target.value })
    }
    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    onSubmit = () => {
        console.log("in submit")
        fetch('http://localhost:9000/search', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Source: this.state.source,
        Destination: this.state.dest
      })
    })
    // .then(res => {
    //     if (res.status === 200) {
    //     console.log("sucess")
    //       //localStorage.setItem('usertoken', res.data)

    //       //this.props.onRouteChange('SearchedRides');
    //     }
    // })
    .then(response => response.json())
    .then(ridedata => this.setState({ rides: ridedata.rides}))
    // .then(this.props.onRouteChange('SearchedRides'))
    .catch(err => {
        console.error(err);     
        alert('Error logging in please try again');
      });
}


    render() {
        const { onRouteChange } = this.props;
        //const { onSubmit } = this.setState;

        const rides = this.state;
        console.log(rides);
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

                           // onClick={() => onRouteChange('SearchedRides')}
                             onClick={this.onSubmit}
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