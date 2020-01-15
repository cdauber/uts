import React from "react"
import Header from "../components/Header"
import CurrentSeasonShow from "../components/CurrentSeasonShow"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql, Link } from "gatsby"

const CurrentSeason = () => {
  // Need to add check to ensure data is there.
  const data = useStaticQuery(graphql`
    query MyQuery {
      showData: allAirtable(filter: { table: { eq: "Shows" } }) {
        edges {
          node {
            data {
              Director
              Name
              Description_Blurb
              Playwright
              Show_Dates
              Tickets_Link
              Last_Show_Date
              Photo {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      defaultImages: allAirtable(filter: { table: { eq: "Defaults" } }) {
        edges {
          node {
            data {
              Image {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Header />
      {console.log(JSON.stringify(data))}
      <div style={{ padding: 20, flexGrow: 1 }}>
        <Grid container spacing={3} style={{ justifyContent: "space-around" }}>
          {data.showData.edges.map(o => {
            const { Name, Playwright, Director, Photo } = o.node.data
            return (
              <Grid item xs={12} sm={6} md={4}>
                <CurrentSeasonShow
                  imageData={Photo}
                  showName={Name}
                  playwright={Playwright}
                  director={Director}
                  showDates="testShowDates"
                  descriptionBlurb="testDescBlurb"
                  bptLink="testBptLink"
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default CurrentSeason
