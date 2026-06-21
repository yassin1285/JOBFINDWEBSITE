function searchJobs() {
  const query = document.getElementById("searchInput").value;
  if (query) {
    alert("Searching for jobs: " + query);
  } else {
    alert("Please enter a job title to search.");
  }
}

function goPage(page) {
  window.location.href = page;
}


function goApply(jobTitle) {
  // Redirect to application page with job title in query string
  window.location.href = "apply.html?job=" + encodeURIComponent(jobTitle);
}
