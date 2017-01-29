website1 = "https://api.douban.com/v2/movie/subject/25801066/comments" ;
console.log(website1);
var request = require('request');
request(website1, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var rerenewbody = JSON.parse(body);
    console.log(rerenewbody)

      }
    })
