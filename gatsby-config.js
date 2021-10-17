require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Kaushik Meesala - Portfolio`,
    // Default title of the page
    siteTitleAlt: `Kaushik Meesala - Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Portfolio - Kaushik`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://google.com`,
    // Used for SEO
    siteDescription: `Kaushik Meesala, Software Engineer`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@Kaushik`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        mdx: true,
        preset: "@theme-ui/preset-funk",
        prismPreset: "prism-okaidia",
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //           wrapperStyle:
    //             'border: 5px solid red; margin-right: 0!important; margin-right: 0!important;',
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `/`,
    //   },
    // },
  ].filter(Boolean),
  // flags: {
  //   LMDB_STORE: false,
  //   PARALLEL_SOURCING: false,
  //   FAST_DEV: false,
  //   DEV_SSR: false,
  // }
}
