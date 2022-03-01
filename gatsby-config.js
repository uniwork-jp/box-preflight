/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/

 "gatsby-plugin-sitemap",
 {
   resolve: "gatsby-plugin-canonical-urls",
   options: {
     siteUrl: "https:",
   },
 },


 */

module.exports = {
  siteMetadata: {
    title: "box press release",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-DPY97X1NVL"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
