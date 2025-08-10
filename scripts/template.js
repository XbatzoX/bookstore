function getFrameTemplate(index){
    return `<div id="frame${index}" class="frame">
            </div>`
}

function getTitleTemplate(strTitle){
    return `<h3>${strTitle}</h3>
            <hr>
            <div class="book-box">
                <img src="./assets/img/book.png" alt="book graphic as design">
            </div>
            <hr class="hr-bottom">`
}

function getPriceLikesTemplate(myObject, index){
    let objkeys = Object.keys(myObject);

    return `<div class="price-box">
                <span>${myObject[objkeys[0]]} €</span>
                <div>
                    <div id="img-box${index}"></div>
                    <span>${myObject[objkeys[1]]}</span>
                </div>
            </div>`
}