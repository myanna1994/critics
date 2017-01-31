var argv = require('minimist')(process.argv.slice(2));
var r = argv.n ;
var request = require('request');
request('https://api.douban.com/v2/movie/in_theaters', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var newbody = JSON.parse(body);
    //console.log(newbody);
    for(var a = 0 ; a < newbody.total; a++  ){
      var t = 0;
      var x = 0;
      for( var i = 0 + a; i< newbody.total ; i++ ){
        var rating = newbody.subjects[i].rating.average;
        if (rating > t){
          t = rating;
          x = i;
        }
      }
      var temp = newbody.subjects[a]
      newbody.subjects[a] = newbody.subjects[x];
      newbody.subjects[x] = temp;
    }
    //console.log(newbody);
    for (var j = 0; j < r ; j++){
      var OriginalTitle = newbody.subjects[j].original_title;
      if (newbody.subjects[j].original_title != newbody.subjects[j].title){
        OriginalTitle = newbody.subjects[j].original_title;
      } else {

        OriginalTitle = " ";
      }
      console.log(j+1 +'.')
      console.log("片名：" + newbody.subjects[j].title + " "+OriginalTitle);
      console.log("导演：" + newbody.subjects[j].directors[0].name)
      console.log("评分: " + newbody.subjects[j].rating.average);
    }
  }
})
