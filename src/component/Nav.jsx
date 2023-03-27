import { NavLink } from "react-router-dom";
import logo from "../resources/img/logo.png";
export default function Nav(){
    return (
        <nav>
                <ul className="topnav">
                <li><a href="#"><img src={logo}  height="50" /></a></li>
                <div className="right">
                        <li ><NavLink className={(props)=>(props.isActive ? "active" : "")} to="/home">Home</NavLink></li>
                        <li><NavLink className={(props)=>(props.isActive ? "active" : "")} to="/about">About</NavLink></li>
                        <li ><NavLink className={(props)=>(props.isActive ? "active" : "")} to="/project">project</NavLink></li>
                        <li ><NavLink className={(props)=>(props.isActive ? "active" : "")} to="/conactUs">Contact</NavLink></li>
                    </div>
                </ul>
        </nav>
      )
    
}