import React,{Component} from 'react';

class AddRides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            destination: '',
            date: '',
            ride: []
            
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit () {
      fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            source: this.state.source,
            destination: this.state.destination,
          date: this.state.date,
      })
    })
    
    .then(response => response.json())
    .then(ridedata => this.setState({ ridess: ridedata.ride})); 
   
     
   
      
    }


    render(){

        const ridess = this.state;
        const { onRouteChange } = this.props;
        console.log(ridess); 
        

    return(


        <div>

<div className="back pt3">
         <input 
              onClick={() => onRouteChange('Rides')}
             className="btn ph3 pv2 ba b--black bg-green grow pointer f6 dib" 
             type="submit" 
             value="Back" 
         />
     </div>

        <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Add a Ride</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="source">Source </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="text" 
                                name="source"  
                                id="source"
                                required
                                 maxLength="10"
                                 placeholder="Enter Source"
                                 value={this.state.source}
                                    onChange={this.onChange} />
                                     
                            
                        </div>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="destination">Destination </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="text" 
                                name="destination" 
                                 id="destination"
                                 required
                                 maxLength="10"
                                 placeholder="Enter Destination"
                                 value={this.state.destination}
                                    onChange={this.onChange} />
                                    
                            
                        </div>

                        

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="date">Date </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                                type="date" 
                                name="date" 
                                 id="date"
                                 required
                                 placeholder="Enter Date"
                                 value={this.state.date}
                                    onChange={this.onChange} />
                                   
                                
                             
                        </div>
                       

                        
                    
                    <div className="pt3">
                        <input 
                           onClick = {this.onSubmit}
                            className="btn ph3 pv2  ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add Ride" 
                        />
                    </div>
                   
                    </fieldset>
                </form>
            </main>
        </article>

         

     </div>
    )
}
}

export default AddRides;