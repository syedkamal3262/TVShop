import React from "react"
import Header from "./header"
import Footer from "./footer"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className="Layout"
        style={{ margin: "0px", backgroundColor: "#f5f6f7" }}
      >
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography component="div">
              <main>{children}</main>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
      <Footer />
    </>
  )
}
export default layout
