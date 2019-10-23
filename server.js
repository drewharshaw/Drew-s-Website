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

app.get('/images/smiles.jpeg', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'smiles.jpeg'));
})

app.get('/images/drone.jpg', (req, res)=>{
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'drone.jpg'));
});

app.get('/images/panda.jpg', (req, res)=> {
   res.sendFile(path.resolve(__dirname, 'public', 'images', 'panda.jpg'));
});

let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:{ colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));