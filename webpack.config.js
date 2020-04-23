const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TransferWebpackPlugin = require('transfer-webpack-plugin');



//遍历所有页面
function getView(globPath, flag) {
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;
    files.forEach(item => {
        entry = item;
        dirname = path.dirname(entry); //当前目录
        extname = path.extname(entry); //后缀
        basename = path.basename(entry, extname); //文件名
        pathname = path.join(dirname, basename); //文件路径
        if (extname === '.html') {
            entries[pathname] = './' + entry;
        } else if (extname === '.js') {
            entries[basename] = entry;
        }
    });
    return entries;
}

//多页面打包 配置
let plugins = [];
let pages = Object.keys(getView('./src/pages/**/*.html'));
pages.forEach(pathname => {

    //区分 苹果电脑 还是 window电脑
    let htmlname = '';
    if (pathname.indexOf("/") > 0) {
        htmlname = pathname.split('/');
        htmlname = htmlname[htmlname.length - 2] + "/" + htmlname[htmlname.length - 1];
    } else {
        htmlname = pathname.split('\\');
        htmlname = htmlname[htmlname.length - 2] + "\\" + htmlname[htmlname.length - 1];
    }

    let conf = {
        filename: `${htmlname}.html`,
        template: `./${pathname}.html`,
        hash: true,
        showErrors: true,
        inject: true,
        chunks: ['app'],
        minify: {
            // removeAttributeQuotes:true,
            // removeComments: true,
            // collapseWhitespace: true,
            // removeScriptTypeAttributes:true,
            // removeStyleLinkTypeAttributes:true,
            // collapseBooleanAttributes: true,
            // minifyJS:true,
            // minifyCSS:true,
        }
    }
    plugins.push(new HtmlWebpackPlugin(conf));
});

//webpack 配置
const config = {
    entry: { app: './src/index.js' },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        stats: "errors-only",
        host: 'localhost',
        port: '9000',
        inline: true,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader


        ]
    },
    plugins: [
        //清空 dist
        //new CleanWebpackPlugin(['dist']),

        //转移js
        new TransferWebpackPlugin([{
            from: 'js',
            to: 'js'
        }], path.resolve(__dirname, 'src')),

        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({　　
            filename: "style/BM.css",
            　　
            //chunkFilename: "[id].css"　　 
        }),


    ].concat(plugins)
}

module.exports = config;