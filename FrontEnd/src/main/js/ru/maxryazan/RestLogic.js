
const URL_getAll = 'http://localhost:8080/flowers/api/v1/flower_shops';

fetch(URL_getAll, { headers: { "Content-type": "application/json; charset=UTF-8" }})
        .then((res) => res.json())
        .then((shops) => printShops(shops));

function rebuildGrade(grade){
    switch (grade.toUpperCase()) {
        case 'VERY_BAD': return '&#9733; &#10032; &#10032; &#10032; &#10032;'
        case 'JUST_BAD': return '&#9733; &#9733; &#10032; &#10032; &#10032;'
        case 'NEUTRAL': return '&#9733; &#9733; &#9733; &#10032; &#10032;'
        case 'GOOD': return '&#9733; &#9733; &#9733; &#9733; &#10032'
        case 'VERY_GOOD': return '&#9733; &#9733; &#9733; &#9733; &#9733;'
        default : return '&#9733; &#9733; &#9733;'
    }
}

function printShops(object){
    object.forEach( (obj) => {
        document.querySelector('.containerInlineMain').insertAdjacentHTML('afterbegin',
    `
            <div class="inline">
                <div class="title">
                    <h1>${obj.shopTitle}</h1>
                    <h2>Адрес: ${obj.location}</h2>
                    <h2>Оценка:
                        <stars class="star"> ${rebuildGrade(obj.grade)}</stars>
                    </h2>
                    <h2>Время открытия: ${obj.openTime.slice(0, 5)}</h2>
                    <h2>Время закрытия: ${obj.closingTime.slice(0, 5)}</h2>
                </div>    
                <div class="inline2"> 
                    ${obj.imagePath.map(image => `<img src="../images/${image}" alt="" class="img">`).join("")}
                </div>           
            </div>
           `)
    })
}



window.addEventListener('resize', () => {
    let mainWindow = document.querySelector('.containerInlineMain')
    if(window.innerWidth < 760){
        mainWindow.style.width = `${window.innerWidth - 50}px`
    } else {
        if (window.innerWidth > 2160) {
            mainWindow.style.width = `${window.innerWidth / 2.5}px`
        } else {
            if (window.innerWidth < 1500) {
                mainWindow.style.width = `${window.innerWidth / 1.5}px`
            }
        }
    }
            if (window.innerWidth > 2160) {
                mainWindow.style.marginLeft = "10%"
                mainWindow.style.marginTop = "17%"
                mainWindow.style.transform = "scale(1.5)"
            } else {
                    if (window.innerWidth < 2160) {
                        mainWindow.style.marginLeft = "0"
                        mainWindow.style.marginTop = "0"
                        mainWindow.style.transform = "scale(1)"
                    }
                }
    if (window.innerWidth > 2360) {
        mainWindow.style.marginLeft = "10%"
        mainWindow.style.marginTop = "13%"
    }

})









// "http://localhost:8080/flowers/api/v1/{title}"
// "http://localhost:8080/flowers/api/v1/flower_shops"