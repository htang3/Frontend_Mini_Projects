const mainctn = document.querySelector("main");
const input = document.querySelector("#input");
const btn = document.querySelector("button");
const form = document.querySelector("form")

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = input.value;
  console.log("here");

  const data = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(data);
});
