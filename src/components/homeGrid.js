 import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import GridList from '@material-ui/core/GridList';
  import GridListTile from '@material-ui/core/GridListTile';
import {Link} from 'gatsby'
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:"center",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: "auto",
    },
  }));
  
  const tileData = [
  "https://assets.products-live.ao.com/Images/688f4e77-dda2-47d8-9e7f-fe858b3de491/2000x680/ao_ppp_hero_image_samsung_ue55ru7300.gif",
  "https://www.lg.com/ca_en/lgoled/images/e9/1.jpg",
  "https://wallpapercave.com/wp/bzlZ7Wj.jpg"
];
  
  export default function ImageGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={190} className={classes.gridList} cols={1}>
          {tileData.map((tile) => (
            <GridListTile key={tile} cols={tile.cols || 1}>
              <img src={tile} alt={tile} />
            </GridListTile>
          ))}
          <Link to="/products">
          <h3 className="shop">Shop now</h3>
            </Link>
        </GridList>
      </div>
    );
  }
  
