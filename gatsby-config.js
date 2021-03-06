module.exports = {
  siteMetadata: {
    title: 'Mark Mansfield',
    author: 'Mark Mansfield',
    description: 'Mark Mansfield - web developer portfolio',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/myreact-website',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/innovation.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
  pathPrefix: '/myreact-website',
}
