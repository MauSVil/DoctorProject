import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const Listing = ({ places }) => {
  return(
  <div>{places && places.map(p => <Marker key={p.id} name={p.name} position={{ lat: 37.778519, lng: -122.40564 }}/>)}</div>
  )};

class Container extends Component {
  state = {
    places: []
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '200',
      type: ['food']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results });
    });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
        <Map
          // style={{height: '100%', width: '100%'}}
          google={this.props.google}
          onReady={this.onMapReady}
          visible={true}>
          <Listing places={this.state.places} />
          <Marker name="Soma" position={{ lat: 37.778519, lng: -122.40564 }} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_OgzEpqOgUD08IVL0-imbK16xp8wkmIg"
})(Container);
