import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   fullname: "",
   dateOfBirth: "",
   gender: "",
   sex: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
 
   const newPerson = { ...form };
 
   await fetch("http://localhost:3001/api/post", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ fullname: "", dateOfBirth: "", gender: "", salary: ""});
   navigate("/");
 }
 
 return (
   <div>
     <h3>Create New Employee</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="fullname">Full Name</label>
         <input
           type="text"
           className="form-control"
           id="fullname"
           value={form.fullname}
           onChange={(e) => updateForm({ fullname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="dateOfBirth">Date Of Birth</label>
         <input
           type="text"
           className="form-control"
           id="dateOfBirth"
           value={form.dateOfBirth}
           onChange={(e) => updateForm({ dateOfBirth: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="gender"
             id="male"
             value="Male"
             checked={form.gender === "Male"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="male" className="form-check-label">Male</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="gender"
             id="female"
             value="Female"
             checked={form.gender === "Female"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="female" className="form-check-label">Female</label>
         </div>
         <div className="form-group">
         <label htmlFor="salary">Salary</label>
         <input
           type="text"
           className="form-control"
           id="salary"
           value={form.salary}
           onChange={(e) => updateForm({ salary: e.target.value })}
         />
       </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Employee"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}

 