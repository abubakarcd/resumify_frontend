import React, { useState } from "react";
import page1 from "../assets/page1.png";
import logo from "../assets/logo.png";
import resume1 from "../assets/resume g2.png";
import resume2 from "../assets/resume g3.png";
import resume3 from "../assets/resume google 1.png";
import resume4 from "../assets/resumemine1.png";
import google from "../assets/google.webp";
import amazon from "../assets/amaz.png";
import fb from "../assets/fblogo.webp";
import netflix from "../assets/netflix.jpg";
import x from "../assets/x.png";
import youtube from "../assets/youtube.webp";
import Form from "./Form";
import Premium from './premium';
import Contact from './contact';
import MyNavbar from "./Navbar";

function Home(){
    const [toform,getform]=useState(false);

// When create resume button is clicked it will send it to create resume form 
function createResume(){
 getform(true);
}


    return(<>
        { toform ?(<Form/>):(
            <>
            <MyNavbar/>
    <section id='home'>
         <div className='home'>
        <div className='upperdiv'>
            <div className='upperheading homehead'><h1>Build Your Perfect Resume – Fast, Professional, and Tailored Just for You</h1>
            <p>Resumify is a streamlined, user-friendly platform designed to help individuals create professional and impactful resumes with ease. It combines intuitive design with powerful customization options, allowing users to build, save, and modify their resumes seamlessly.  </p></div>
            <div className='buttoncreate'> <button onClick={createResume}>Create resume</button></div>
          </div>
         <div className='imagedivhome'>
             <img src={page1} alt='imgresume'/>
         </div>
     </div>
     </section>
     <section id='about'>
    <div className='upperdiv aboutdiv'>
              <div className='upperheading about'><h1>About Resumify</h1><p>Resumify is a streamlined, user-friendly platform designed to help individuals create professional and impactful resumes with ease. It combines intuitive design with powerful customization options, allowing users to build, save, and modify their resumes seamlessly. Resumify is a streamlined, user-friendly platform designed to help individuals create professional and impactful resumes with ease. It combines intuitive design with powerful customization options, allowing users to build, save, and modify their resumes seamlessly. </p></div>
              <div className='buttoncreate aboutdivimg'><div className='img'> <img  src={logo} alt='logo'/></div></div>
            </div>
    </section>
    <div id='templates'>
           <div className='upperdiv templatesdiv'>
              <div className='upperheading templates'><h1>Templates</h1><p>Resumify is a streamlined, user-friendly platform designed to help individuals create professional and impactful resumes with ease. It combines intuitive design with powerful customization options, allowing users to build, save, and modify their resumes seamlessly. Resumify is a streamlined, user-friendly platform designed to help individuals create professional and impactful resumes with ease. It combines intuitive design with powerful customization options, allowing users to build, save, and modify their resumes seamlessly. </p></div>
              <div className='buttoncreate'> <button onClick={createResume}>Create resume</button></div>
            </div>
            <div className='imagediv resumediv'>
               <div className='img'><img src={resume1} alt='imgresume'/></div>
               <div className='img'><img src={resume2} alt='imgresume'/></div>
               <div className='img'><img src={resume3} alt='imgresume'/></div>
               <div className='img'><img src={resume4} alt='imgresume'/></div>
           </div>
    </div>
    <section id='service'>
       <div className='upperheading services'><h1>Services</h1><p>Resumify provides a comprehensive suite of tools to make resume creation easy and effective. 
       <li>Customizable Templates: Choose from a range of templates designed for different industries, with options to personalize colors, fonts, and layouts.</li>
       <li>Guided Resume Builder: Step-by-step guidance to help you fill in each section of your resume, ensuring all key details are covered.
       </li>
       <li>Save & Edit Anytime: Save your progress and return to make edits, updates, or adjustments as your career evolves.</li>
       <li>Tips & Best Practices: Access expert tips on crafting impactful resumes, with guidance on wording, format, and structuring for maximum impact.</li></p>
       </div>
    
        <div className='servicebtn'>
               <button >Resume</button>
               <button disabled >CV</button>
               <button disabled>Portfolio</button>
               <button disabled>Cover Letter</button>
               <button disabled>Recommendation letter</button>
               <button disabled>More</button>
         </div>
    </section>
    <div id='companies'>
       <div className='upperheading services company'><h1>Compnaies</h1><p>This section highlights the companies where our users' resumes have been selected, showcasing the diverse industries and leading organizations that recognize the quality of our platform. From startups to global enterprises, Resumify has helped job seekers make lasting impressions and secure opportunities at top companies worldwide.</p>
       </div>
    
        <div className=' companybtn'>
           <img src={google} alt='imgresume' className='google'/>
           <img src={fb} alt='imgresume'/>
           <img src={amazon} alt='imgresume'/>
           <img src={youtube} alt='imgresume'/>
           <img src={x} alt='imgresume'/>
           <img src={netflix} alt='imgresume'/>
         </div>
    </div>
    <Premium/>
    <Contact/>
    </>
    )}</>);
}
export default Home;