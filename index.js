let Math = prompt("Iltimos Summangizdi kriting ");

let x = 500; //Borish va kelish samaliyot bileti narxi $
let t = 11650.03; //  1 yevro so'm
let a = 250; //mexmonxona to'lovi uchun
let y = 120; //muzey va ko'ngil ochar joylar uchon yevro
let z = 10650.34; // 1$ so'm

let dollorKursi = ((x + a) * z);
let yevroKursi = (y * t);

let hisobot = (dollorKursi + yevroKursi)
let saytTitle = document.querySelector("#title")


if (Math >= hisobot) {
  saytTitle.textContent = "Достаточно денег "
  console.log("Достаточно денег")
} else if (Math < hisobot) {
  saytTitle.textContent = "Не достаточно денег  ."
  console.log(" Не достаточно денег ")
};