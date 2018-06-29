var express = require('express');
var Parser = require('rss-parser');
var cheerio = require('cheerio')
var router = express.Router();

var rss = () => {
  var parser = new Parser();
  var outputRss=[];
  parser.parseURL('https://medium.com/feed/novamining').then(function(feed){


    for(var i=0;i< 3; i++ )
    {
      item=feed.items[i];
      var $ = cheerio.load(item["content:encoded"])
      var p1= $( $('p')[0]).text()
      var p2= $( $('p')[1]).text()

      var splitLinks = item["content:encoded"].split('<img alt="" src=');
      var point = splitLinks[1].search(' />');
      var d = splitLinks[1].slice(0,point);
      var url_image = d.split('"')

      var itemRss={
        id:i,
        title:item.title,
        date:item.pubDate,
        url:item.link,
        url_image:url_image[1],
        content: p1 + p2
      }
      outputRss.push(itemRss);
    }
}

}
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NovaMining XNM'});
});

router.get('/documentation', function(req, res, next) {
      res.render('index', { title: 'NovaMining XNM documentation', "infoRss":outputRss });
});

router.get('/api',  function(req, res, next) {
  res.send({
    message: 'dddss!'
  })
});

module.exports = router;
