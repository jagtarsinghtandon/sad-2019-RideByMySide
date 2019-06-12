import React from 'react';





const MyProfile = ({ email, first_name, last_name, person_id }) => {
    global.id = person_id
    global.first_name = first_name
    return (




        <article className="br3 ba bg-white b--black-10 mv4 w-0 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Profile</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">First Name </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                type="text"
                                name="first_name"
                                id="first_name"
                                required
                                maxLength="10"
                                placeholder=" First Name"
                                value={first_name}
                            />

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
                                placeholder=" Last Name"
                                value={last_name}

                            />

                        </div>



                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder=" Email"
                                value={email}
                            />

                        </div>

                        <div className="pt3">

                            <input
                                //onClick={() => onRouteChange('EditProfile')}
                                className="btn ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib"
                                type="submit"
                                value="Edit Profile"
                            />

                        </div>




                    </fieldset>
                </form>
            </main>
        </article>



    );
}


export default MyProfile;