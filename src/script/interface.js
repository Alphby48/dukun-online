import { dukunOnline } from "../route.js";
export function uiModal(ui, inputName) {
  return `
      <div class="modal-box">
                  
                  <p>${dukunOnline.selectInput.value} ${inputName} adalah ${
    ui.name
  }</p>
                  <h2>${ui.name}</h2>
                  <img
                    src="${ui.image ? ui.image : ""}"
                    alt="${ui.image ? ui.image : ""}"
                  />
                  
                  <h3>${ui.fullName ? ui.fullName : ""}</h3>
                </div>
                `;
}

export function uikosong() {
  return `<div class="modal-box">
                  <h1>KOSONG</h1>
                </div>`;
}
export function result(r) {
  return `<h5>${dukunOnline.selectInput.value} ${dukunOnline.inputName.value} adalah ${r.name}</h5>`;
}
