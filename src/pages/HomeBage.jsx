import { Fragment } from "react";
import thirdphoto from "../resources/img/3.jpg";
import firstphoto from "../resources/img/1.jpg";
import fifthphoto from "../resources/img/5.jpg";
import mainphoto from "../resources/img/main-cover.png";

import ContactForm from "../component/ContactForm";
export default function HomeBage () {
    return <Fragment>
        <div className="main-cover">
         <div className="overllay">
            <div className="Cover-content">
               <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
               <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               </p>
               <a href="">about us</a>
            </div>
         </div>
        </div>

        <section id="about">
         <div className="about flex main-container">
            <div className="item">
               <img src={thirdphoto} alt="" />
            </div>
            <div className="item pt-30">
               <span className="green u-text-sup">ABOUT US</span>
               <h2>
               Lorem ipsum dolor sit amet</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim .
               </p>
               <div>
                  <a href="" className="green-btn">Read More</a>
               </div>
            </div>
         </div>
        </section>

        <section id="project">
         <div className="text-center">
            <span className="green u-text-sup  ">Project</span>
            <h2>We Offer Quality Service For Your Business</h2>
         </div>
         <div className="flex project pt-30" >
            <div className="item">
               <div className="container">
                  <img src={fifthphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src={thirdphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src={mainphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex project" >
            <div className="item">
               <div className="container">
                  <img src={firstphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text"> title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src={fifthphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src={thirdphoto} alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
         </div>
        </section>

        <ContactForm/>

</Fragment>
}