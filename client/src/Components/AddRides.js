import React from 'react';


const AddRides = () => {
    return(
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
                                //    value={this.state.source}
                                //     onChange={this.onChange}
                                     />
                            
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
                                    // value={this.state.destination}
                                    // onChange={this.onChange} 
                                    />
                            
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
                                    // value={this.state.date}
                                    // onChange={this.onChange} 
                                    />
                             
                        </div>
                       

                        
                    
                    <div className="">
                        <input 
                            //onClick = {this.onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add Ride" 
                        />
                    </div>
                   
                    </fieldset>
                </form>
            </main>
        </article>
    )
}

export default AddRides;