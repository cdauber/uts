import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import clsx from "clsx"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    fontSize: 28,
  },
  showTime: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}))

export default props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card} variant="outlined">
      {props.imageData && <Img loading="eager" fluid={props.imageData} />}
      <CardContent>
        {props.showName && (
          <Typography className={classes.title} variant="h5">
            {props.showName}
          </Typography>
        )}
        {props.playwright && (
          <Typography className={classes.pos} color="textSecondary">
            by {props.playwright} <br />
            Directed by {props.director}
          </Typography>
        )}
        {props.showDates && (
          <Typography
            className={classes.showTime}
            variant="h6"
            style={{ whiteSpace: "pre-line" }}
          >
            {props.showDates}
          </Typography>
        )}
      </CardContent>

      <CardActions
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        {props.bptLink && (
          <Button variant="contained" href={props.bptLink} target="_blank">
            Buy Tickets
          </Button>
        )}
        {props.descriptionBlurb && (
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            edge={true}
          >
            <Typography variant="button">
              Read {expanded ? "less" : "more"}
            </Typography>
            <ExpandMoreIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            />
          </IconButton>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.descriptionBlurb}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
