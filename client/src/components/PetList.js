import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const PetList = (props) => {

  const [ pets, setPets ] = useState([]);
 

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/pets")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setPets(res.data);
    })
    .catch((err) => {
      console.log(err.res);
    });
  }, [])

  return(
    <div className="container">
      <Link to={`/add`}>Add a pet to the shelter</Link>
      <h3>These pets are looking for a good home</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
          {pets.map((pet, index) => {
            return(
              <tr key={pet._id}>
                <td>{ pet.name}</td>
                <td>{ pet.type}</td>
                <td>
                  <Link to={`/pets/${pet.id}`}>Details</Link> | <Link to={`/pets/edit/${pet.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};


export default PetList;