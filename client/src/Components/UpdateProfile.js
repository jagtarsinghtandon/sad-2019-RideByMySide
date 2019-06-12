import React, { Component } from 'react';

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            dob: '',
            mobileno: '',
            hobbies: '',
            image: ''
        }
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
    ondobChange = (event) => {
        this.setState({ dob: event.target.value })
    }
    onContactNumberChange = (event) => {
        this.setState({ mobileno: event.target.value })
    }
    onHobbiesChange = (event) => {
        this.setState({ hobbies: event.target.value })
    }


    render() {


        const { first_name, last_name, email, dob, mobileno, hobbies, image } = this.state;




        const { profiles } = this.props;

        const { onSubmitUpdate } = this.props;


        console.log("this is update prof" + first_name, last_name, email, dob, mobileno, hobbies, image)



        return (




            <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">

                <main className="pa4 black-80">

                    <form className="measure">
                        <fieldset className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">UpdateProfile</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter First Name"
                                    name="first_name"
                                    id="first_name"
                                    value={profiles.FIRST_NAME}
                                    onChange={this.onFirstnameChange}
                                />
                            </div>




                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter Last Name"
                                    name="last_name"
                                    id="last_name"
                                    value={profiles.LAST_NAME}
                                    onChange={this.onLastNameChange}
                                />
                            </div>



                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter Email"
                                    name="email"
                                    id="email"
                                    value={profiles.EMAIL}
                                    onChange={this.onEmailChange}
                                />
                            </div>


                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="dob">Date of Birth </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter Date of Birth"
                                    name="dob"
                                    id="dob"

                                    value={profiles.DOB}
                                    onChange={this.ondobChange}
                                />
                            </div>



                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="contactno">Contact Number </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter Contact Number"
                                    name="contactno"
                                    id="contactno"

                                    onChange={this.onContactNumberChange}

                                    value={profiles.CONTACT_NO}

                                />
                            </div>


                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="hobbies">Hobbies </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text" placeholder="Enter Hobbies"
                                    name="hobbies"
                                    id="hobbies"


                                    onChange={this.onHobbiesChange}
                                    value={profiles.HOBBIES}

                                />
                            </div>



                            <div>
                                <img

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

                                    className="b ma3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Update Profile"
                                />

                            </div>

                        </fieldset>
                    </form>

                </main>
            </article>
        )



    }
}





export default UpdateProfile;