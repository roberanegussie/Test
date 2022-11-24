import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src="https://media-exp1.licdn.com/dms/image/C4E0BAQHurifakT9r2g/company-logo_200_200/0/1658769689927?e=2147483647&v=beta&t=zb-Tkcb83nWllnPe_sB5d6I_AECqvnMMuNQpyWuqzis"></img>
       Test
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Create Employee
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}