const mainctn = document.querySelector("#main");
const input = document.querySelector("#input");

const form = document.querySelector("form");

const INITIAL_API = `https://api.tvmaze.com/search/shows?q=superman`;
const SEARCH_API = `https://api.tvmaze.com/search/shows?q=`;

const getTvShow = async (url) => {
  const initialShowDisplayData = await axios.get(url);
  console.log(initialShowDisplayData.data);
  makeShowCard(initialShowDisplayData.data);
};

const makeShowCard = async (arrayOfShows) => {
  mainctn.innerHTML = "";
  arrayOfShows.forEach((eachShow) => {
    const img = eachShow.show.image;
    const rating = eachShow.show.rating.average;
    const name = eachShow.show.name;
    const link = eachShow.show.officialSite;
    const div = document.createElement("div");
    console.log(link);
    if (img != null && rating != null && name != null) {
      div.classList.add("show");
      div.innerHTML = `
        <img src=${img.medium} />
        <div class="cardText">
        <h4>${name}</h4>
        <span>${rating}</span>
        </div>
        <div class="website">
        <h5>Watch the <a href="${link}">${name}</a></h5>
          
        </div>
      `;
      console.log("end here");
    } else {
      div.innerHTML = ``;
    }
    mainctn.append(div);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  getTvShow(SEARCH_API + searchTerm);
  input.value = "";
  input.autofocus = true;
});
