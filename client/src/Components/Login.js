import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      logins: []

    }
    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)

  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  OnPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }


  // onChange (e) {
  //     this.setState({ [e.target.name]: e.target.value })
  // }

  //   onSubmit (event) {
  //       event.preventDefault();
  //       fetch('http://localhost:9000/login', {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({
  //           email: this.state.email,
  //           password: this.state.password
  //       })
  //     })



  //   .then((response) => {
  //     response.json()
  //     if(response.status === 500)
  //     alert("invalid email or password")
  //     else
  //     {
  //         this.setState({ logins: response.logins},console.log('success'))
  //         alert('Successfully logged in')
  //             this.props.onRouteChange('Profile')
  //     }
  // })

  //   }



  render() {

    const { email, password } = this.state;
    const { onRouteChange } = this.props;
    const { onSubmit } = this.props;

    const logins = this.state;
    console.log(logins);

    return (
      <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 mr3 push">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Login</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  pattern="[^]+@[^]+[.][a-z]{2,63}$"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password(max. 8 characters)"
                  required
                  minLength="5" maxLength="8"
                  value={this.state.password}
                  onChange={this.OnPasswordChange}
                />
              </div>



            </fieldset>

            <div className="">
              <input
                // onClick={this.onSubmit}
                onClick={() => onSubmit(email, password)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>

            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>

    )
  }
}

export default Login