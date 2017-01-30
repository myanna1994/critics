var request = require('request');
request('https://api.douban.com/v2/movie/in_theaters', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var newbody = JSON.parse(body)

    for(var i = 0; i < newbody.count ; i++){
      var id = newbody.subjects[i].id;
      console.log(id);
      var website = "https://api.douban.com/v2/movie/subject/" + id;
  }
}})
