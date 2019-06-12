import React, { Component } from 'react';

class AddRides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            destination: '',
            date: ''



        }
        // this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
    }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    onSourceChange = (event) => {
        this.setState({ source: event.target.value })
    }

    onDestinationChange = (event) => {
        this.setState({ destination: event.target.value })
    }


    onDateChange = (event) => {
        this.setState({ date: event.target.value })
    }


    render() {
        const { source, destination, date, onRouteChange } = this.state;

        // const ridess = this.state;
        // //const { onRouteChange } = this.props;
        // console.log(ridess);

        const { onSubmitCreate } = this.props;

        return (
            <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="Add Ride" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Create a Ride</legend>
                            
                            
                            <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="Source">Source</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Enter Source"
                            name="Source" id="Source"
                            value={this.source}
                            onChange={this.onSourceChange}

                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="Destination">Destination</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" placeholder="Enter Destination"
                            name="Destination" id="Destination"
                            value={this.destination}
                            onChange={this.onDestinationChange}

                        />
                    </div>
                 
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Date & Time</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="datetime-local"


                            name="Date" id="Date"
                            value={this.date}
                            onChange={this.onDateChange}
                        />
                    </div>

                        </fieldset>

                        <div className="">
                        <input

                            onClick={() => onSubmitCreate(source, destination, date)}

                            className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Create"
                        />

                    </div>

                      
                    </div>
                </main>
            </article>
        )
    }
}

export default AddRides;