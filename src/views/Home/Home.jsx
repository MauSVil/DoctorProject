import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Carrousel from '../../components/Carrousel/Carrousel';
import BoxInfo from '../../components/BoxInfo/BoxInfo';

const styles={
    
}

class Home extends Component {
    render() {
        const {classes}= this.props
        return (
            <div>
                <Carrousel/>
                <BoxInfo title={'Quienes somos?'} titlePosition={'right'}>
                    <p>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit.
                        Voluptatum sequi corrupti eos
                        laudantium expedita, natus quia.
                        Quisquam voluptatem commodi veniam
                        provident officia, aliquid
                        doloribus voluptas, impedit ut 
                        voluptates incidunt odit?
                    </p>
                </BoxInfo>
            </div>
         );
    }
}
 
export default withStyles(styles)(Home);