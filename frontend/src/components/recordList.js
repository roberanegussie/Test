import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.employee.fullname}</td>
   <td>{props.employee.dateOfBirth}</td>
   <td>{props.employee.gender}</td>
   <td>{props.employee.salary}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.employee._id}`}>Edit </Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.employee._id);
       }}
     >
        Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3001/api/getAll`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 async function deleteRecord(id) {
   await fetch(`http://localhost:3001/api/delete/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 function recordList() {
   return records.map((employee) => {
     return (
       <Record
         employee={employee}
         deleteRecord={() => deleteRecord(employee._id)}
         key={employee._id}
       />
     );
   });
 }
 
 return (
   <div>
     <h3>Employee List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Full Name</th>
           <th>Date Of Birth</th>
           <th>Gender</th>
           <th>Salary</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}