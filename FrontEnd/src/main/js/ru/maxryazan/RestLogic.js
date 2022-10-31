const shops__list = document.querySelector('.shops__list');
let arr = []


fetch('http://localhost:8080/flowers/api/v1/flower_shops', {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((shops) => printShops(shops));




function printShops(object){
    object.forEach( (obj) =>
    document.querySelector('.containerInlineLeft').
    insertAdjacentHTML('afterbegin',
        `
            <h1>${obj.shopTitle}</h1>
            <h2>Адрес: ${obj.location}</h2>
            <h2>Оценка: ${obj.grade}</h2>
            <h2>Время открытия: ${obj.openTime}</h2>
            <h2>Время закрытия: ${obj.closingTime}</h2>
            `
        )
)
}



// "http://localhost:8080/flowers/api/v1/{title}"
// "http://localhost:8080/flowers/api/v1/flower_shops"