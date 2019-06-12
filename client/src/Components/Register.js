import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            registers: []


        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password
            })
        })

            .then((response) => {
                response.json()
                if (response.status === 500)
                    alert("User already exists")
                else {
                    this.setState({ registers: response.registers }, console.log('success'))
                }
            })




    }


    render() {

        const registers = this.state;

        console.log(registers);


        return (
            <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">
                <main className="pa4 black-80">
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
                                    required
                                    maxLength="10"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />

                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    required
                                    maxLength="10"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />

                            </div>



                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />

                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password </label>
                                <input
                                    className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    minLength="5" maxLength="8"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />

                            </div>



                            <div className="">
                                <input
                                    onClick={this.onSubmit}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Register"
                                />
                            </div>

                        </fieldset>
                    </form>
                </main>
            </article>

        );
    }
}

export default Register;