import React, { Component } from 'react';
// import event from React;

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            mobileno: '',
            hobbies: '',
            image: '',
            profiles_first: '',profiles_last: '',profiles_contactno: '',profiles_hobbies: '',profiles_email: ''
            
        }

        // this.onFirstnameChange = this.onFirstnameChange.bind(this)
    }

    onFirstnameChange = (event) => {
        this.setState({ first_name: event.target.value })
    }

    onLastNameChange = (event) => {
        this.setState({ last_name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onContactNumberChange = (event) => {
        this.setState({ mobileno: event.target.value })
    }
    onHobbiesChange = (event) => {
        this.setState({ hobbies: event.target.value })
    }


    render() {


        const {  first_name, last_name, email, mobileno, hobbies, image} = this.state;

          


         const { profiles_first, profiles_last, profiles_email, profiles_contactno, profiles_hobbies } = this.props;
        this.first_name = profiles_first
        this.last_name = profiles_last
        this.email = profiles_email
        this.mobileno = profiles_contactno
        this.hobbies = profiles_hobbies


        // console.log("FIRRSSTT"+profiles.first)
        const { onSubmitUpdate } = this.props;


     console.log("this is update prof" + profiles_first, profiles_last, profiles_email, profiles_contactno, profiles_hobbies)

        return (

            <article className="br3 ph4 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 center">

                <div>

                    <legend className="f3 fw6 ph0 mh0">Update your profile</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" 
                            name="firstname" id="firstname"
                            //  placeholder={profiles_first}
                             value={profiles_first}
                            // value={this.profiles_first}
                                //    value={this.state.first_name}
                                     onChange={this.onFirstnameChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text"
                            name="lastname" id="lastname"
                            //   placeholder={profiles_last}
                            //  value={this.last_name}
                                  value={profiles_last}
                                 onChange={this.onLastNameChange}

                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" 
                            name="email" id="email" required
                            placeholder={profiles_email}
                            // value={profiles_first}
                                 value={this.state.email}
                                //  value={first_name}
                                    onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="mobileno">Mobile No.</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" 
                            name="mobileno" id="mobileno" required
                            placeholder={profiles_contactno}
                            // value={profiles_first}
                            value={this.state.mobileno}
                                //  value={first_name}
                                    onChange={this.onContactNumberChange}
                        />
                    </div>
                  
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="mobileno">Hobbies</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                            type="text" 
                            name="hobbies" id="hobbies" required
                            placeholder={profiles_hobbies}
                            value={this.state.hobbies}
                                    onChange={this.onHobbiesChange}
                        />
                    </div>
                    
                    
                   

                    <div className="">


                        <input

                            onClick={() => onSubmitUpdate(profiles_first, profiles_last, email, mobileno, hobbies, image)}

                            className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Update Profile"
                        />


                    </div>


                </div>

            </article>



        );

        // return (




        //     <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">

        //         <main className="pa4 black-80">

        //             <form className="measure">
        //                 <fieldset className="ba b--transparent ph0 mh0">
        //                     <legend className="f1 fw6 ph0 mh0">UpdateProfile</legend>

        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter First Name"
        //                             name="first_name"
        //                             id="first_name"
        //                             value={profiles_first}
        //                             //    value={first_name}
        //                             onChange={this.onFirstnameChange}
        //                         />
        //                     </div>









        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter Last Name"
        //                             name="last_name"
        //                             id="last_name"
        //                             value={last_name}
        //                             onChange={this.onLastNameChange}
        //                         />
        //                     </div>



        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="email">Email </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter Email"
        //                             name="email"
        //                             id="email"
        //                             //value={profiles.EMAIL}
        //                             onChange={this.onEmailChange}
        //                         />
        //                     </div>


        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="dob">Date of Birth </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter Date of Birth"
        //                             name="dob"
        //                             id="dob"

        //                             //value={profiles.DOB}
        //                             onChange={this.ondobChange}
        //                         />
        //                     </div>



        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="contactno">Contact Number </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter Contact Number"
        //                             name="contactno"
        //                             id="contactno"

        //                             onChange={this.onContactNumberChange}

        //                         // value={profiles.CONTACT_NO}

        //                         />
        //                     </div>


        //                     <div className="mt3">
        //                         <label className="db fw6 lh-copy f6" htmlFor="hobbies">Hobbies </label>
        //                         <input
        //                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
        //                             type="text" placeholder="Enter Hobbies"
        //                             name="hobbies"
        //                             id="hobbies"


        //                             onChange={this.onHobbiesChange}
        //                         //value={profiles.HOBBIES}

        //                         />
        //                     </div>



        //                     {/* <div>
        //                         <img

        //                             src={image}
        //                             alt="" />
        //                         <div class="file btn btn-lg btn-primary">
        //                             Change Photo
        //                         <input type="file" name="file" />
        //                         </div>
        //                     </div> */}

        //                     <div className="">


        //                         <input

        //                             onClick={() =>onSubmitUpdate(first_name, last_name, email, dob, mobileno, hobbies, image)}

        //                             className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        //                             type="submit"
        //                             value="Update Profile"
        //                         />


        //                     </div>

        //                 </fieldset>
        //             </form>

        //         </main>
        //     </article>
        // )



    }
}





export default UpdateProfile;