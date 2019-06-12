
import React,{ Component } from 'react';
// import event from 'react';
//import PropTypes from 'prop-types'
//const myHandler = (e,props) => props.dispatch(something());

// const UpdateProfile = ({first_name, last_name, email, dob, mobileno, hobbies, image, onRouteChange, onSubmitUpdate, handleChange}) => {

//this.state={onFnameChange};  
class UpdateProfile extends Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            first_name:this.first_name,
            last_name:this.last_name,
            email:this.email,
            dob:this.dob,
            mobileno:this.mobileno,
            hobbies:this.hobbies,
            imgstring:this.imgstring,
            // profile_in_first_name:this.profile_in_first_name
        }
    }
// var e = 1;
// this.onFnameChange = this.onChange.bind(this);
// // const {onFnameChange} = this.props;
// {onFnameChange = (e) => 
// {
//     this.setState({first_name: e.target.value});
// }
// const {onFnameChange} = this.props;
    
onFnameChange = (event) => {
    this.setState({ first_name: event.target.value })
}        

//         }
//     }
//var event = 1;
// this.handleChange = this.handleChange.bind(this);



  render()
  {
       const{ profiles} = this.props;
    //    const{ profiles} = this.props;
    //     const UpdateProfileFetch = this.state;
        
        // const profile_in_first_name =this.state ;
         const {profile_in_first_name,first_name, last_name, email, dob, mobileno, hobbies, image} = this.state;
        
         
        
        
        
            const { onSubmitUpdate } = this.props;


        console.log("this is update prof"+profile_in_first_name,first_name, last_name, email, dob, mobileno, hobbies, image)

       
         
        return (

            // cont{first_name} = this.state;


            <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">

                <main className="pa4 black-80">
                    {/* { this.state.profiles.map((profile) =>  */}
                        <form className="measure">
                            <fieldset className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">First Name </label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="first_name"
                                        id="first_name"

                                        maxLength="10"
                                        //placeholder={this.first_name}
                                        // first_name={profile.FIRST_NAME}

                                        value={first_name}
                                        onChange={this.onFnameChange}
                                        // onChange= {(event) => handleChange(event.target.value)}
                                    />

                                </div>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Last Name </label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="last_name"
                                        id="last_name"

                                        maxLength="10"
                                        placeholder="Enter Last Name"
                                        // value={profile.LAST_NAME}

                                        value={last_name}
                                    // onChange={this.onChange} 
                                    />

                                </div>



                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email">Email </label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="email"
                                        name="email"
                                        id="email"

                                        placeholder="Enter Email"
                                        // email={profile.EMAIL}

                                        value={email}
                                       // onChange={this.onEmailChange}
                                    />

                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="dob">dob </label>
                                    <input
                                        className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="dob"
                                        name="dob"
                                        id="dob"

                                        minLength="5" maxLength="20"
                                        placeholder="Enter date of birth"
                                        // dob={profile.DOB}

                                        value={dob}
                                    //  onChange={this.onChange} 
                                    />

                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="mobileno">Contact Number</label>
                                    <input
                                        className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="mobileno"
                                        name="mobileno"
                                        id="mobileno"

                                        minLength="5" maxLength="8"
                                        placeholder="Enter mobile number"

                                        // mobileno={profile.CONTACT_NO}

                                        value={mobileno}
                                    // value={mobileno}
                                    // onChange={this.onChange}
                                    />

                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="hobbies"> Hobbies </label>
                                    <input
                                        className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="hobbies"
                                        name="hobbies"
                                        id="hobbies"

                                        minLength="5" maxLength="8"
                                        placeholder="Intrested in"
                                        // hobbies={profile.HOBBIES}

                                        value={hobbies}
                                    // value={hobbies}
                                    // onChange={this.onChange} 
                                    />

                                </div>
                                <div>
                                    <img
                                        //image={profile.IMAGE.data}
                                        src={image}
                                        alt="" />
                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                <input type="file" name="file" />
                                    </div>
                                </div>



                                <div className="">
                                    <input
                                        onClick={() => onSubmitUpdate(first_name, last_name, email, dob, mobileno, hobbies, image)}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit"
                                        value="Update Profile"
                                    />
                                </div>

                            </fieldset>
                        </form>
                    {/* )} */}
                </main>
            </article>
        )
        // }
        
  //}
       // }
 


} 
} 

           
    


export default UpdateProfile;