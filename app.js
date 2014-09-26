var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'jade');

var item = require('./item');

var router = express.Router();
router.get('/', function(req, res){
  res.render('index', { title: 'GTS Inventory'});
});

router.post('/item', function(req, res){
  item(req.body, function(stockItem) {
    res.render('item', { item: stockItem});
  });
});

app.use(express.static(__dirname + '/public'));
app.use('/', router);

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
