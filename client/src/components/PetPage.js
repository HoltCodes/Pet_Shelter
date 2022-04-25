import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PetPage = (props)=> {

  const { id } = useParams();
  const [ onePet, setOnePet ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/pets/${id}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setOnePet(res.data);
    })
    .catch((err) => console.log(err))
  }, [id])

  const deletePet = () => {
    axios.delete(`http://localhost:8000/api/pets/${id}`)
    .then((res) => {
      console.log(res.data);
      navigate("/")
    })
    .catch((err) => console.log(err))
  }

  return(
    <h2>Details about: { onePet.name } </h2>
  )






}

export default PetPage;

