var request = require('request');
request('https://api.douban.com/v2/movie/in_theaters', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var newbody = JSON.parse(body);
    console.log(newbody) // Show the HTML for the Google homepage.
    var OriginalTitle = newbody.subjects[0].original_title;
    if (newbody.subjects[0].original_title = newbody.subjects[0].title){
      OriginalTitle = " ";
    } else{
      OriginalTitle = newbody.subjects[0].original_title;
    }
    console.log("片名：" + newbody.subjects[0].title + OriginalTitle);
    var id = newbody.subjects[0].id;
    var website = "https://api.douban.com/v2/movie/subject/" + id;
    console.log(website);
    var alt = newbody.subjects[0].alt;
  }
})
