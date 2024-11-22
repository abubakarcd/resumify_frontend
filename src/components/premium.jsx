import React, { useState } from "react";

//Payment and premium details
function Premium(){
    const [display,setdisplay]=useState(false);

    //when clicked make the payment details inputs visible and allow the user to enter the payment.
    function topayment(){
          setdisplay(true);
         

    }

    //when clicked the user payment details will be sent for payment verification and the div is then disappeared
    function paymentsubmission(){
           setdisplay(false);
    }




    return( <section id='premium'>
   
        <div className='upperdiv aboutdiv premiummain'>
                  <div className='upperheading about premium' ><h1>Get Resumify Premium at 50 %
                  Discount</h1><h2>Start your Journey with us at 7.99$.</h2></div>
                  <div className='buttoncreate aboutdivimg premiumboxmain'><div className='img premiumbox'><h3>Premium</h3><p>
                  <li>Complex Resume & CV Templates</li>
                  <li>Portfolio Builder</li>
                  <li>Cover Letter Creator</li>
                  <li>Skills & Achievements Insights</li>
                  <li>Unlimited Edits & Downloads</li></p>
                  <button onClick={topayment}>Pay Now 7.99$</button></div></div>
                  </div>
                  
                <div className=' paymentmain' id='paymentmain' style={{ display: display ? 'block' : 'none' }} ><div className='payment'><h1>Payment Details</h1>
                   <label for="cardNumber" className='cardNumber' >Card Number:</label>
                   <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
    
                   <label for="cardName">Name on Card:</label>
                   <input type="text" id="cardName" name="cardName" placeholder="John Doe" required />
    
                    <label for="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
    
                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" placeholder="123" maxlength="4" required />
    
                    <button onClick={paymentsubmission} >Submit Payment</button>
                </div>
                
              </div>         
                  
        </section>)
}
export default Premium;