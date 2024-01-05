import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Johnny, an Ambitious Web Developer',
    siteUrl: 'https://jdcodes-12.github.io/',
    description: 'A minimalistic portfolio holding blog articles and various' +
    'projects worked on by Johnny Dickson (i.e. jdcodes-12 on Github). Come' +
    'take a look!'
  },
  // graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/content/blogs/`,
      },
      __key: 'blogs',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'documents',
        path: `${__dirname}/src/assets/documents/`,
      },
      __key: 'documents',
    },
  ],
};

export default config;
