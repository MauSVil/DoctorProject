import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles={
    boxInfoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '400px',
        textAlign: 'center',
    },
    infoTitle: {
        display: 'flex',
        color: 'black',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        justifyContent: 'start',
        alignItems: 'center',
    },
    right: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        lineHeight: '25px'
    }
}

const BoxInfo = (props) => {
    const {title, children, titlePosition, classes} = props;
    return (
        <div className={classes.boxInfoContainer}>
            <div className={`${classes.infoTitle} ${classes[titlePosition]}`}>
                {title}
            </div>
            <div className={classes.info}>
                {children}
            </div>
        </div>
    );
};

export default withStyles(styles)(BoxInfo);