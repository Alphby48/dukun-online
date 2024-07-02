export class DukunOnline {
  constructor() {
    this.formInput = document.querySelector(".form-input");
    this.selectInput = document.querySelector(".form-select");
    this.inputName = document.querySelector(".form-control");
    this.modalBody = document.querySelector(".modal-body");
    this.cekHasil = document.querySelector(".cek-hasil");
    //
  }

  cekOshi(math, filter, data, uiModal, result, filterData) {
    const rendem = math(60);
    const showdetail = filter(data, rendem);
    const uitampil = showdetail.map((dm) => uiModal(dm, this.inputName.value));
    const cek = showdetail.map((dm) => result(dm));

    filterData(showdetail, uitampil, cek);
  }

  cekKodam(math, filter, data, uiModal, result, filterData) {
    const angka = math(11);
    const showKodam = filter(data, angka);
    const uitampil = showKodam.map((dm) => uiModal(dm, this.inputName.value));
    const cek = showKodam.map((dm) => result(dm));

    filterData(showKodam, uitampil, cek);
  }

  cekAmbu(math, filter, data, uiModal, result, filterData) {
    const angka = math(13);
    const showAmbu = filter(data, angka);
    const uitampil = showAmbu.map((dm) => uiModal(dm, this.inputName.value));
    const cek = showAmbu.map((dm) => result(dm));

    filterData(showAmbu, uitampil, cek);
  }

  cekPakan(math, filter, data, uiModal, result, filterData) {
    const angka = math(8);
    const showPakan = filter(data, angka);
    const uitampil = showPakan.map((dm) => uiModal(dm, this.inputName.value));
    const cek = showPakan.map((dm) => result(dm));

    filterData(showPakan, uitampil, cek);
  }

  cekJomok(math, filter, data, uiModal, result, filterData) {
    const angka = math(8);
    const showJomok = filter(data, angka);
    const uitampil = showJomok.map((dm) => uiModal(dm, this.inputName.value));
    const cek = showJomok.map((dm) => result(dm));

    filterData(showJomok, uitampil, cek);
  }
}
