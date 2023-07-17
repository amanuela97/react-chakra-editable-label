import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import WebpackNotifierPlugin from 'webpack-notifier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BUILD_DIR = resolve(__dirname, 'dist');
const APP_DIR = resolve(__dirname, 'src');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: [APP_DIR + '/index.tsx'],
  output: {
    path: BUILD_DIR,
    filename: 'react-chakra-editable-label.js',
    library: {
      name: 'react-chakra-editable-label',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: APP_DIR,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@root': APP_DIR,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    chakra: '@chakra-ui/react',
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      skipFirstNotification: true,
    }),
  ],
};

export default config;
