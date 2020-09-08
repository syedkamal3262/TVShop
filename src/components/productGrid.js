import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { navigate } from "gatsby";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: "100%",
    marginBottom:"1em",
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ProductGrid({product}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.image.fluid.src} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {product.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <b style={{display:!product.instock===true?"none":"block" ,color:"green"}}>In stock</b>
                <b style={{display:!product.instock===false?"none":"block" ,color:"red"}}>Out of Stock</b>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                sku# {product.sku}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button 
                  onClick={()=>navigate(`/products/${product.sku}`)}
                  variant="contained" color="primary">
                    More info
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"><b>£{product.priceNow}</b></Typography>
              <Typography variant="subtitle1"
                style={{display:product.pricewas==null?"none":"block" ,color:"green"}}
              ><s>£{product.pricewas}</s></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>

  );
}
