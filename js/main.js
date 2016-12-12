document.addEventListener("DOMContentLoaded", function(){


  var githubElement = document.querySelector("[data-js='github']");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/luciogutz/repos");
  xhr.addEventListener("load", function(e){

      var xhrData = this.response;

      var JSONData = JSON.parse(xhrData);

      var searchArray = JSONData.commits;
        // console.log(JSONData);
  });


xhr.send();

});
