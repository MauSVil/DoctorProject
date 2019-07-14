import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Carrousel from '../../components/Carrousel/Carrousel';

const styles={
    
}

class Home extends Component {
    state = {  }
    render() {
        const {classes}= this.props
        return (
            <div>
                <Carrousel/>
            </div>
         );
    }
}
 
export default withStyles(styles)(Home);