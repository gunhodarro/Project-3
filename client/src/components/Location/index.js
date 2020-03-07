<<<<<<< HEAD
import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react'
 
 
export class MapContainer extends React.Component {
    state = {}

    componentDidMount() {
        console.log('mounted')
         if (window.navigator.geolocation) {
             console.log('setting coords')
             window.navigator.geolocation.getCurrentPosition(c => this.setState({x: c.coords.latitude, y: c.coords.longitude}))
            }
        }

    render() {

        const {x, y} = this.state

        return (
            <>
            {Object.keys(this.state).length !== 0 ?
         <Map
          google={this.props.google}
          initialCenter={{
            lat: x,
            lng: y
          }}
          zoom={8}
        >
          </Map> :
          <></>
            }
            </>
        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM"})(MapContainer)


// import React, {Component,componentDidMount, componentDidUpdate, prevProps, propTypes, prevState, recenterMap} from 'react';
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';
// import {Map, InfoWindow, Marker, google, mapCenter, GoogleApiWrapper} from 'google-maps-react';




// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//       x: '',
//       y: ''
//     };


//     componentDidMount() {
//       console.log('mounted')
      
//     if (window.navigator.geolocation) {
//       console.log('location!')
//       //get location update state
//       // window.navigator.geolocation.getCurrentPosition((c) => setCoords([c.coords.latitude, c.coords.longitude]))
//   }
// }
   
//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
   
//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };
   
//     render() {
//       return (
//         <Map google={this.props.google}
//             onClick={this.onMapClicked}
//             initialCenter={{
//               lat: 40.854885,
//               lng: -88.081807
//             }}>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
   
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow>
//         </Map>
//       )
//     }
//   }


=======
import React from "react";

function Location(){
    return (
$("#location-button").click(function(e) {
    e.preventDefault();
    console.log("it works");
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        $.get(
          "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBjYUEgKyxA_Nh3ulDtC3vl6dV7PbT_Xh8&latlng=" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "&sensor=false",
          function(data) {
            console.log(data);
          }
        );
  
        var img = new Image();
        img.src =
          "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBjYUEgKyxA_Nh3ulDtC3vl6dV7PbT_Xh8&center=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&zoom=13&size=800x400&sensor=false";
        $("#output").html(img);
      });
    else console.log("geolocation is not supported");
  })

  )}
>>>>>>> b9737c70326904f921f8b36b8dd8f977900f00c0
  




// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM")
// })(Map)