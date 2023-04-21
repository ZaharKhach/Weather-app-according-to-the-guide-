import { getResourse } from "./services/services";

window.addEventListener('DOMContentLoaded', () => {
  const apiKey = '201d45b5535942a3bed125217232104';
  /FORM/

  formSubmited();

  function formSubmited() {
    const form = document.querySelector('.form'),
      header = document.querySelector('.header');
      spinerImg = "images/form/spinner.svg";

    form.addEventListener('submit', (e) => {
      //Отключаем стандартное поведение 
      e.preventDefault();

      // let spiner = document.createElement('img');
      // spiner.src = spinerImg;
      // spiner.style.cssText = `
      //     display: blok;
      //     margin: 0 auto;
      // `;
      // console.log(spiner)
      // header.insertAdjacentElement("afterend", spiner);

      //Создаем обьект форм дата(руку набить) и присваиваем в сити название города
      const data = new FormData(form);
      const city = Object.fromEntries(data.entries()).city

      //Делаем ГЭТ запрос на севрер с этм городом и получаем данные 
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      getResourse(url)
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
          header.insertAdjacentHTML("afterend", cardWrapper);
        });

    })
  }

})