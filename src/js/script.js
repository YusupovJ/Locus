/*Проверка на поддержку браузера формата webp*/
import { isWebP } from "./modules/isWebP.js";
import scrollTo from "./modules/scrollTo.js";

isWebP();
scrollTo();

/*==============================================================================================*/

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

if (burger && menu) {
	burger.addEventListener("click", (e) => {
		e.preventDefault();
		menu.classList.toggle("open");
		document.body.classList.toggle("lock");
	});
}
