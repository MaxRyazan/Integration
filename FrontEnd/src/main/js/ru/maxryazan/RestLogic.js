

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
    let count = 1;
    object.forEach( (obj) => {
        document.querySelector('.containerInlineLeft').insertAdjacentHTML('afterbegin',
    `
            <div class="inline">
                <div class="oneShopContainer">
                    <h1>${obj.shopTitle}</h1>
                    <h2>Адрес: ${obj.location}</h2>
                    <h2>Оценка:<color class="star"> ${rebuildGrade(obj.grade)}</color></h2>
                    <h2>Время открытия: ${obj.openTime.slice(0, 5)}</h2>
                    <h2>Время закрытия: ${obj.closingTime.slice(0, 5)}</h2>
                </div>
            </div>    
       `)

        let item = "id" + count;
        count++
        document.querySelector('.containerInlineRight').insertAdjacentHTML('afterbegin',
            `
                <div class="test">
                    <div class="sliderOuterContainer" id=${item}> 
                        ${obj.imagePath.map(image => `<img src="../images/${image}" alt="img" class="img">`).join("")}
                     </div>    
                              
                </div>
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
})


document.querySelector('.containerInlineRight').addEventListener('mouseover', function(){
    let count = 0;
    let width =  document.querySelector('.sliderOuterContainer').offsetWidth;
    let array = document.querySelectorAll('.sliderOuterContainer')


    for(let i = 1; i < array.length+1; i++) {
        document.getElementById("id" + i).addEventListener('click', function () {
            document.getElementById("id" + i).style.transform = 'translate(-' + count* width + 'px';
            count++
        })
    }
});



// 2click - 4     3click - 3  4click - 2   1click - **
// "http://localhost:8080/flowers/api/v1/{title}"
// "http://localhost:8080/flowers/api/v1/flower_shops"