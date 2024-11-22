import React from "react";
import contact from "../assets/contact.png"

function Contact(){
    return(<section id='contact'>
        <div className='upperdiv aboutdiv'>
                  <div className='upperheading about'><h1>Contact Resumify</h1><p>
                      <li>hello@reallygreatsite.com</li>
                      <li>(123) 456-7890</li>
                      <li>123 Anywhere St.</li>
                      <li>Any City ST 12345</li> 
                   </p></div>
                  <div className='buttoncreate aboutdivimg'><div className='img'> <img  src={contact} alt='logo'/></div></div>
                </div>
        </section>)
}
export default Contact;