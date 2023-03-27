import { Fragment } from "react";
import ContactForm from "../component/ContactForm";

export default function ContactUsPage(){
    return(
        <Fragment>
            <div class="cover-page">
                <div class="tit">
                    <h1>about us</h1>
                    <ul class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" class="active">About us</a></li>
                        
                    </ul>
                </div>
            </div>
            <ContactForm/>
        </Fragment>
    )
}