import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
const styles = {
    missingComponentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ff000052',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& h3': {
            margin: '0'
        }
    }
};

class MissingComponent extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <div className={classes.missingComponentContainer}>
                <h3>Missing Component</h3>
            </div>
         );
    }
}
 
export default withStyles(styles)(MissingComponent);