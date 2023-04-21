/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/PostInfo.js":
/*!********************************!*\
  !*** ./js/modules/PostInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostInfo": () => (/* binding */ PostInfo)
/* harmony export */ });
function PostInfo(obj, selectorAfter) {
    //Создаем обложку
    const cardWrapper = `
                  <div class="card">

                  <h2 class="city">${obj.location.name}<span>${obj.location.country}</span></h2>
                  
                  <div class="status-weather">
                      <div class="temperature">${obj.current.temp_c.toFixed()}<sup>°c</sup></div>
                      <img class="weather-view" src="./images/test.png" alt="">
                  </div>
                  
                  <div class="state">${obj.current.condition.text}</div>
          
              </div>`;

    //Отображаем ее на экран (выводим)
    selectorAfter.insertAdjacentHTML("afterend", cardWrapper);
  }



/***/ }),

/***/ "./js/modules/deleteCard.js":
/*!**********************************!*\
  !*** ./js/modules/deleteCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCard": () => (/* binding */ deleteCard)
/* harmony export */ });
function deleteCard(selector) {
    const prevCard = document.querySelector(selector);
    if (prevCard) prevCard.remove()
  }


/***/ }),

/***/ "./js/modules/formSubmited.js":
/*!************************************!*\
  !*** ./js/modules/formSubmited.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSubmited": () => (/* binding */ formSubmited)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _deleteCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteCard */ "./js/modules/deleteCard.js");
/* harmony import */ var _PostInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostInfo */ "./js/modules/PostInfo.js");




function formSubmited(apiKey, formSelector, headerSelector) {
    const form = document.querySelector(formSelector),
      header = document.querySelector(headerSelector);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const city = Object.fromEntries(data.entries()).city

      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)(url)
        .then(data => {
          (0,_deleteCard__WEBPACK_IMPORTED_MODULE_1__.deleteCard)('.card');
          (0,_PostInfo__WEBPACK_IMPORTED_MODULE_2__.PostInfo)(data, header)
        });
    })
  }


/***/ }),

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
/* harmony import */ var _modules_deleteCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/deleteCard */ "./js/modules/deleteCard.js");

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
        //иключительно для этого проекта
        (0,_modules_deleteCard__WEBPACK_IMPORTED_MODULE_0__.deleteCard)('.card');
        const wrapper = `<div class="card">Something went wrong...</div>`;
        document.querySelector('.header').insertAdjacentHTML('afterend', wrapper);

        throw new Error(`Could not fetch status: ${res.status}`);
    }//если у нас "не успешно" тогда выбросит ошибку 

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
/* harmony import */ var _modules_formSubmited__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formSubmited */ "./js/modules/formSubmited.js");

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_formSubmited__WEBPACK_IMPORTED_MODULE_0__.formSubmited)('201d45b5535942a3bed125217232104', '.form', '.header');
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map