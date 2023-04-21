import { getResourse } from "../services/services";
import { deleteCard }  from "./deleteCard";
import { PostInfo } from "./PostInfo";

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
          deleteCard('.card');
          PostInfo(data, header)
        });
    })
  }
export {formSubmited}