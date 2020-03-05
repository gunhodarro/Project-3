import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormContainer from "../components/containers/FormContainer";

function Receive() {
  return (
    <>
      <NavBar />
      <Header />
      <h1>Receive Page</h1>
      <FormContainer />
      <Footer />
    </>
  );
}

export default Receive;
