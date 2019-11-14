const path = require('path'),
express = require('express'),
webpack = require('webpack'),
webpackConfig = require('./webpack.config.js'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port, () => { 
   console.log(`App is listening on port ${port}`) });

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.get('/images/auto_car.jpg', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'auto_car.jpg'));
});

app.get('/images/leapMotion.png', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'leapMotion.png'));
});

app.get('/images/lokit.jpg', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'lokit.jpg'));
});

app.get('/images/unavailable-image.jpg', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'unavailable-image.jpg'));
});


app.get('/images/profile.png', (req, res)=> {
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'profile.png'));
});


app.get('/images/favicon.ico', (req, res)=> {
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'favicon.ico'));
});



let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:{ colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));