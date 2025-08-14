let countOfBooks = books.length;

function renderBooks(){
    getDataFromLocalStorage(countOfBooks);

    for (let i = 0; i < countOfBooks; i++) {
        renderFrameOfBook(i);
        renderTitleofBook(i);
        renderPriceLikes(i);
        renderBookInfos(i);
        renderComments(i);
        renderInputField(i);
    }
    // saveInputToLocalStorage(countOfBooks);
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

function renderComments(index){
    const contentCommentsRef = document.getElementById('frame' + index);
    let comments = {
        "name":"",
        "comment":""
    };
    let amountOfComments = books[index].comments.length;

    contentCommentsRef.innerHTML += getCommentsTableTemplate(index);
    let contentTableRef = document.getElementById('comments' + index);

    for (let i = 0; i < amountOfComments; i++) {
        comments = books[index].comments[i];
        
        contentTableRef.innerHTML += getContentCommentsTemplate(comments);
    }

}

function renderInputField(index){
    const contentInputRef = document.getElementById('frame' + index);

    contentInputRef.innerHTML += getInputFieldTemplate(index);
}

function renderNewComment(index){
    let newCommentRef = document.getElementById('input' + index);
    let newComment = String(newCommentRef.value);
    let myComment = {
        "name" : "Batzo",
        "comment" : newComment
    };

    if(newComment == ""){
        alert('Kommentarfeld darf nicht leer sein.');
    }
    else{
        books[index].comments.unshift(myComment);
        saveInputToLocalStorage(countOfBooks);
        location.reload();
    }
}