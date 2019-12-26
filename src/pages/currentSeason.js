import React from "react"
import Header from "../components/Header"
import CurrentSeasonShow from "../components/CurrentSeasonShow"
import Grid from "@material-ui/core/Grid"

var Airtable = require("airtable")
var base = new Airtable({ apiKey: "key8DQ02oD8Drghza" }).base(
  "appOiIAcxkueGFTrJ"
)

export default class CurrentSeason extends React.Component {
  constructor(props) {
    super(props)

    this.state = { shows: [] }
  }

  componentDidMount() {
    this.ShowData()
  }

  ShowData() {
    let currentComponent = this
    base("Shows")
      .select({
        maxRecords: 100, //If More than 100 this logic will need to get rewritten
        view: "Grid view",
      })
      .firstPage(function(err, records) {
        if (err) {
          console.error(err)
          return
        }
        records.forEach(function(record) {
          console.log("Retrieved", record.get("Name"))
        })
        currentComponent.setState({
          shows: records,
        })
      })
  }

  render() {
    return (
      <div>
        {console.log("here" + this.state.shows.length)}
        <Header />
        <div style={{ padding: 20, flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            style={{ justifyContent: "space-around" }}
          >
            {this.state.shows.map(show => (
              <Grid item xs={12} sm={6} md={4}>
                <CurrentSeasonShow
                  imageData={show.get("Photo")}
                  showName={show.get("Name")}
                  playwright={show.get("Playwright")}
                  director={show.get("Director")}
                  showDates={show.get("Show Dates")}
                  descriptionBlurb={show.get("Description Blurb")}
                  bptLink={show.get("Tickets Link")}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}
