function createCommentsObject(amountBooks){
    let comments = [];
    let book = [];
    let commentEntrie = {};
    let countOfBooks = amountBooks;
   

    for (let index = 0; index < countOfBooks; index++) {
        let countEntries = books[index].comments.length;
        book = [];

        for (let i =  0; i < countEntries; i++) {
            commentEntrie = {
                "name" : books[index].comments[i].name,
                "comment" : books[index].comments[i].comment
            };
            book.push(commentEntrie);
        }

        comments.push(book);
    }

    return comments;
}

function saveInputToLocalStorage(amountBooks){
    let commentsArr = createCommentsObject(amountBooks);

    localStorage.setItem('myBookComments', JSON.stringify(commentsArr));
}

function getDataFromLocalStorage(amountBooks){
    let myBookCommentsArr = JSON.parse(localStorage.getItem('myBookComments'));

    if((myBookCommentsArr != null) && (myBookCommentsArr.length > 0)){
        for (let index = 0; index < amountBooks; index++) {
            books[index].comments = myBookCommentsArr[index];
        }
    }
    else{
        localStorage.removeItem('myBookComments');
    }
}