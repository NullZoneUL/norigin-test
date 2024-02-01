const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const postCSS = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [["postcss-preset-env", {browsers: "last 4 versions, not dead, > 0.2%"}]]
    },
  },
}

const config = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true
  },
  target: ['web', 'es5'],
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "src/assets/images/favicon/favicon.ico"
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", postCSS,
          {
            loader: "sass-loader",
            options: { 
              implementation: require("sass"),
              sassOptions: {
                includePaths: [__dirname, path.resolve(__dirname, 'src/assets/styles'), path.resolve(__dirname, 'src/assets/fonts'), path.resolve(__dirname, 'src/assets/styles/abstract')],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", postCSS],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: "asset",
      },
      {
        test: /buildStrings.ts$/i,
        loader: 'string-replace-loader',
        options: {
          search: '___BACKEND___',
          replace:'http://localhost:9000/',
        }
      }
    ],
  },
  resolve: {
    alias: {
      root: __dirname,
      src: path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, 'src/assets/')
    },
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
