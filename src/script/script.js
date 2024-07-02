import detail from "./data/member-detail.js";
import { kodam } from "./data/kodam.js";
import { pakan } from "./data/pakan.js";
import { ambu } from "./data/ambu.js";
import { ngawi } from "./data/ngawi.js";
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
  } else if (selectInput.value === "jomok kesukaan") {
    cekJomok();
  }

  reset();
});

function cekOshi() {
  const rendem = math(60);
  const showdetail = filter(detail, rendem);
  const uitampil = showdetail.map((dm) => uiModal(dm, inputName.value));
  const cek = showdetail.map((dm) => result(dm));

  filterData(showdetail, uitampil, cek);
}

function cekKodam() {
  const angka = math(11);
  const showKodam = filter(kodam, angka);
  const uitampil = showKodam.map((dm) => uiModal(dm, inputName.value));
  const cek = showKodam.map((dm) => result(dm));

  filterData(showKodam, uitampil, cek);
}

function cekAmbu() {
  const angka = math(13);
  const showAmbu = filter(ambu, angka);
  const uitampil = showAmbu.map((dm) => uiModal(dm, inputName.value));
  const cek = showAmbu.map((dm) => result(dm));

  filterData(showAmbu, uitampil, cek);
}

function cekPakan() {
  const angka = math(8);
  const showPakan = filter(pakan, angka);
  const uitampil = showPakan.map((dm) => uiModal(dm, inputName.value));
  const cek = showPakan.map((dm) => result(dm));

  filterData(showPakan, uitampil, cek);
}

function cekJomok() {
  const angka = math(8);
  const showJomok = filter(ngawi, angka);
  const uitampil = showJomok.map((dm) => uiModal(dm, inputName.value));
  const cek = showJomok.map((dm) => result(dm));

  filterData(showJomok, uitampil, cek);
}

function filter(data, r) {
  return data.filter((d) => d.id == r.toString());
}

function math(num) {
  return Math.floor(Math.random() * num) + 1;
}

function filterData(data, uitampil, cek) {
  if (!inputName.value.trim()) {
    alert(`masukkan nama yang benar`);
  } else if (!data.length == 0) {
    // console.log(rendem);
    console.log(inputName.value.length);
    modalBody.innerHTML = uitampil;
    cekHasil.innerHTML = cek;
  } else {
    modalBody.innerHTML = uikosong();
    cekHasil.innerHTML = `<h2>${inputName.value} kosong</h2>`;
  }
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
