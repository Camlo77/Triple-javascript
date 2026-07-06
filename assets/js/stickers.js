let cantdSticker1 = document.querySelector("#sticker1");
let cantdSticker2 = document.querySelector("#sticker2");
let cantdSticker3 = document.querySelector("#sticker3");
let cantdSticker4 = document.querySelector("#sticker4");
let cantdSticker5 = document.querySelector("#sticker5");
let cantdSticker6 = document.querySelector("#sticker6");
let cantdSticker7 = document.querySelector("#sticker7");
let cantdSticker8 = document.querySelector("#sticker8");
let cantdSticker9 = document.querySelector("#sticker9");
let cantdSticker10 = document.querySelector("#sticker10");
let btnTotalStickers = document.querySelector("#btn-total-stickers");
let total = document.querySelector("#spanpag2");
btnTotalStickers.addEventListener("click", function () {
  let cantdstck1 = Number(cantdSticker1.value);
  let cantdstck2 = Number(cantdSticker2.value);
  let cantdstck3 = Number(cantdSticker3.value);
  let cantdstck4 = Number(cantdSticker4.value);
  let cantdstck5 = Number(cantdSticker5.value);
  let cantdstck6 = Number(cantdSticker6.value);
  let cantdstck7 = Number(cantdSticker7.value);
  let cantdstck8 = Number(cantdSticker8.value);
  let cantdstck9 = Number(cantdSticker9.value);
  let cantdstck10 = Number(cantdSticker10.value);
  let suma =
    cantdstck1 +
    cantdstck2 +
    cantdstck3 +
    cantdstck4 +
    cantdstck5 +
    cantdstck6 +
    cantdstck7 +
    cantdstck8 +
    cantdstck9 +
    cantdstck10;
    if (suma <= 10) {
        total.innerHTML = ` ${suma}`;
        alert(` compraste ${suma} stickers`)
    } else {
        total.innerHTML = `error, llevas ${suma} stickers`;
        alert("por favor ingrese una cantidad de stickers menor a 10")
    }
});