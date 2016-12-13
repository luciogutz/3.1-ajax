document.addEventListener("DOMContentLoaded", function(){


  var githubElement = document.querySelector("[data-js='profile']");


  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/Luciogutz");
  xhr.addEventListener("load", function(e){

      var xhrData = this.response;

      var responseJSON = JSON.parse(xhrData);

      var profilePic = "<h4> Write a bio: ";
          profilePic += responseJSON.bio;
          profilePic += "<h4>";
          githubElement.innerHTML = profilePic;

console.log(responseJSON);

    });
xhr.send();

});
