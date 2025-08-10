let countOfBooks = books.length;

function renderBooks(){
    for (let i = 0; i < countOfBooks; i++) {
        renderFrameOfBook(i);
        renderTitleofBook(i);
        renderPriceLikes(i);
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
        "likes": books[index].likes
    }

    contentPriceLikesRef.innerHTML += getPriceLikesTemplate(aktualPriceLikes, index);
}