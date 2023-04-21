import { getResourse } from "./services/services";

window.addEventListener('DOMContentLoaded', () => {

  function deleteCard(selector) {
    const prevCard = document.querySelector(selector);
    if (prevCard) prevCard.remove()
  }

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

  formSubmited();

  function formSubmited() {
    const apiKey = '201d45b5535942a3bed125217232104';
    const form = document.querySelector('.form'),
      header = document.querySelector('.header');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const city = Object.fromEntries(data.entries()).city

      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      getResourse(url)
        .then(data => {
          deleteCard('.card');
          PostInfo(data, header)
        });
    })
  }

})
