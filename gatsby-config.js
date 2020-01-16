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
    `gatsby-plugin-react-helmet`,
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
            tableView: "All",
            mapping: { Photo: `fileNode` },
          },
          {
            baseId: `appjk9x7FFcrje6So`, // Board Members
            tableName: `Current Members`,
            mapping: { ProfilePic: `fileNode` },
          },
          {
            baseId: `apphiOwmTobf2ahep`, // Default Images
            tableName: `Default Images`,
            mapping: { Image: `fileNode` },
          },
        ],
      },
    },
  ],
}
