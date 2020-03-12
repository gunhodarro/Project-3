import React from 'react'
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from  "../components/Footer"
import Location from "../components/Location"
import {Row , Col} from "reactstrap"
import DonationCard from "../components/DonationCard"
import "../App.css"

function Donations() {
    return(
        <>
        <NavBar />
        <div className="mapp">
        <Location />
        </div>
         <Header />
         <h1>Donations</h1>

         <Row>
            <Col>
            <DonationCard />
            </Col>

            <Col>
            <DonationCard />
            </Col>
            
            <Col>
            <DonationCard />
            </Col>
         </Row>
      
         <Footer />
        
        </>
    )
    
}

export default Donations