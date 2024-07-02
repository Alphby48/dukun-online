import { DukunOnline } from "./script/dukun.config.js";
import { filter } from "./script/filtering.js";
import { filterData } from "./script/filtering.js";
import { math } from "./script/filtering.js";
import { reset } from "./script/reset.js";
import { uiModal } from "./script/interface.js";
import { result } from "./script/interface.js";
//
import detail from "./script/data/member-detail.js";
import { kodam } from "./script/data/kodam.js";
import { pakan } from "./script/data/pakan.js";
import { ambu } from "./script/data/ambu.js";
import { ngawi } from "./script/data/ngawi.js";
export const dukunOnline = new DukunOnline();

dukunOnline.formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  if (dukunOnline.selectInput.value === "oshi") {
    dukunOnline.cekOshi(math, filter, detail, uiModal, result, filterData);
  } else if (dukunOnline.selectInput.value === "kodam") {
    dukunOnline.cekKodam(math, filter, kodam, uiModal, result, filterData);
  } else if (dukunOnline.selectInput.value === "pakan") {
    dukunOnline.cekPakan(math, filter, pakan, uiModal, result, filterData);
  } else if (dukunOnline.selectInput.value === "ambu") {
    dukunOnline.cekAmbu(math, filter, ambu, uiModal, result, filterData);
  } else if (dukunOnline.selectInput.value === "jomok kesukaan") {
    dukunOnline.cekJomok(math, filter, ngawi, uiModal, result, filterData);
  }

  reset();
});
