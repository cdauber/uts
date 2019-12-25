import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import clsx from "clsx"

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
      <CardMedia
        className={classes.media}
        image="https://img1.wsimg.com/isteam/ip/83e7a1d1-9f8c-4e97-a06b-a1255d0a53a9/fallnewworks-fb%20(1).jpg"
        title="Anon"
      />
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Burning Man {props.test}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by Gabriela Tedeschi <br />
          Directed by Carol Lee
        </Typography>
        <Typography className={classes.showTime} variant="h6">
          November 25th-27th
        </Typography>
      </CardContent>

      <CardActions
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Button variant="contained" href="#BPT Link">
          Buy Tickets
        </Button>

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
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            After a few successful dates, twenty-somethings Danny and Dalia see
            the potential for a lasting relationship. But on the soon-to-be
            couple’s fifth date, Danny decides that before things get serious,
            he needs to open up to Dalia about an idiosyncrasy of his: to cope
            with the death of his mother and other sources of anger in his life,
            Danny starts forest fires. As Danny and Dalia passionately debate
            anger management techniques and the ethics of burning down forests
            in the middle of the restaurant, Danny and their very irritated
            waitress act out memories from Danny’s path to arson in an attempt
            to persuade Dalia to give Danny a chance. Or at least refrain from
            calling the police.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
