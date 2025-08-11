let countOfBooks = books.length;

function renderBooks(){
    for (let i = 0; i < countOfBooks; i++) {
        renderFrameOfBook(i);
        renderTitleofBook(i);
        renderPriceLikes(i);
        renderBookInfos(i);
    }
}

function renderFrameOfBook(index){
    const contentFrameRef = document.getElementById('books_container');
    contentFrameRef.innerHTML += getFrameTemplate(index);


}

function renderTitleofBook(index){
    const contentTitleRef = document.getElementById('frame' + index);
    let title = books[index].name;

    contentTitleRef.innerHTML = getTitleTemplate(title);
}

function renderPriceLikes(index){
    const contentPriceLikesRef = document.getElementById('frame' + index);
    let aktualPriceLikes = {
        "price": books[index].price,
        "likes": books[index].likes,
        "liked": books[index].liked
    };
    aktualPriceLikes.price = aktualPriceLikes.price.toFixed(2);
    contentPriceLikesRef.innerHTML += getPriceLikesTemplate(aktualPriceLikes, index);
    renderLikedStatus((aktualPriceLikes.liked), index);
}

function renderLikedStatus(boolLiked, index){
    const contentLikedRef = document.getElementById('img_box' + index);
    let isLiked = boolLiked;

    if(isLiked){
        contentLikedRef.innerHTML = getIsLikedTemplate();
    }
    else{
        contentLikedRef.innerHTML = getIsNotLikedTemplate();
    }
}

function changeCheckboxImg(index){
    const contentLikedRef = document.getElementById('img_box' + index);
    let isLiked = books[index].liked;

    if(isLiked){
        contentLikedRef.innerHTML = getIsNotLikedTemplate();
    }
    else{
        contentLikedRef.innerHTML = getIsLikedTemplate();
    }

    customizeLikeValues(isLiked, index);
}

function customizeLikeValues(isLiked, index){
    const contentLikesRef = document.getElementById('like_value' + index);
    let countLikes = books[index].likes;

    if(isLiked){
        books[index].liked = false;
        books[index].likes = (countLikes - 1);
    }
    else{
        books[index].liked = true;
        books[index].likes = (countLikes + 1);
    }

    contentLikesRef.innerHTML = getLikesValueTemplate(books[index].likes);
}

function renderBookInfos(index){
    const contentInfosRef = document.getElementById('frame' + index);
    let bookInfos = {
        "author":books[index].author,
        "published":books[index].publishedYear,
        "genre":books[index].genre
    };

    contentInfosRef.innerHTML += getBookInfosTemplate(bookInfos);
}