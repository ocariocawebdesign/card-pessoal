/**
 * Configure your Gatsby site with this file.
 * https://medium.com/@ocariocawebdesign/crie-um-template-starter-gatsby-6c99d2521e67
 //https://phoenixnap.com/kb/update-node-js-version
 https://unicorncoder.medium.com/live-reload-do-react-n%C3%A3o-funciona-e20c7b066348
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Site Gatsby O Carioca",
    siteUrl: "https://www.ocariocaweb.com",
    description: "Site de desenvolvimento Carioca Web",

    social: [
      {
        name: "github",
        url: "https://github.com/ocariocawebdesign",
      },
      {
        nome: "linkedin",
        url: "https://www.linkedin.com/in/ocariocawebdesign/",
      },
    ],
  },



  plugins: [
    `gatsby-plugin-react-helmet`,

    //`gatsby-plugin-preact`,

    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "O Carioca Web",
        short_name: "O Carioca Web",
        background_color: "#fff",
        theme_color: `#440055`,
        // Setting a color is optional.
        display: "standalone",
        icon: "src/img/monster.png",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    //-------------

    //-----------

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    //-----------

    //-----------


    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        //displayName: process.env.NODE_ENV == 'production' ? true : false,
      },
    },

    //-----------

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },

    //-----------

    //-----------

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },

    /*-----------------------------------*/

    /*-----------------------------*/

    `gatsby-plugin-offline`,
  ],
};
