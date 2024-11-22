import React, { useState } from "react";
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import Form from "./Form";

function Home(){
    const [toform,getform]=useState(false);

// When create resume button is clicked it will send it to create resume form 
function createResume(){
 getform(true);
}


    return(<>
        { toform ?(<Form/>):(
            <>
    <section id='home'>
         <div className='home'>
        <div className='upperdiv'>
            <div className='upperheading'><h1>Build Your Perfect Resume – Fast, Professional, and Tailored Just for You</h1></div>
            <div className='buttoncreate' onClick={createResume}> <button>Create resume</button></div>
          </div>
         <div className='imagediv'>
             <div className='img'><img src={page1} alt='imgresume'/></div>
             <div className='img'><img src={page2} alt='imgresume'/></div>
             <div className='img'><img src={page3} alt='imgresume'/></div>
             <div className='img'><img src={page4} alt='imgresume'/></div>
         </div>
     </div>
     </section>
      <AboutandTemp/>
      <Premium/>
      <Contact/></>
    )}</>);
}
export default Home;