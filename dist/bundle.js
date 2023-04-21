/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": () => (/* binding */ getResourse),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: data,
    });

    return await res.json();
}//функционал по общению с сервером выносим в отдельную фцию
//так как fetch это ассинхронный код то его ждать никто не будет и в таком случае
//возможно так что переменной res присвоится ничего так как
// сервер не успел ответить и из-за этого будет ошибка
//для этого мы использкуем async await 
//async мы ставим перед фцией и таким образом говорим джс что тут есть ассинхронный код
//await мы ставим там, где нужно ждать выполнения операции 
//также они всегда работают по парно. То есть два сразу


const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch status: ${res.status}`)
    }//ессли у нас "не успешно" тогда выбросит ошибку 

    return await res.json();
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./js/services/services.js");


window.addEventListener('DOMContentLoaded', () => {
  const apiKey = '201d45b5535942a3bed125217232104';
  /FORM/

  formSubmited();

  function formSubmited() {
    const form = document.querySelector('.form'),
      header = document.querySelector('.header'),
      spiner = 'images/form/spinner.svg'

    form.addEventListener('submit', (e) => {
      //Отключаем стандартное поведение 
      e.preventDefault();

      let spiner = document.createElement('img');
      spiner.src = spiner;
      spiner.style.cssText = `
          display: blok;
          margin: 0 auto;
      `;

      header.insertAdjacentElement("afterend", spiner);

      //Создаем обьект форм дата(руку набить) и присваиваем в сити название города
      const data = new FormData(form);
      const city = Object.fromEntries(data.entries()).city

      //Делаем ГЭТ запрос на севрер с этм городом и получаем данные 
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)(url)
        .then(data => {
          //Отображаем полученные данные на странице 

          //Создаем обложку
          const cardWrapper = `
                  <div class="card">

                  <h2 class="city">${data.location.name}<span>${data.location.country}</span></h2>
                  
                  <div class="status-weather">
                      <div class="temperature">${data.current.temp_c.toFixed()}<sup>°c</sup></div>
                      <img class="weather-view" src="./images/test.png" alt="">
                  </div>
                  
                  <div class="state">${data.current.condition.text}</div>
          
              </div>`;

          //Отображаем ее на экран (выводим)
          spiner.remove();
          header.insertAdjacentHTML("afterend", cardWrapper);
        });

    })
  }

})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map