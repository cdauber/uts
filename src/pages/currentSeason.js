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
      defaultImages: allAirtable(
        filter: {
          table: { eq: "Default Images" }
          data: { Name: { eq: "Default Show Scroll" } }
        }
      ) {
        edges {
          node {
            data {
              Name
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
      <div style={{ padding: 20, flexGrow: 1 }}>
        <Grid container spacing={3} style={{ justifyContent: "space-around" }}>
          {data.showData.edges.map(o => {
            const currentShowData = o.node.data
            return (
              <Grid item xs={12} sm={6} md={4}>
                {console.log(JSON.stringify(data.defaultImages.edges[0].node))}

                <CurrentSeasonShow
                  imageData={
                    currentShowData.Photo
                      ? currentShowData.Photo.localFiles[0].childImageSharp
                          .fluid
                      : data.defaultImages.edges[0].node.data.Image
                          .localFiles[0].childImageSharp.fluid
                  }
                  showName={currentShowData.Name}
                  playwright={currentShowData.Playwright}
                  director={currentShowData.Director}
                  showDates={currentShowData.Show_Dates}
                  descriptionBlurb={currentShowData.Description_Blurb}
                  bptLink={currentShowData.Tickets_Link}
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
