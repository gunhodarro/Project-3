import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import React from 'react'
 

export class MapContainer extends React.Component {
  state = {
 
  };

    componentDidMount() {
        console.log('mounted')
         if (window.navigator.geolocation) {
             console.log('setting coords')
             window.navigator.geolocation.getCurrentPosition(c => this.setState({x: c.coords.latitude, y: c.coords.longitude}))
            }
        }

        onMarkerClick = (arg1, arg2, arg3, arg4) => {
          console.log("complete");
          this.setState({
            activeMarker: arg2,
            selectedPlace: arg1,
            showingInfo: true
          })
        }

        onClicky = (arg1, arg2) => {
          console.log(arg1);
          console.log(arg2);
        }

        onInfoClose = () => {
          this.setState({
            activeMarker: null,
      
            showingInfo: false
          })
        }

    render() {

        const {x, y} = this.state
        const style = {
          width: '100%',
          height: '30%',
      }
      const pos1 = {lat: 39.685280, lng: -105.016040}
      const pos2 = {lat: 39.8582746, lng:-104.9572632}
      const pos3 = {lat: 39.6919655, lng:-104.9418203}
      const pos4 = {lat: 39.7811828, lng:-104.8485205}

        return (
            <div>
              
      
            {Object.keys(this.state).length !== 0 ?
         <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: x,
            lng: y
          }}
          zoom={10}
        >
         
          <Marker name={"Community Ministry"} key={1} position={pos1} onClick={this.onMarkerClick}/>
          <Marker name={"Thorton Community Food Bank"} key={2} position={pos2} onClick={this.onMarkerClick} />
          <Marker name={"Hunger Free Colorado"} key={3} position={pos3} onClick={this.onMarkerClick} />
          <Marker name={"Montbello Cooperative Ministries"} key={4} position={pos4} onClick={this.onMarkerClick} />
            
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoClose}
            visible={this.state.showingInfo}>
              <div>
                <h1>{this.state.selectedPlace && this.state.selectedPlace.name && this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
          
          </Map> :
          <></>
            }
            </div>
        )
    }
    
}

export default GoogleApiWrapper({apiKey: "AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM"})(MapContainer)