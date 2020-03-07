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


  




// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM")
// })(Map)