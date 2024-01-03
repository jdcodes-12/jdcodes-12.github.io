import { resolve } from 'path';

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
        '@layouts': resolve(__dirname, 'src/layouts'),
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
