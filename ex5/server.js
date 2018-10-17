var express = require('express');
var app = express();
var path =  require('path');

var webpackDevMiddleware =  require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    state:{
        colors:true
    },
    lazy: true//클라이언트에서 요청이 들어갈때 그 때 번들링을 함
}));

const port = 3000;

app.use(express.static(__dirname)); //초기화 설정 작업

//view engine setup
//__dirname: root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.send('index');
});

app.listen(port);
console.log("Server running on port ", port)