function PostInfo({ name, country, temp, condition, imgSrc }, selectorAfter) {
  //Создаем обложку
  const cardWrapper = `
                  <div class="card">

                  <h2 class="city">${name}<span>${country}</span></h2>
                  
                  <div class="status-weather">
                      <div class="temperature">${temp}<sup>°c</sup></div>
                      <img class="weather-view" src="${imgSrc}" alt="">
                  </div>
                  
                  <div class="state">${condition}</div>
          
              </div>`;

  //Отображаем ее на экран (выводим)
  selectorAfter.insertAdjacentHTML("afterend", cardWrapper);
}

export default PostInfo;