document.addEventListener("DOMContentLoaded", function(){


  var githubElement = document.querySelector("[data-js='profile']");
  var githubCreatedElement = document.querySelector("[data-js='created']");
  var githubLoginElement = document.querySelector("[data-js='login']");
  var githubRepoElement = document.querySelector("[data-js='repo']");
  var githubFollowersElement = document.querySelector("[data-js='followers']");
  var githubFlollowingElement = document.querySelector("[data-js='following']");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/Luciogutz");
  xhr.addEventListener("load", function(e){


      var xhrData = this.response;

      var responseJSON = JSON.parse(xhrData);

      var login = "<h3>";
          login += responseJSON.login;
          login += "</h3>";
          githubLoginElement.innerHTML = login;

      var profilePic = "<h4> Write a bio: ";
          profilePic += responseJSON.bio;
          profilePic += "<h4>";
          githubElement.innerHTML = profilePic;

      var profileCreated = "<p> Joined ";
          profileCreated += responseJSON.created_at;
          profileCreated += "</p>";
          githubCreatedElement.innerHTML = profileCreated;

      var repo = "<p> Repositories ";
          repo += responseJSON.public_repos;
          repo += "</p>";
          githubRepoElement.innerHTML = repo;

      var followers = "<p> Followers ";
          followers += responseJSON.followers;
          followers += "</p>";
          githubFollowersElement.innerHTML = followers;

      var following = "<p> Following ";
          following += responseJSON.following;
          following += "</p>";
          githubFlollowingElement.innerHTML = following;

console.log(responseJSON);
      });
xhr.send();

});
