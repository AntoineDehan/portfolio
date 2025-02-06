import fs from "fs";

async function fetchGithubRepos() {
  const response = await fetch(
    "https://api.github.com/users/AntoineDehan/repos"
  );
  const repos = await response.json();

  const projets = repos.map((repo) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description,
    url: repo.html_url,
    image: "/assets/github-placeholder.png",
  }));

  fs.writeFileSync("./src/data/projets.json", JSON.stringify(projets, null, 2));
  console.log("Update des projets effectuée");
}

fetchGithubRepos();
