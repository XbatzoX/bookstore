let countOfBooks = books.length;

function renderBooks(){
    for (let i = 0; i < countOfBooks; i++) {
        renderFrameOfBook(i);
        renderTitleofBook(i);
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