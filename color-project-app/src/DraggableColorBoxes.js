import { getThemeProps } from '@material-ui/styles';
import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        width: "25%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.2px"
    }
}

function DraggableColorBoxes(props){
    return (
  <div className={props.classes.root} style={{backgroundColor: props.color}}>{props.name}</div>
  )
}

export default withStyles(styles)(DraggableColorBoxes);