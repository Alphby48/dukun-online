import detail from "./member-detail.js";
import { kodam } from "./kodam.js";
import { pakan } from "./pakan.js";
import { ambu } from "./ambu.js";
const formInput = document.querySelector(".form-input");
const selectInput = document.querySelector(".form-select");
const inputName = document.querySelector(".form-control");
const modalBody = document.querySelector(".modal-body");
const cekHasil = document.querySelector(".cek-hasil");

formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  if (selectInput.value === "oshi") {
    cekOshi();
  } else if (selectInput.value === "kodam") {
    cekKodam();
  } else if (selectInput.value === "pakan") {
    cekPakan();
  } else if (selectInput.value === "ambu") {
    cekAmbu();
  }

  reset();
});

function cekOshi() {
  const rendem = math(60);
  const showdetail = filter(detail, rendem);
  const uitampil = showdetail.map((dm) => uiModal(dm, inputName.value));
  const cek = showdetail.map((dm) => result(dm));

  if (!showdetail.length == 0) {
    modalBody.innerHTML = uitampil;
    cekHasil.innerHTML = cek;
  } else {
    modalBody.innerHTML = uikosong();
    cekHasil.innerHTML = `<h2>${inputName.value} kosong</h2>`;
  }
}

function cekKodam() {
  const angka = math(11);
  const showKodam = filter(kodam, angka);
  const uitampil = showKodam.map((dm) => uiModal(dm, inputName.value));
  const cek = showKodam.map((dm) => result(dm));

  if (!showKodam.length == 0) {
    console.log(angka);
    modalBody.innerHTML = uitampil;
    cekHasil.innerHTML = cek;
  } else {
    modalBody.innerHTML = uikosong();
    cekHasil.innerHTML = `<h2>${inputName.value} kosong</h2>`;
  }
}

function cekAmbu() {
  const angka = math(13);
  const showAmbu = filter(ambu, angka);
  const uitampil = showAmbu.map((dm) => uiModal(dm, inputName.value));
  const cek = showAmbu.map((dm) => result(dm));

  if (!showAmbu.length == 0) {
    console.log(angka);
    modalBody.innerHTML = uitampil;
    cekHasil.innerHTML = cek;
  } else {
    modalBody.innerHTML = uikosong();
    cekHasil.innerHTML = `<h2>${inputName.value} kosong</h2>`;
  }
}

function cekPakan() {
  const angka = math(8);
  const showPakan = filter(pakan, angka);
  const uitampil = showPakan.map((dm) => uiModal(dm, inputName.value));
  const cek = showPakan.map((dm) => result(dm));

  if (!showPakan.length == 0) {
    console.log(angka);
    modalBody.innerHTML = uitampil;
    cekHasil.innerHTML = cek;
  } else {
    modalBody.innerHTML = uikosong();
    cekHasil.innerHTML = `<h2>${inputName.value} kosong</h2>`;
  }
}

function filter(data, r) {
  return data.filter((d) => d.id == r.toString());
}

function math(num) {
  return Math.floor(Math.random() * num) + 1;
}

function uiModal(ui, inputName) {
  return `
    <div class="modal-box">
                
                <p>${selectInput.value} ${inputName} adalah ${ui.name}</p>
                <h2>${ui.name}</h2>
                <img
                  src="${ui.image ? ui.image : ""}"
                  alt="${ui.image ? ui.image : ""}"
                />
                
                <h3>${ui.fullName ? ui.fullName : ""}</h3>
              </div>
              `;
}

function uikosong() {
  return `<div class="modal-box">
                <h1>KOSONG</h1>
              </div>`;
}

function reset() {
  // selectInput.value = "";
  // inputName.value = "";
}

function result(r) {
  return `<h5>${selectInput.value} ${inputName.value} adalah ${r.name}</h5>`;
}
