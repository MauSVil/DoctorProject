import React, { Component } from 'react';
import GoogleMap from '../../components/GoogleMap'

class Location extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{height:'200px', width:'200px', position: 'relative'}}>
                <GoogleMap/>
            </div>
        );
    }
}
 
export default Location;