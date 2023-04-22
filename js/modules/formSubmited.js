import { getResourse } from "../services/services";
import deleteCard from "./deleteCard";
import PostInfo from "./PostInfo";
import conditions from "../../dic";

function formSubmited(apiKey, formSelector, headerSelector) {
    const form = document.querySelector(formSelector),
      header = document.querySelector(headerSelector);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const city = Object.fromEntries(data.entries()).city

      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      getResourse(url)
        .then(data => {
          console.log(data)
          deleteCard('.card');

          const info = conditions.find(element => element.code == data.current.condition.code);
          console.log(info)
          const filePath = '../images/' + (data.current.is_day ? 'day' : 'night') + '/';
          const fileName = info.icon + '.png';
          console.log(fileName);
              const imgPath = filePath + fileName;

          const weatherData = {
            name: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c.toFixed(),
            condition: data.current.is_day ? info.languages[23]['day_text'] : info.languages[23]['night_text'],
            imgSrc: imgPath
          }
          PostInfo(weatherData, header);

        });
    })
  }
export default formSubmited;