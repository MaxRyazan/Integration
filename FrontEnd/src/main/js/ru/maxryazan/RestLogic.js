let count = 1;
const URL_getAll = 'http://localhost:8080/flowers/api/v1/flower_shops';
let width = 400

document.querySelector('.searchInput').addEventListener('focus', () =>{
    document.querySelector('.searchInput').style.outline ='0'
})

function search() {
    let userInput = document.querySelector('.searchInput').value.toLowerCase().trim();
    let titles = [...document.querySelectorAll('.shopTitle')];
    let hiders = document.querySelectorAll('.class-for-hide')

    for(let item of titles){
        if(item.innerHTML.toLowerCase().indexOf(userInput) !== -1){
            hiders.forEach(elem => elem.classList.add('hide'))
            let c = item.innerHTML.toLowerCase().replace(" ", "")
            let thisElement = document.getElementById(c)
            thisElement.classList.remove('hide')
        }
    }
}

document.querySelector('.searchInput').addEventListener('keypress', search)

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
        let length = obj.imagePath.length
        document.querySelector('.containerInlineMain').insertAdjacentHTML('afterbegin',
    `
            <div class="inlineShops class-for-hide"  id="${obj.shopTitle.toLowerCase().replace(' ', '')}">
                <div class="title">
                    <h1 class="shopTitle">${obj.shopTitle}</h1>
                    <h2>Адрес: ${obj.location}</h2>
                    <h2>Оценка:
                        <stars class="star">
                            ${rebuildGrade(obj.grade)}
                        </stars>
                    </h2>
                    <h2>Время открытия: ${obj.openTime.slice(0, 5)}</h2>
                    <h2>Время закрытия: ${obj.closingTime.slice(0, 5)}</h2>
                    <input class="btn" type="button" value="Листать фото" 
                    onclick="relocation(document.getElementById('${obj.shopTitle.replace(" ", "") + count}'), ${length})">
                </div>    
                <div class="sliderLine">    
                    <div class="inline2" id="${obj.shopTitle.replace(" ", "") + count}">  
                         ${obj.imagePath.map(image => `<img src="../images/${image}" alt="" class="img">`).join("")}
                     </div>    
                </div>    
            </div>                  
           `)
    })
}

function relocation(element, length) {
    if(window.innerWidth > 1990){
        width = 700
    }
    element.style.transform = 'translate(-'+ width * count+'px)'
    count++
    if(count === length) {
        count=0
    }
}



// "http://localhost:8080/flowers/api/v1/{title}"
// "http://localhost:8080/flowers/api/v1/flower_shops"