const API_KEY = "1efe7e9dcfe999d6d25a99f91164d434";
const ORIGIN = "https://api.themoviedb.org";
const MOVIE_API = `${ORIGIN}/3/movie/popular?api_key=${API_KEY}&language=en-us&page=1`;

const movieUiWrap = document.querySelector(".movie__ui__box");
const searchInput = document.querySelector(".movie__search__input");
const searchBtn = document.getElementById("searchBtn");
const min = new Date();

document.addEventListener("DOMContentLoaded", function () {
  let searchFilterData = "";

  function initialize() {
    searchInput.focus();

    getData(MOVIE_API)
      .then((movieData) => {
        if (!localStorage.getItem("Date")) {
          localStorage.setItem("API_DATA", JSON.stringify(movieData));
          localStorage.setItem(
            "Date",
            JSON.stringify(min.setMinutes(min.getMinutes() + 5))
          );
        }

        if (localStorage.getItem("Date")) {
          console.log(123);
        }
        searchFilterData = movieData;
        addEl(movieData.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  initialize();

  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      searchBtn.click();
    }
  });

  searchBtn.addEventListener("click", function () {
    let searchInputVal = searchInput.value.toUpperCase();

    const newMovies = filteringMovies(searchInputVal);
    movieUiWrap.innerHTML = "";

    addEl(newMovies);
  });

  const filteringMovies = (keyword) =>
    searchFilterData.results.filter((v) =>
      v.title.toUpperCase().includes(keyword)
    );
});

function addEl(...params) {
  const movieCardData = params[0];

  if (movieCardData.length === 0) {
    movieUiWrap.innerHTML = `<p class="search__notfound">검색 결과가 없습니다.</p>`;
    return;
  }

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
