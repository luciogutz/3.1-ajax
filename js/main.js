document.addEventListener("DOMContentLoaded", function(){


  var githubElement1 = document.querySelector("[data-js='github__article1']");
  var githubElement2 = document.querySelector("[data-js='github__article2']");
  var githubElement3 = document.querySelector("[data-js='github__article3']");
  var githubElement4 = document.querySelector("[data-js='github__article4']");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/luciogutz/repos");
  xhr.addEventListener("load", function(e){

      var xhrData = this.response;

      var responseJSON = JSON.parse(xhrData);
      // This section is article 1, will add 4 more
      var githubName = "<h2>";
          githubName += responseJSON[0].name;
          githubName += "</h2>";
          githubElement1.innerHTML += githubName;
      var githubLanguage = "<h3> Language: ";
          githubLanguage += responseJSON[0].language;
          githubLanguage += "</h3>";
          githubElement1.innerHTML += githubLanguage;
      var githubCreated = "<h3> Created Date: ";
          githubCreated += responseJSON[0].created_at;
          githubCreated += "</h3>";
          githubElement1.innerHTML += githubCreated;
      var githubPushed = "<h3> Pushed: ";
          githubPushed += responseJSON[0].pushed_at;
          githubPushed += "</h3>";
          githubElement1.innerHTML += githubPushed;
      var githubWatchers = "<h3> Watchers: ";
          githubWatchers += responseJSON[0].watchers;
          githubWatchers += "</h3>";
          githubElement1.innerHTML += githubWatchers;
      var githubPrivate = "<h3> Private: ";
          githubPrivate += responseJSON[0].private;
          githubPrivate += "</h3>";
          githubElement1.innerHTML += githubPrivate;

      // Start of Article 2

      var githubName = "<h2>";
          githubName += responseJSON[1].name;
          githubName += "</h2>";
          githubElement2.innerHTML += githubName;
      var githubLanguage = "<h3> Language: ";
          githubLanguage += responseJSON[1].language;
          githubLanguage += "</h3>";
          githubElement2.innerHTML += githubLanguage;
      var githubCreated = "<h3> Created Date: ";
          githubCreated += responseJSON[1].created_at;
          githubCreated += "</h3>";
          githubElement2.innerHTML += githubCreated;
      var githubPushed = "<h3> Pushed: ";
          githubPushed += responseJSON[1].pushed_at;
          githubPushed += "</h3>";
          githubElement2.innerHTML += githubPushed;
      var githubWatchers = "<h3> Watchers: ";
          githubWatchers += responseJSON[1].watchers;
          githubWatchers += "</h3>";
          githubElement2.innerHTML += githubWatchers;
      var githubPrivate = "<h3> Private: ";
          githubPrivate += responseJSON[1].private;
          githubPrivate += "</h3>";
          githubElement2.innerHTML += githubPrivate;
      

      // Start of Article 3
      var githubName = "<h2>";
          githubName += responseJSON[2].name;
          githubName += "</h2>";
          githubElement3.innerHTML += githubName;
      var githubLanguage = "<h3> Language: ";
          githubLanguage += responseJSON[2].language;
          githubLanguage += "</h3>";
          githubElement3.innerHTML += githubLanguage;
      var githubCreated = "<h3> Created Date: ";
          githubCreated += responseJSON[2].created_at;
          githubCreated += "</h3>";
          githubElement3.innerHTML += githubCreated;
      var githubPushed = "<h3> Pushed: ";
          githubPushed += responseJSON[2].pushed_at;
          githubPushed += "</h3>";
          githubElement3.innerHTML += githubPushed;
      var githubWatchers = "<h3> Watchers: ";
          githubWatchers += responseJSON[2].watchers;
          githubWatchers += "</h3>";
          githubElement3.innerHTML += githubWatchers;
      var githubPrivate = "<h3> Private: ";
          githubPrivate += responseJSON[2].private;
          githubPrivate += "</h3>";
          githubElement3.innerHTML += githubPrivate;

      // Start of article 4

      var githubName = "<h2>";
          githubName += responseJSON[3].name;
          githubName += "</h2>";
          githubElement4.innerHTML += githubName;
      var githubLanguage = "<h3> Language: ";
          githubLanguage += responseJSON[3].language;
          githubLanguage += "</h3>";
          githubElement4.innerHTML += githubLanguage;
      var githubCreated = "<h3> Created Date: ";
          githubCreated += responseJSON[3].created_at;
          githubCreated += "</h3>";
          githubElement4.innerHTML += githubCreated;
      var githubPushed = "<h3> Pushed: ";
          githubPushed += responseJSON[3].pushed_at;
          githubPushed += "</h3>";
          githubElement4.innerHTML += githubPushed;
      var githubWatchers = "<h3> Watchers: ";
          githubWatchers += responseJSON[3].watchers;
          githubWatchers += "</h3>";
          githubElement4.innerHTML += githubWatchers;
      var githubPrivate = "<h3> Private: ";
          githubPrivate += responseJSON[3].private;
          githubPrivate += "</h3>";
          githubElement4.innerHTML += githubPrivate;
          // console.log(responseJSON);

  });


xhr.send();

});
