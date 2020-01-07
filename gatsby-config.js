module.exports = {
  pathPrefix: "/uts",
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["400", "400i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: "key8DQ02oD8Drghza", // may instead specify via env, see below, TODO exposed
        tables: [
          {
            baseId: `appOiIAcxkueGFTrJ`, //Current Season
            tableName: `Shows`,
            tableView: "Grid view",
            //mapping: { Image: `fileNode` },
          },
          {
            baseId: `appjk9x7FFcrje6So`, // Board Members
            tableName: `Current Members`,
            tableView: "Grid view",
            //mapping: { Image: `fileNode` },
          },
        ],
      },
    },
  ],
}
