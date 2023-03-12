// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.

// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    title: `WHC Website`,
    siteUrl: 'https://gatsby.whc',
    description: 'The best people ever!',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9pne38x9',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
};
