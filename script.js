const banner = document.querySelector("#banner");
const banner_titel = document.querySelector("#banner_titel");
const banner_info = document.querySelector(".banner_info");
const banner_overview = document.querySelector(".banner_overview");
const row = document.querySelector(".row");
const row2 = document.querySelector(".row2");
const nav_bar = document.querySelector(".container");
const usier_container = document.querySelector(".usier_container");
const drop_down_arrow = document.querySelector("#drop_arrow");
const usier_img = document.querySelectorAll(".usier");
const current_usier = document.querySelector("#current_img");

const headrow = document.querySelector(".row_container");

// -----------nav_scroll-----------

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    nav_bar.style.backgroundColor = "transparent";
  } else {
    nav_bar.style.backgroundColor = "rgb(15, 15, 15)";
  }
});

// ------------API shorthand---------------

const api = "api_key=9f6fe37758837a628ba0ffe029ca6117";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// ------------------use trunate------------------
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "....." : str;
}

//  ---------------banner section-----------------
let banner_home = function () {
  fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
      const setmovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      banner.style.backgroundImage =
        "url(" + banner_url + setmovie.backdrop_path + ")";
      banner_titel.innerHTML = setmovie.name;
      banner_info.innerHTML = "Netflix Orignals | " + setmovie.first_air_date;
      banner_overview.innerHTML = truncate(setmovie.overview, 180);
    });
};
banner_home();

// --------------------------NETFLIX ORIGINALS---------------------------

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("afterbegin", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Netflix Originals";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.first_air_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------------------tranding---------------------------

fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Tranding";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------------------action---------------------------

fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Action";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------------------ComedyMovies---------------------------

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Comedy";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// -----------------HorrorMovies---------------------------

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Horror";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------------------RomanceMovies---------------------------

fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Romance";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------------------Documentaries---------------------------

fetch(requests.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    headrow.insertAdjacentElement("beforeend", row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Documenteries";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.classList = "row_poster_container";
    row.appendChild(row_poster);

    respon = "";
    for (movies of data.results) {
      respon += `
            <div class="poster">
                <img src="${
                  img_url + movies.poster_path
                }" class="poster_img" alt="">
                <p class="poster_date">${dayjs(movies.release_date).format(
                  "MMMM D, YYYY"
                )}</p>
            </div>`;
      row_poster.innerHTML = respon;
    }
  });

// --------------usier-image-changing--------------
let nav_list = document.querySelector(".nav_main");
let nav_opt1 = document.querySelector(".nav_option1");
let nav_opt2 = document.querySelector(".nav_option2");
let nav_opt3 = document.querySelector(".nav_option3");
let loader_container = document.querySelector(".pre_loader");
let pre_loader_user_img = document.querySelector(".loader_img");
nav_opt3.style.display = "none";

function visible() {
  nav_list.style.display = "flex";
  nav_opt1.style.display = "flex";
  nav_opt2.style.display = "flex";
  nav_opt3.style.display = "flex";
}

function hidden() {
  nav_list.style.display = "none";
  nav_opt1.style.display = "none";
  nav_opt2.style.display = "none";
}
hidden();

drop_down_arrow.addEventListener("click", function () {
  if (usier_container.style.display === "flex") {
    drop_down_arrow.innerHTML = "arrow_drop_down";
    usier_container.style.display = "none";
    window.scrollTo(0, 0);
    visible();
  } else {
    drop_down_arrow.innerHTML = "arrow_drop_up";
    usier_container.style.display = "flex";
    window.scrollTo(0, 0);
    hidden();
  }
});

usier_container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const imageUrl = e.target.src;

    if (imageUrl === current_usier.src) {
      drop_down_arrow.innerHTML = "arrow_drop_down";
      usier_container.style.display = "none";
    } else {
      current_usier.src = imageUrl;
      pre_loader_user_img.src = imageUrl;
      drop_down_arrow.innerHTML = "arrow_drop_down";
      usier_container.style.display = "none";
      window.scrollTo(0, 0);
      banner_home();

      loader_container.style.display = "flex";

      current_usier.addEventListener("load", () => {
        loader_container.style.display = "none";
      });
    }
    visible();
  }
});

// --------------my-list--------------

let mylist = document.querySelector("#banner_btn_list");
let add_btn = document.querySelector(".mylist");
mylist.addEventListener("click", function () {
  if (add_btn.innerHTML === "check") {
    console.log(add_btn.innerHTML);
    add_btn.innerHTML = "add";
  } else {
    add_btn.innerHTML = "check";
  }
});

// -----------password show-btn----------
function togglePasswordVisibility() {
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordToggle = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "visibility_off";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "visibility";
  }
}
