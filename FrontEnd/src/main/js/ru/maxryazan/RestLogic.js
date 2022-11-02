
fetch('http://localhost:8080/flowers/api/v1/flower_shops', {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
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
                    <h2>Оценка:<color class="star"> ${rebuildGrade(obj.grade)}</color></h2>
                    <h2>Время открытия: ${obj.openTime.slice(0, 5)}</h2>
                    <h2>Время закрытия: ${obj.closingTime.slice(0, 5)}</h2>
                </div>    
       
                    <div class="inline2"> 
                        ${obj.imagePath.map(image => `<img src="../images/${image}" alt="img" class="img">`).join("")}
                     </div>           
            </div>
            <a class="separator"></a>
         `)
    })
}


window.addEventListener('resize', () => {
    let mainWindow = document.querySelector('.containerInlineMain')
    if(window.innerWidth < 990){
        mainWindow.style.width = `${window.innerWidth - 150}px`
    }
    if(window.innerWidth < 760){
        mainWindow.style.width = `${window.innerWidth - 50}px`
    }
    if(window.innerWidth > 2100){
        mainWindow.style.minHeight = `1500px`
    }
})





// "http://localhost:8080/flowers/api/v1/{title}"
// "http://localhost:8080/flowers/api/v1/flower_shops"