import {React} from 'react';
import {withStyles} from'@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props)
{
    const { classes , paletteName , emoji, colors } = props;
    const miniColorBoxes = colors.map(color => (
      <div className={classes.miniColor} style={{backgroundColor : color.color}} key={color.name} />
    ));
    //name = props.name NOW and similarly
    return (
     <div className={classes.root} onClick={props.handleClick}>
         <div className={classes.colors}>{miniColorBoxes}</div>
         <div className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></div>
     </div>
 );
}

export default withStyles(styles)(MiniPalette);