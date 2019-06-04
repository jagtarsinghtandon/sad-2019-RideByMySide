import React from 'react';


const ContactUs = () => {
    return(
        
        <div className="mb-4">
        
            
            <legend className="font-weight-bold text-center my-4 dark green">Contact us</legend>
            <p className="text-center w-responsive mx-auto mb-5 dark green font-weight-bold">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
        
        
        
                        
        
                            <div className="col-md-6 center">
                                    <label htmlFor="name" className="db fw6 lh-copy f6 dark green font-weight-bold">Your name</label>
                                    <input type="text" id="name" name="name" className="form-control pa2 input-reset mh6 hover-black w-70"/>
                                    
                            </div>
        
                            <div className="col-md-6  center">
                                    
                                    <label htmlFor="email" className="db fw6 lh-copy f6 dark green font-weight-bold">Your email</label>
                                    <input type="email" id="email" name="email" className="form-control pa2 input-reset mh6 hover-black w-70 "/>
                            </div>
        
                        
        
                            <div className="col-md-6 center">
                                    
                                    <label htmlFor="subject" className="db fw6 lh-copy f6 dark green font-weight-bold">Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control pa2 input-reset mh6 hover-black w-70"/>
                            </div>
        
        
                            <div className="col-md-6 center ">
        
                                    
                                    <label htmlFor="message " className="db fw6 lh-copy f6 dark green font-weight-bold">Your message</label>
                                    <input type="text" id="message" name="message" rows="2" className="form-control mh6 md-textarea dark green pa2 input-reset hover-black w-70 pb5 "></input>
        
                            </div>
        
        
                    <div className="">
                        <input 
                        className="btn btn-primary ma2 input-reset " 
                        onClick={"document.getElementById('contact-form').submit()"}
                        value="Send"
                        />
                    </div>
        </div>
        
               
        
        
        
    
        
        
    )

}

export default ContactUs;