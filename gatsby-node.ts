import { resolve } from 'path';

// Configure webpack imports
export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@ui': resolve(__dirname, 'src/ui/components'),
        '@styles': resolve(__dirname, 'src/ui/styles'),
        '@variants': resolve(__dirname, 'src/ui/styles/variants'),
        '@primitives': resolve(__dirname, 'src/ui/primitives'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@sections': resolve(__dirname, 'src/sections'),
        '@layouts': resolve(__dirname, 'src/ui/layouts'),
        '@config': resolve(__dirname, 'src/config'),
        '@types': resolve(__dirname, 'src/lib/types'),
        '@utils': resolve(__dirname, 'src/lib/utils'),
        '@hooks': resolve(__dirname, 'src/lib/hooks'),
        '@queries': resolve(__dirname, 'src/lib/queries'),
        '@images': resolve(__dirname, 'src/assets/images'),
        '@blogs': resolve(__dirname, 'src/assets/blogs'),
      },
    },
  });
};

// Fetch blogs from GraphQL, then render pages programatically
// All of this happens at BUILD time (i.e. gatsby build CLI command)
export const createPages = async function (
  { actions, graphql, reporter }: 
  { actions: any, graphql: any, reporter: any }
) {
  
  const { panicOnBuild } = reporter;
  const { createPage } = actions;

  const templatePath = 
    resolve(`${__dirname}/src/templates/blog-post.template.tsx`);

  const { errors, data } = await graphql(`
    query {
      files: allMarkdownRemark {
        blogs: edges {
          info: node {
            meta: frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    panicOnBuild('Error loading Markdown posts', errors);
    return;
  }

  data.files.blogs.forEach((blog: any) => {
    const { slug } = blog.info.meta;
    createPage({
      path: slug,
      component: templatePath,
      context: { slug: slug }
    });
  });
};

// Report status info on post build
export const onPostBuild = ({ reporter }: any) => {
  reporter.info('All markdown pages built successfully!')
}