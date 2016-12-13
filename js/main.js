document.addEventListener("DOMContentLoaded", function(){


  var githubElement = document.querySelector("[data-js='profile']");
  var githubCreatedElement = document.querySelector("[data-js='created']");
  var githubLoginElement = document.querySelector("[data-js='login']");
  var githubOrganizationsElement = document.querySelector("[data-js='organizations']");


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

      var organizations = "<h3>";
          organizations += responseJSON.organizations_url;
          organizations += "</h3>";
          githubOrganizationsElements.innerHTML = organizations;


console.log(responseJSON);

    });
xhr.send();

});
