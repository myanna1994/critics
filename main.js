





var request = require('request');
request('https://api.douban.com/v2/movie/in_theaters', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var newbody = JSON.parse(body)
    var id0 = newbody.subjects[0].id;
    console.log(newbody.subjects[0].rating);
    var website0 = "https://api.douban.com/v2/movie/subject/" + id0;
    request(website0, function(error,response, body){
      if(!error && response.statusCode == 200){
        var tempbody = JSON.parse(body)
        var rating0 = tempbody.rating.average

      for(var i = 1; i < newbody.count ; i++){
        // console.log(newbody);
        var id = newbody.subjects[i].id;
        var website = "https://api.douban.com/v2/movie/subject/" + id;

        request(website, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var renewbody = JSON.parse(body);


            var rating1 = renewbody.rating.average;
            if (rating1 > rating0) {
              rating0 = rating1;
            }


          }
        });

        var body = request(website, foo);





        var body = request(website);
        var newbody = JSON.parse(body);

        var body = request(website);
        var newbody = JSON.parse(body);

        var body = request(website);
        var newbody = JSON.parse(body);

        var body = request(website);
        var newbody = JSON.parse(body);

      } // To get the score
console.log('最高分： ' + rating0)

}})

}
})

function foo(error, res, body) {
  var newbody = JSON.parse(body);
  var id0 = newbody.subjects[0].id;
  console.log(id0);
}
