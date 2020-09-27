import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
import { useStateValue } from "../Context/StateProvider"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none",
    textAlign: "justify",
  },
}))

export default function ProductDetail({ data }) {
  const classes = useStyles()
  const [{ cart }, dispatch] = useStateValue()
  const addtoCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      item: data.sku,
    })
    console.log(cart)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.paper}>
            <Img
              style={{ width: "100%", height: "auto" }}
              fluid={data.image.fluid}
              alt={data.sku}
            />
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.paper}>
            <div>
              <h3>{data.title}</h3>
              <h3 style={{ display: data.pricewas == null ? "none" : "block" }}>
                <s>£{data.pricewas}</s>
              </h3>
              <h2>
                <b>£{data.priceNow}</b>
              </h2>
              <h3>
                <b
                  style={{
                    display: !data.instock === true ? "none" : "block",
                    color: "green",
                  }}
                >
                  In stock
                </b>
                <b
                  style={{
                    display: !data.instock === false ? "none" : "block",
                    color: "red",
                  }}
                >
                  Out of Stock
                </b>
              </h3>
            </div>
            <Button variant="contained" color="primary" onClick={addtoCart}>
              Add to Cart
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <table className="productSpecs">
              <thead>
                <tr>
                  <th>Product Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manufacturer Number </td>
                  <td>{data.sku}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>TVs</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Product Overview</h3>
            <p>{data.description.description}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
