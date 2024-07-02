import { dukunOnline } from "../route.js";
import { uikosong } from "./interface.js";
export function filter(data, r) {
  return data.filter((d) => d.id == r.toString());
}

export function math(num) {
  return Math.floor(Math.random() * num) + 1;
}

export function filterData(data, uitampil, cek) {
  if (!dukunOnline.inputName.value.trim()) {
    alert(`masukkan nama yang benar`);
  } else if (!data.length == 0) {
    // console.log(rendem);
    console.log(dukunOnline.inputName.value.length);
    dukunOnline.modalBody.innerHTML = uitampil;
    dukunOnline.cekHasil.innerHTML = cek;
  } else {
    dukunOnline.modalBody.innerHTML = uikosong();
    dukunOnline.cekHasil.innerHTML = `<h2>${dukunOnline.inputName.value} kosong</h2>`;
  }
}
