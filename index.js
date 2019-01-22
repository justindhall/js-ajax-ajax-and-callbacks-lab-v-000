const url = "https://api.github.com";

function searchRepositories(){
  const searchTerms = $("#searchTerms").val();
  const searchUrl = `${url}/search/repositories?q=${searchTerms}`;

  $.get(searchUrl, data => displayRepositories(data)).fail(error => displayError());
}

function displayRepositories(results){
  const repos = results.items.map(result => {
    return `<div><a href="${result.html_url}">${result.name}</a>
    <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
    <p>${result.description}</p>
    </div>`
  });

  $("#results").html(repos);
}

function displayError(){
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}

function showCommits(){

}

$(document).ready(function (){
});
