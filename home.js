var request = require('request');
request('https://api.douban.com/v2/movie/in_theaters', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var newbody = JSON.parse(body)

      var OriginalTitle = newbody.subjects[0].original_title;
      if (newbody.subjects[0].original_title = newbody.subjects[0].title){
        OriginalTitle = " ";
      } else{
        OriginalTitle = newbody.subjects[0].original_title;
      }
      console.log("片名：" + newbody.subjects[0].title + OriginalTitle);
       var id = newbody.subjects[0].id;
       var website = "https://api.douban.com/v2/movie/subject/" + id;
       var alt = newbody.subjects[0].alt;
       // To get the title
       var request = require('request');
       request(website, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         var renewbody = JSON.parse(body);
         var directors = renewbody.directors[0].name;
         console.log("导演：" + directors);
         var rating0 = renewbody.rating.average;
         console.log("评分：" + rating0)
       }})  // To get the score

}
})
