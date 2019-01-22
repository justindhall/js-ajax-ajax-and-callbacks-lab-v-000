const url = "https://api.github.com";

function searchRepositories(){
  const searchTarget = $("#seachBox").value;
  const searchUrl = `${url}/search/repositories?q=${searchTarget}`;

  $.get(searchUrl, data => displayRepositories(data)).fail(error => displayError());
}

$(document).ready(function (){
});
