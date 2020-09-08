/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vo2yzjj9is1s`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `zQun8fY1iBaTpk-SSUOdZhHR3_50dq_LTZDxGwPYCFI`,
      },
    },
  ],
}
