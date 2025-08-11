function getFrameTemplate(index){
    return `<div id="frame${index}" class="frame">
            </div>`;
}

function getTitleTemplate(strTitle){
    return `<h3>${strTitle}</h3>
            <hr>
            <div class="book-box">
                <img src="./assets/img/book.png" alt="book graphic as design">
            </div>
            <hr class="hr-bottom">`;
}

function getPriceLikesTemplate(myObject, index){
    let objkeys = Object.keys(myObject);

    return `<div class="price-box">
                <span class="price">${myObject[objkeys[0]]} €</span>
                <div class="liked-container" onclick="changeCheckboxImg(${index})">
                    <div id="img_box${index}"></div>
                    <span id="like_value${index}" class="liked">${myObject[objkeys[1]]}</span>
                </div>
            </div>`;
}

function getIsLikedTemplate(){
    return `<img src="./assets/icons/heart.svg" alt="checkbox designed as a heart">`;
}

function getIsNotLikedTemplate(){
    return `<img src="./assets/icons/heart_broken.svg" alt="unchecked checkbox designed as broken heart">`;
}

function getLikesValueTemplate(likes){
    return `<span id="like_value" class="liked">${likes}</span>`;
}

function getBookInfosTemplate(myObject){
    let objkeys = Object.keys(myObject);
    return `<div class="info-container">
                <table>
                    <tr>
                        <td>Author</td>
                        <td>:</td>
                        <td>${myObject[objkeys[0]]}</td>
                    </tr>
                    <tr>
                        <td>Erscheinungsjahr</td>
                        <td>:</td>
                        <td>${myObject[objkeys[1]]}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>:</td>
                        <td>${myObject[objkeys[2]]}</td>
                    </tr>
                </table>
            </div>
            <hr>`;
}