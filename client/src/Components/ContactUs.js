import React from 'react';


const ContactUs = () => {
    return(
        
        <div class="mb-4">
        
            
            <legend class="font-weight-bold text-center my-4 dark green">Contact us</legend>
            <p class="text-center w-responsive mx-auto mb-5 dark green font-weight-bold">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
        
        
        
                        
        
                            <div class="col-md-6 center">
                                    <label for="name" class="db fw6 lh-copy f6 dark green font-weight-bold">Your name</label>
                                    <input type="text" id="name" name="name" class="form-control pa2 input-reset mh6 hover-black w-70"/>
                                    
                            </div>
        
                            <div class="col-md-6  center">
                                    
                                    <label for="email" class="db fw6 lh-copy f6 dark green font-weight-bold">Your email</label>
                                    <input type="email" id="email" name="email" class="form-control pa2 input-reset mh6 hover-black w-70 "/>
                            </div>
        
                        
        
                            <div class="col-md-6 center">
                                    
                                    <label for="subject" class="db fw6 lh-copy f6 dark green font-weight-bold">Subject</label>
                                    <input type="text" id="subject" name="subject" class="form-control pa2 input-reset mh6 hover-black w-70"/>
                            </div>
        
        
                            <div class="col-md-6 center ">
        
                                    
                                    <label for="message " className="db fw6 lh-copy f6 dark green font-weight-bold">Your message</label>
                                    <input type="text" id="message" name="message" rows="2" class="form-control mh6 md-textarea dark green pa2 input-reset hover-black w-70 pb5 "></input>
        
                            </div>
        
        
                    <div class="">
                        <a class="btn btn-primary ma2 input-reset " onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
        </div>
        
               
        
        
        
    
        
        
    )

}

export default ContactUs;