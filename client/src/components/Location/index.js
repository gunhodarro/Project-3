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
        const style = {
          width: '100%',
          height: '30%',
      
        
        }

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
          </Map> :
          <></>
            }
            </div>
        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM"})(MapContainer)