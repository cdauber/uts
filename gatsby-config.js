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
  ],
}
