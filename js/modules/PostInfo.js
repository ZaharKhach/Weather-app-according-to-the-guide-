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

export {PostInfo};