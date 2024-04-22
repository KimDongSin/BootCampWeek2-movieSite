const API_KEY = "api_key=1efe7e9dcfe999d6d25a99f91164d434";
const ORIGIN = "https://api.themoviedb.org";
const MOVIE_API = `${ORIGIN}/3/movie/popular?${API_KEY}&language=en-us&page=1`;

const movieUiWrap = document.querySelector(".movie__ui__box");
const searchInput = document.querySelector(".movie__search__input");
const searchBtn = document.getElementById("searchBtn");

document.addEventListener("DOMContentLoaded", function () {
  let searchFilterData = "";

  function initialize() {
    getData(MOVIE_API)
      .then((movieData) => {
        searchFilterData = movieData;
        addEl(movieData.results);
        console.log(movieData.results.map((v) => v.title.toUpperCase()));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  initialize();

  searchInput.addEventListener("keydown", function () {
    let searchInputVal = searchInput.value.toUpperCase();
    const newData = searchFilterData.results.filter((v) =>
      v.title.toUpperCase().includes(searchInputVal)
    );
    if (window.event.keyCode == 13) {
      movieUiWrap.innerHTML = "";

      addEl(newData);
    }
  });

  searchBtn.addEventListener("click", function () {
    let searchInputVal = searchInput.value.toUpperCase();
    const newData = searchFilterData.results.filter((v) =>
      v.title.toUpperCase().includes(searchInputVal)
    );

    movieUiWrap.innerHTML = "";

    addEl(newData);
  });
});

function addEl(...params) {
  const movieCardData = params[0];
  movieCardData.forEach((v) => {
    const tempEl = `
        <div class="movie__ui__card" data-movie-id=${v.id}>
          <img
            src=${"https://image.tmdb.org/t/p/original/" + v.backdrop_path}
            alt="영화이미지"
          />
    
          <div class="movie__ui__info">
            <p class="movie__title">${v.title}</p>
            <p>average: ${v.vote_average}</p>
            <p>${
              v.overview == ""
                ? `<span>There is no movie introduction.</span>`
                : v.overview
            }</p>
          </div>
        </div>
      `;

    movieUiWrap.insertAdjacentHTML("beforeend", tempEl);
  });

  const cardEl = document.querySelectorAll(".movie__ui__card");
  cardEl.forEach((v) => {
    v.addEventListener("click", function () {
      const movieId = v.dataset.movieId;
      alert(`영화ID: ${movieId}`);
    });
  });
}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}