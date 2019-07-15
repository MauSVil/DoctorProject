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
        gridColumnStart: 1,
        gridColumnEnd: 3,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 150px',
        lineHeight: '25px'
    }
}

const BoxInfo = (props) => {
    const {title, children, classes, inverted} = props;
    return (
        <div className={`${classes.boxInfoContainer} ${inverted && classes.boxInverted}`}>
            <div className={classes.infoTitle}>
                <h2>
                    {title}
                </h2>
            </div>
            <div className={classes.info}>
                {inverted ? children: title}
            </div>
            <div className={classes.info}>
            {inverted ? title: children}
            </div>
        </div>
    );
};

export default withStyles(styles)(BoxInfo);