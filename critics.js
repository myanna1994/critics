var argv = require('minimist')(process.argv.slice(2));
var r = argv.n ;
//console.log(argv);
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
    if (r <= newbody.total && r > 0){
      for (var j = 0; j < r; j++){
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
    } else if (r >newbody.total){
      for(var d = 0; d < newbody.total; d++){
        var OriginalTitle = newbody.subjects[d].original_title;
        if (newbody.subjects[d].original_title != newbody.subjects[d].title){
          OriginalTitle = newbody.subjects[d].original_title;
        } else {

          OriginalTitle = " ";
        }
        console.log(d+1 +'.')
        console.log("片名：" + newbody.subjects[d].title + " "+OriginalTitle);
        console.log("导演：" + newbody.subjects[d].directors[0].name)
        console.log("评分: " + newbody.subjects[d].rating.average);
      }
    }else{
      console.log("你输入的数量不对哦，请重新输入。")
    }
  }
})
