import React from 'react';
import { withStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MissingComponent from '../core/MissingComponent/MissingComponent';
import Form from '../core/Form/Form';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images= [1,2,3,4,5];
const styles={
    imageContainer: {
        height: '100vh',
    },
    carrouselContainer:{
        position: 'relative'
    },
    mainForm:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '100px',
        height: '100%',
        bottom: 0,
        top: 0,
        zIndex: 2,
    }

}

const Carrousel = (props) => {
    const {classes} = props;
    return (
        <div className={classes.carrouselContainer}>
            <div className={classes.mainForm}>
                <Form/>
            </div>
            <AutoPlaySwipeableViews interval={5000}>
                {images && images.map(image=>{
                    return(
                        <div className={classes.imageContainer}>
                            <MissingComponent missingString={'Missing Image'}/>
                        </div>
                    )
                })}
            </AutoPlaySwipeableViews>
        </div>
    )};

export default withStyles(styles)(Carrousel);