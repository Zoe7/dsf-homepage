module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "CMS",
        // This is field under which it's accessible
        fieldName: "cms",
        // Url to query from
        url:
          "https://api-euwest.graphcms.com/v1/cjryto5wd3lza01gtcfgarpde/master"
      }
    },
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`
      }
    }
  ]
};
