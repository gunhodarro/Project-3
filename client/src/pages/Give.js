import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormContainer from "../components/containers/FormContainer";

function Give() {
  return (
    <>
      <NavBar />
      <Header />
      <h1>Give page</h1>
      <FormContainer />
      <Footer />
    </>
  );
}

export default Give;
