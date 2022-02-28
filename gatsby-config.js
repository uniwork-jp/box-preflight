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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
