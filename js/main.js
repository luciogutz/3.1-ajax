document.addEventListener("DOMContentLoaded", function(){


  var githubElement = document.querySelector("[data-js='profile']");


  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/Luciogutz");
  xhr.addEventListener("load", function(e){

      var xhrData = this.response;

      var responseJSON = JSON.parse(xhrData);

      var profilePic = "<img>";
          profilePic += responseJSON.;
          profilePic += "</img>";
          githubElement.innerHTML = profilePic;
console.log(responseJSON);

    });
xhr.send();

});
