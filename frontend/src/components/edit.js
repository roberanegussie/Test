import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 export default function Edit() {
 const [form, setForm] = useState({
   fullname: "",
   dateOfBirth: "",
   gender: "",
   salary:"",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3001/api/getOne/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     fullname: form.fullname,
     dateOfBirth: form.dateOfBirth,
     gender: form.gender,
     salary: form.salary
   };
 
   await fetch(`http://localhost:3001/api/update/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 return (
   <div>
     <h3>Update Employee</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="fullname">Full Name: </label>
         <input
           type="text"
           className="form-control"
           id="fullname"
           value={form.fullname}
           onChange={(e) => updateForm({ fullname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="dateOfBirth">Date Of Birth: </label>
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
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Employee"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
