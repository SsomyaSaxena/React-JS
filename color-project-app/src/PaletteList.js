import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  getToPalette(id){
    this.props.history.push(`/palette/${id}`);
  }
    render() {
        const { palettes, classes } = this.props;
        console.log(classes)
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h3>REACT COLOR APP</h3>
                        <Link to="/palette/new"><h4>Create New Palette</h4></Link>
                    </nav>
                    <Grid container spacing={2}>
                    {palettes.map(palette => (
                        <Grid className={classes.grid} item xl={4}>
                                <MiniPalette {...palette} handleClick={() => this.getToPalette(palette.id)} />
                        </Grid>
                        ))}
                    </Grid>
                    {/* <div className={classes.palettes}>
                        {palettes.map(palette => (
                                <MiniPalette {...palette} handleClick={() => this.getToPalette(palette.id)} />
                        ))}
                    </div> */}
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);