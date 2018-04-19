var express = require('express');
var Parser = require('rss-parser');
var cheerio = require('cheerio')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  var parser = new Parser();
  var outputRss=[];
  parser.parseURL('https://medium.com/feed/novamining').then(function(feed){


  for(var i=0;i< 3; i++ )
  {
    item=feed.items[i];
    var $ = cheerio.load(item["content:encoded"])
    var p1= $( $('p')[0]).html()
    var p2= $( $('p')[1]).html()

    var itemRss={
      id:i,
      title:item.title,
      url:item.link,
      content:"<p>"+p1+"</p>"/*+"<p>"+p2+"</p>"*/
    }

    outputRss.push(itemRss);
  }
    res.render('index', { title: 'Express',"infoRss":outputRss });

  }
  ,function(){
    res.render('index', { title: 'Express',"infoRss":outputRss });
  }
)





});

router.get('/Auth', function(req, res, next) {


  var parser = new Parser();
  var outputRss=[];
  parser.parseURL('https://medium.com/feed/novamining').then(function(feed){


  for(var i=0;i< 3; i++ )
  {
    item=feed.items[i];
    var $ = cheerio.load(item["content:encoded"])
    var p1= $( $('p')[0]).html()
    var p2= $( $('p')[1]).html()

    var itemRss={
      id:i,
      title:item.title,
      url:item.link,
      content:"<p>"+p1+"</p>"/*+"<p>"+p2+"</p>"*/
    }

    outputRss.push(itemRss);
  }
    res.render('index', { title: 'Express',"infoRss":outputRss });

  }
  ,function(){
    res.render('index', { title: 'Express',"infoRss":outputRss });
  }
)





});


router.get('/api',  function(req, res, next) {
  res.send({
    message: 'dddss!'
  })
});

module.exports = router;
