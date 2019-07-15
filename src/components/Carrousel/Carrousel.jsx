import React from 'react';
import { withStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Form from '../core/Form/Form';
import Heroe1 from '../../assets/Heroe1.jpg'
import Heroe2 from '../../assets/Heroe2.jpg'
import Heroe3 from '../../assets/Heroe3.jpg'
import Heroe4 from '../../assets/Heroe4.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images= ['Heroe1','Heroe2','Heroe3','Heroe4'];
const styles={
    imageContainer: {
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    Heroe1: {
        backgroundImage: `url(${Heroe1})`
    },
    Heroe2: {
        backgroundImage: `url(${Heroe2})`
    },
    Heroe3: {
        backgroundImage: `url(${Heroe3})`
    },
    Heroe4: {
        backgroundImage: `url(${Heroe4})`
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
                {images && images.map((image, index)=>{
                    return(
                        <div key={index} className={`${classes.imageContainer} ${classes[image]}`} />
                    )
                })}
            </AutoPlaySwipeableViews>
        </div>
    )};

export default withStyles(styles)(Carrousel);