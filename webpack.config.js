let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(path.resolve(__dirname,"dist"));
module.exports = {
    //文件入口
    entry:'./src/main.js',
    //文件出口
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,"dist")//path必须是绝对路径
    },
    module:{
        rules:[
            {test:/\.js$/, use:"babel-loader", exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},  //use如果有很多个，从右向左写
            {test:/\.(jpg|png|gif|jpeg)$/i,use:"url-loader"}
        ]
    },
    devtool:"source-map",  //可以映射出对应的源码位置
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
};

