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

function showCommits(el){
  const owner = el.dataset.owner;
  const repo = el.dataset.repository;
  const searchUrl = `${url}/repos/${owner}/${repo}/commits`;
  $.get(searchUrl, data => displayCommits(data)).fail(error => displayError());
}

function displayCommits(data){
  const commits = data.map(commit => `<li>${commit.sha}<p>${commit.commit.message}</p></li>)`.join("");
  const commitsString = `<ul>${commits}</ul>`;
  $("details").html(commitsString);
}

$(document).ready(function (){
});
