const mainctn = document.querySelector("div");
const input = document.querySelector("#input");

const form = document.querySelector("form");

const INITIAL_API = `https://api.tvmaze.com/search/shows?q=superman`;
const SEARCH_API = `https://api.tvmaze.com/search/shows?q=`;

const getTvShow = async (url) => {
  const initialShowDisplayData = await axios.get(url);
  console.log(initialShowDisplayData.data);
  await makeShowCard(initialShowDisplayData.data);
};
getTvShow(INITIAL_API);
const makeShowCard = (arrayOfShows) => {``
  mainctn.innerHTML = "";
  arrayOfShows.forEach((eachShow) => {
    const img = eachShow.show.image;
    const rating = eachShow.show.rating.average;
    const name = eachShow.show.name;
    if (img && rating && name) {
      console.log("here");
      mainctn.innerHTML = `
      <div>
        <img src=${img.medium} />
        <div>
        <h4>${name}</h4>
        <span>${rating}</span>
        </div>
      </div>
      
      `;
    }

  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  getTvShow(SEARCH_API + `${searchTerm}`);
  searchTerm.value = "";
});
