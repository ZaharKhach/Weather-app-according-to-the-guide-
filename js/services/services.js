import  deleteCard  from "../modules/deleteCard";
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
        deleteCard('.card');
        const wrapper = `<div class="card">Что-то пошло не так...</div>`;
        document.querySelector('.header').insertAdjacentHTML('afterend', wrapper);

        throw new Error(`Could not fetch status: ${res.status}`);
    }//если у нас "не успешно" тогда выбросит ошибку 

    return await res.json();
}

export { postData };
export { getResourse };