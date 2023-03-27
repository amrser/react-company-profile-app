import { Fragment } from "react";
import firstphoto from "../resources/img/1.jpg";
import secondphoto from "../resources/img/2.jpg";
import therdphoto from "../resources/img/3.jpg";
import mainphoto from "../resources/img/main-cover.png";
import fifthphoto from "../resources/img/5.jpg"

export default function ProjectPage (){
   return(<Fragment>
    <div class="cover-page">
            <div class="tit">
                <h1>Project</h1>
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="active">project</a></li>
                    
                </ul>
            </div>

    </div>
    <section id="project">
     
     <div class="flex project pt-30">
        <div class="item">
           <div class="container">
              <img src={secondphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={therdphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
     </div>
     <div class="flex project pt-30">
        <div class="item">
           <div class="container">
              <img src={secondphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={therdphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
     </div><div class="flex project pt-30">
        <div class="item">
           <div class="container">
              <img src={secondphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={therdphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
     </div><div class="flex project pt-30">
        <div class="item">
           <div class="container">
              <img src={secondphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={therdphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
     </div><div class="flex project">
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text"> title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={mainphoto} alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
        <div class="item">
           <div class="container">
              <img src={therdphoto}alt="Avatar" class="image"/>
              <div class="overlay">
                 <div class="text">project title can be here</div>
              </div>
           </div>
        </div>
     </div>
  </section>

</Fragment>
) 
   
   
}