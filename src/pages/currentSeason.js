import React from "react"
import Header from "../components/Header"
import CurrentSeasonShow from "../components/CurrentSeasonShow"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    justifyContent: "space-around",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.root} style={{ padding: 20 }}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item md>
            <CurrentSeasonShow test="hi" />
          </Grid>
          <Grid item md>
            <CurrentSeasonShow test="pls" />
          </Grid>
          <Grid item md>
            <CurrentSeasonShow test="NA" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
